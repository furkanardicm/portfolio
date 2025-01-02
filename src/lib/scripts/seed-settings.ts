import { connectToDatabase } from '../db';
import { Setting } from '../models/Setting';

const defaultSettings = [
  {
    key: 'email',
    value: 'example@example.com',
    type: 'email',
  },
  {
    key: 'github',
    value: 'https://github.com/yourusername',
    type: 'url',
  },
  {
    key: 'linkedin',
    value: 'https://linkedin.com/in/yourusername',
    type: 'url',
  },
  {
    key: 'twitter',
    value: 'https://twitter.com/yourusername',
    type: 'url',
  },
  {
    key: 'siteTitle',
    value: 'My Portfolio',
    type: 'text',
  },
  {
    key: 'siteDescription',
    value: 'Welcome to my portfolio website',
    type: 'text',
  },
];

async function seedSettings() {
  try {
    await connectToDatabase();

    for (const setting of defaultSettings) {
      await Setting.findOneAndUpdate(
        { key: setting.key },
        setting,
        { upsert: true }
      );
    }

    console.log('Settings seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding settings:', error);
    process.exit(1);
  }
}

seedSettings(); 