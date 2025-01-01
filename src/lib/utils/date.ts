type Language = 'tr' | 'en';

const months: Record<Language, string[]> = {
  tr: [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık',
  ],
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
};

export function formatDate(dateString: string, language: Language): string {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = months[language][date.getMonth()];
  const year = date.getFullYear();

  return language === 'tr'
    ? `${day} ${month} ${year}`
    : `${month} ${day}, ${year}`;
} 