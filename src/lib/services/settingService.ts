import { connectToDatabase } from '@/lib/db';
import Setting from '@/lib/models/Setting';

export async function getSettings() {
  try {
    await connectToDatabase();
    const settings = await Setting.find({});
    return settings;
  } catch (error) {
    console.error('Error fetching settings:', error);
    throw error;
  }
}

export async function updateSetting(key: string, value: string) {
  try {
    await connectToDatabase();
    const setting = await Setting.findOneAndUpdate(
      { key },
      { value },
      { upsert: true, new: true }
    );
    return setting;
  } catch (error) {
    console.error('Error updating setting:', error);
    throw error;
  }
}

export async function createDefaultSettings() {
  try {
    await connectToDatabase();
    
    const defaultSettings = [
      { key: 'email', value: 'your-email@example.com', type: 'string' },
      { key: 'github', value: 'https://github.com/yourusername', type: 'string' },
      { key: 'linkedin', value: 'https://linkedin.com/in/yourusername', type: 'string' },
      { key: 'siteTitle', value: 'Portfolio', type: 'string' },
    ];

    for (const setting of defaultSettings) {
      await Setting.findOneAndUpdate(
        { key: setting.key },
        { ...setting },
        { upsert: true, new: true }
      );
    }

    return await Setting.find({});
  } catch (error) {
    console.error('Error creating default settings:', error);
    throw error;
  }
} 