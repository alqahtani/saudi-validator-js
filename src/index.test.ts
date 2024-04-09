import Saudi from './index'

describe('Testing the Saudi object', () => {
    it('should return true when the ID is valid, false when it is not', () => {
        expect(Saudi.id('1010101010').isValid).toBe(true)
        expect(Saudi.isId('1010101010')).toBe(true)

        expect(Saudi.id('101010101').isValid).toBe(false)
        expect(Saudi.isId('101010101')).toBe(false)
    })

    it('should return true when the phone is valid, false when it is not', () => {
        expect(Saudi.phone('0501234567').isValid).toBe(true)
        expect(Saudi.isPhone('0501234567')).toBe(true)

        expect(Saudi.phone('050123456').isValid).toBe(false)
        expect(Saudi.isPhone('050123456')).toBe(false)
    })
})
