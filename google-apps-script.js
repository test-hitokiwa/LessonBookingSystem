/**
 * hitokiwaレッスン予約システム - Google Apps Script
 * スプレッドシートとの双方向連携
 * 
 * URL: https://docs.google.com/spreadsheets/d/1ILRD7PZru2HWN6GdCnVT9ur5VWvxteCAPcY9wJSFuKg/edit
 */

// ==================== 設定 ====================
const STUDENT_SHEET_NAME = '生徒情報';
const ATTENDANCE_SHEET_NAME = 'レッスン出席表';

// 列のマッピング（生徒情報シート）
const STUDENT_COLUMNS = {
  COORDINATOR_ID: 2,  // B列: 担当者ID（例：クオン　CC → CC）
  STUDENT_ID: 4,      // D列: 受講生ID
  NAME: 6,            // F列: 名前
  STATUS: 20          // T列: ステータス（「求職中」で抽出）
};

// 列のマッピング（レッスン出席表シート）
const ATTENDANCE_COLUMNS = {
  LESSON_DATE: 2,     // B列: レッスン日
  STUDENT_ID: 3,      // C列: 受講生ID
  NAME: 4,            // D列: 名前
  COORDINATOR: 6,     // F列: 担当者
  ATTENDED: 7,        // G列: 出席（チェックボックス）
  ABSENT: 8,          // H列: 欠席（チェックボックス）
  EVALUATION: 9       // I列: 評価
};

// ==================== GETリクエスト ====================
function doGet(e) {
  const action = e.parameter.action;
  
  try {
    if (action === 'getStudents') {
      return getStudents();
    }
    
    return createResponse(false, 'Invalid action');
    
  } catch (error) {
    return createResponse(false, error.toString());
  }
}

// ==================== POSTリクエスト ====================
function doPost(e) {
  try {
    const params = JSON.parse(e.postData.contents);
    const action = params.action;
    
    if (action === 'writeAttendance') {
      return writeAttendance(params.data);
    }
    
    return createResponse(false, 'Invalid action');
    
  } catch (error) {
    return createResponse(false, error.toString());
  }
}

// ==================== 受講生データ取得 ====================
function getStudents() {
  try {
    const sheet = SpreadsheetApp.openById('1ILRD7PZru2HWN6GdCnVT9ur5VWvxteCAPcY9wJSFuKg')
                                .getSheetByName(STUDENT_SHEET_NAME);
    
    if (!sheet) {
      return createResponse(false, `シート「${STUDENT_SHEET_NAME}」が見つかりません`);
    }
    
    const data = sheet.getDataRange().getValues();
    const students = [];
    
    // ヘッダー行（1行目）をスキップ
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      
      // T列（STATUS）が「求職中」の行のみ抽出
      const status = row[STUDENT_COLUMNS.STATUS - 1]; // 配列は0始まりなので-1
      
      if (status === '求職中') {
        const studentId = row[STUDENT_COLUMNS.STUDENT_ID - 1];
        const name = row[STUDENT_COLUMNS.NAME - 1];
        
        // 必須項目のチェック
        if (!studentId || !name) {
          console.log(`行${i + 1}: 受講生IDまたは名前が空欄のためスキップ`);
          continue;
        }
        
        // 担当者IDの抽出（例：「クオン　CC」→「CC」）
        let coordinatorId = null;
        const coordinatorCell = row[STUDENT_COLUMNS.COORDINATOR_ID - 1];
        if (coordinatorCell) {
          const coordinatorStr = String(coordinatorCell).trim();
          // 空白で分割して最後の部分を取得
          const parts = coordinatorStr.split(/\s+/);
          if (parts.length > 0) {
            coordinatorId = parts[parts.length - 1];
          }
        }
        
        students.push({
          id: String(studentId).trim(),
          name: String(name).trim(),
          level: '',  // レベルは任意（空欄可）
          coordinatorId: coordinatorId,
          status: status,
          rowIndex: i + 1  // スプレッドシートの行番号
        });
      }
    }
    
    return createResponse(true, null, {
      students: students,
      count: students.length,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    return createResponse(false, error.toString());
  }
}

// ==================== 出席・評価データ書き込み ====================
function writeAttendance(attendanceData) {
  try {
    const sheet = SpreadsheetApp.openById('1ILRD7PZru2HWN6GdCnVT9ur5VWvxteCAPcY9wJSFuKg')
                                .getSheetByName(ATTENDANCE_SHEET_NAME);
    
    if (!sheet) {
      return createResponse(false, `シート「${ATTENDANCE_SHEET_NAME}」が見つかりません`);
    }
    
    let writeCount = 0;
    let skippedCount = 0;
    
    // データを1行ずつ書き込み
    attendanceData.forEach(record => {
      // 既存データを検索（レッスン日 + 受講生IDで一致する行）
      const existingRow = findAttendanceRow(sheet, record.lessonDate, record.studentId);
      
      if (existingRow > 0) {
        // 既存データがある場合は上書きしない（スキップ）
        console.log(`スキップ: 行${existingRow}に既にデータが存在（${record.studentId}、${record.lessonDate}）`);
        skippedCount++;
      } else {
        // 新規行を追加（3行目以降の空行に書き込み）
        appendAttendanceRow(sheet, record);
      }
      
      writeCount++;
    });
    
    return createResponse(true, null, {
      count: writeCount,
      skipped: skippedCount,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    return createResponse(false, error.toString());
  }
}

// ==================== 出席データの検索 ====================
function findAttendanceRow(sheet, lessonDate, studentId) {
  const data = sheet.getDataRange().getValues();
  
  // レッスン日を文字列に変換（比較用）
  const targetDate = formatDate(lessonDate);
  
  for (let i = 1; i < data.length; i++) {
    const rowDate = formatDate(data[i][ATTENDANCE_COLUMNS.LESSON_DATE - 1]);
    const rowStudentId = String(data[i][ATTENDANCE_COLUMNS.STUDENT_ID - 1]).trim();
    
    if (rowDate === targetDate && rowStudentId === String(studentId).trim()) {
      return i + 1; // スプレッドシートの行番号（1始まり）
    }
  }
  
  return -1; // 見つからない
}

// ==================== 出席データの更新 ====================
function updateAttendanceRow(sheet, rowIndex, record) {
  sheet.getRange(rowIndex, ATTENDANCE_COLUMNS.LESSON_DATE).setValue(record.lessonDate);
  sheet.getRange(rowIndex, ATTENDANCE_COLUMNS.STUDENT_ID).setValue(record.studentId);
  sheet.getRange(rowIndex, ATTENDANCE_COLUMNS.NAME).setValue(record.studentName);
  sheet.getRange(rowIndex, ATTENDANCE_COLUMNS.COORDINATOR).setValue(record.coordinator);
  sheet.getRange(rowIndex, ATTENDANCE_COLUMNS.ATTENDED).setValue(record.attended);
  sheet.getRange(rowIndex, ATTENDANCE_COLUMNS.ABSENT).setValue(record.absent);
  sheet.getRange(rowIndex, ATTENDANCE_COLUMNS.EVALUATION).setValue(record.evaluation);
}

// ==================== 出席データの追加 ====================
function appendAttendanceRow(sheet, record) {
  // 3行目以降の空行を探す
  const data = sheet.getDataRange().getValues();
  let emptyRow = -1;
  
  // 3行目（インデックス2）から検索
  for (let i = 2; i < data.length; i++) {
    // B列（レッスン日）が空欄の行を探す
    const lessonDate = data[i][ATTENDANCE_COLUMNS.LESSON_DATE - 1];
    if (!lessonDate || String(lessonDate).trim() === '') {
      emptyRow = i + 1; // スプレッドシートの行番号（1始まり）
      break;
    }
  }
  
  // 空行が見つからない場合は最終行の次に追加
  if (emptyRow === -1) {
    emptyRow = sheet.getLastRow() + 1;
  }
  
  // 3行目より前には書き込まない（ヘッダー保護）
  if (emptyRow < 3) {
    emptyRow = 3;
  }
  
  // データを書き込み
  sheet.getRange(emptyRow, ATTENDANCE_COLUMNS.LESSON_DATE).setValue(record.lessonDate);
  sheet.getRange(emptyRow, ATTENDANCE_COLUMNS.STUDENT_ID).setValue(record.studentId);
  sheet.getRange(emptyRow, ATTENDANCE_COLUMNS.NAME).setValue(record.studentName);
  sheet.getRange(emptyRow, ATTENDANCE_COLUMNS.COORDINATOR).setValue(record.coordinator);
  sheet.getRange(emptyRow, ATTENDANCE_COLUMNS.ATTENDED).setValue(record.attended);
  sheet.getRange(emptyRow, ATTENDANCE_COLUMNS.ABSENT).setValue(record.absent);
  sheet.getRange(emptyRow, ATTENDANCE_COLUMNS.EVALUATION).setValue(record.evaluation);
  
  console.log(`行${emptyRow}に書き込み: ${record.studentId}、${record.lessonDate}`);
}

// ==================== ユーティリティ関数 ====================

// 日付フォーマット（YYYY-MM-DD形式に統一）
function formatDate(date) {
  if (!date) return '';
  
  if (typeof date === 'string') {
    // 既に文字列の場合
    return date.split('T')[0]; // ISO形式の場合は日付部分のみ
  }
  
  if (date instanceof Date) {
    // Dateオブジェクトの場合
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  
  return String(date);
}

// レスポンス作成
function createResponse(success, error, data) {
  const response = {
    success: success
  };
  
  if (error) {
    response.error = error;
  }
  
  if (data) {
    Object.assign(response, data);
  }
  
  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

// ==================== テスト関数 ====================

// 受講生取得のテスト
function testGetStudents() {
  const result = getStudents();
  Logger.log(result.getContent());
}

// 出席データ書き込みのテスト
function testWriteAttendance() {
  const testData = [
    {
      lessonDate: '2025-01-30',
      studentId: 'STU001',
      studentName: 'YAMADA HANAKO',
      coordinator: '山田太郎',
      attended: true,
      absent: false,
      evaluation: '受講生評価: ★★★★☆ (4/5)\n講師評価: 良好'
    }
  ];
  
  const result = writeAttendance(testData);
  Logger.log(result.getContent());
}
