export const areaCodes = (code: string): { en: string; ar: string } => {
    const codes: { [key: string]: { en: string; ar: string } } = {
        '1': {
            en: 'Riyadh & the greater central region',
            ar: 'الرياض والمنطقة الوسطى الكبرى', // Placeholder, replace with actual Arabic
        },
        '2': {
            en: 'Western region, includes Makkah, Jeddah, Taif, Rabigh',
            ar: 'المنطقة الغربية، تشمل مكة، جدة، الطائف، رابغ', // Placeholder, replace with actual Arabic
        },
        '3': {
            en: 'The Eastern Province, which includes, Dammam, Khobar, Qatif, Jubail, Dhahran, Hafar al-Batin & others',
            ar: 'المنطقة الشرقية، تشمل الدمام، الخبر، القطيف، الجبيل، الظهران، حفر الباطن وغيرها', // Placeholder, replace with actual Arabic
        },
        '4': {
            en: 'Al-Madinah, Tabuk, Al-Jawf, Yanbu, Turaif, Skaka and Northern Borders Region',
            ar: 'المدينة المنورة، تبوك، الجوف، ينبع، طريف، سكاكا ومنطقة الحدود الشمالية', // Placeholder, replace with actual Arabic
        },
        '6': {
            en: 'Al-Qassim, Majma & Hail',
            ar: 'القصيم، المجمعة وحائل', // Placeholder, replace with actual Arabic
        },
        '7': {
            en: 'Southern regions like: Asir, Al-Baha, Jizan, Najran',
            ar: 'المناطق الجنوبية مثل: عسير، الباحة، جيزان، نجران', // Placeholder, replace with actual Arabic
        },
    }
    return codes[code] ? codes[code] : { en: 'Unknown', ar: 'غير معروف' }
}
