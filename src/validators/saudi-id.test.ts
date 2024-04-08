import { validateSaudiID } from './saudi-id'
/**
 * This file is used to test the saudi-id validator
 */

const testIds: [string, boolean, string[]][] = [
    ['1010101010', true, ['هوية وطنية', 'National ID']],
    ['1234567890', false, ['رقم غير صالح', 'Invalid ID']],
    ['2000000006', true, ['بطاقة إقامة', 'Iqama ID']],
    ['2_0_0_0_0_0_0_0_0_6', true, ['بطاقة إقامة', 'Iqama ID']],
    ['٢٠٠٠٠٠٠٠٠٦', true, ['بطاقة إقامة', 'Iqama ID']],
    ['300000000٤', true, ['رقم حدود', 'Border Number']],
    ['3000000002', false, ['رقم غير صالح', 'Invalid ID']],
    ['ahmed', false, ['رقم غير صالح', 'Invalid ID']],
]

describe('Saudi ID Validator Test Suite', () => {
    it('should return true when ID is valid, false when it is not', () => {
        testIds.forEach(id => {
            expect(validateSaudiID(id[0]).isValid).toBe(id[1])
        })
    })

    it('should return the correct ID type', () => {
        testIds.forEach(id => {
            expect(validateSaudiID(id[0]).type.ar).toBe(id[2][0])
            expect(validateSaudiID(id[0]).type.en).toBe(id[2][1])
        })
    })

    it('should return an object with analysis when ID is Valid', () => {
        expect(validateSaudiID(testIds[0][0])).toEqual({
            isValid: testIds[0][1],
            id: testIds[0][0],
            type: {
                ar: 'هوية وطنية',
                en: 'National ID',
            },
        })
    })

    it('should return an object with analysis when ID is invalid', () => {
        expect(validateSaudiID(testIds[1][0])).toEqual({
            isValid: testIds[1][1],
            id: testIds[1][0],
            type: {
                ar: 'رقم غير صالح',
                en: 'Invalid ID',
            },
            reason: {
                en: 'ID failed Luhn algorithm',
                ar: 'فشل الرقم في خوارزمية لون',
            },
        })
    })
})
