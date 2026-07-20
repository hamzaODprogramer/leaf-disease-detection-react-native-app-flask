import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseAsync('leaf_detection.db');

interface DetectionRow {
  id: number;
  image_uri: string;
  disease_name: string;
  confidence: number;
  timestamp: string;
  status: string;
}

export const initDatabase = async () => {
  try {
    const database = await db;
    await database.execAsync(
      `CREATE TABLE IF NOT EXISTS detection_history (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image_uri TEXT,
        disease_name TEXT,
        confidence REAL,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        status TEXT
      )`
    );
    return true;
  } catch (error) {
    throw error;
  }
};

export const saveDetection = async (imageUri: string, diseaseName: string, confidence: number, status: string) => {
  try {
    const database = await db;
    await database.runAsync(
      'INSERT INTO detection_history (image_uri, disease_name, confidence, status) VALUES (?, ?, ?, ?)',
      [imageUri, diseaseName, confidence, status]
    );
    return true;
  } catch (error) {
    throw error;
  }
};

export const getDetections = async () => {
  try {
    const database = await db;
    const result = await database.getAllAsync(
      'SELECT * FROM detection_history ORDER BY timestamp DESC'
    );
    
    if (!result || !Array.isArray(result)) {
      return [];
    }

    return result.map((row: unknown) => {
      const typedRow = row as DetectionRow;
      return {
        id: typedRow.id,
        image_uri: typedRow.image_uri,
        disease_name: typedRow.disease_name,
        confidence: typedRow.confidence,
        timestamp: typedRow.timestamp,
        status: typedRow.status
      };
    });
  } catch (error) {
    return [];
  }
};

export const deleteDetection = async (id: number) => {
  try {
    const database = await db;
    await database.runAsync('DELETE FROM detection_history WHERE id = ?', [id]);
    return true;
  } catch (error) {
    throw error;
  }
}; 