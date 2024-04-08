export const telecomCompanies = (
    number: string
): { englishName: string; arabicName: string } => {
    const mobileCompanies: {
        [key: string]: { englishName: string; arabicName: string }
    } = {
        '0': {
            englishName: 'STC - Saudi Telecom Company',
            arabicName: 'STC - الشركة السعودية للاتصالات',
        },
        '1': { englishName: 'Salam Mobile', arabicName: 'سلام موبايل' },
        '3': {
            englishName: 'STC - Saudi Telecom Company',
            arabicName: 'STC - الشركة السعودية للاتصالات',
        },
        '4': { englishName: 'Mobily', arabicName: 'موبايلي' },
        '5': {
            englishName: 'STC - Saudi Telecom Company',
            arabicName: 'STC - الشركة السعودية للاتصالات',
        },
        '6': { englishName: 'Mobily', arabicName: 'موبايلي' },
        '7': { englishName: 'Virgin Mobile', arabicName: 'فيرجن موبايل' },
        '8': { englishName: 'Zain', arabicName: 'زين' },
        '9': { englishName: 'Zain', arabicName: 'زين' },
    }

    // Access the company using the first digit of the provided number
    // and return the object containing both English and Arabic names.
    // If the number is not in the list, return placeholders or a default message.
    return (
        mobileCompanies[number[0]] || {
            englishName: 'Unknown',
            arabicName: 'غير معروف',
        }
    )
}
