import { validateSaudiPhone } from './saudi-phone'
/**
 * This file is used to test the saudi-phone validator
 */

const testPhones: [string, boolean, string[]][] = [
    [
        '0501234567',
        true,
        ['STC - الشركة السعودية للاتصالات', 'STC - Saudi Telecom Company'],
    ],
    ['050123456', false, ['غير معروف', 'Unknown']],
]

describe('Saudi Phone Validator Test Suite', () => {
    it('should return true when Phone is valid, false when it is not', () => {
        testPhones.forEach(phone => {
            expect(validateSaudiPhone(phone[0]).isValid).toBe(phone[1])
        })
    })

    it('should return the correct Phone provider', () => {
        testPhones.forEach(phone => {
            expect(validateSaudiPhone(phone[0]).provider.name.ar).toBe(
                phone[2][0]
            )
            expect(validateSaudiPhone(phone[0]).provider.name.en).toBe(
                phone[2][1]
            )
        })
    })
})
