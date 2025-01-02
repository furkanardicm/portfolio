import { NextResponse } from 'next/server';
import { getSettings, createDefaultSettings, updateSetting } from '@/lib/services/settingService';

export async function GET() {
  try {
    let settings = await getSettings();
    
    // Eğer ayarlar boşsa, varsayılan ayarları oluştur
    if (!settings || settings.length === 0) {
      settings = await createDefaultSettings();
    }
    
    return NextResponse.json(settings);
  } catch (error) {
    console.error('Error in settings API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const settings = await request.json();
    
    // Her ayarı güncelle
    for (const setting of settings) {
      await updateSetting(setting.key, setting.value);
    }
    
    const updatedSettings = await getSettings();
    return NextResponse.json(updatedSettings);
  } catch (error) {
    console.error('Error updating settings:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    const settings = await createDefaultSettings();
    return NextResponse.json(settings);
  } catch (error) {
    console.error('Error creating default settings:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 