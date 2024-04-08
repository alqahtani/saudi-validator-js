export type SaudiIDType = {
    isValid: boolean
    id: string
    type: {
        en: string
        ar: string
    }
    reason?: {
        en: string
        ar: string
    }
}

export type SaudiPhoneType = {
    isValid: boolean
    input: string
    provider: {
        name: {
            en: string
            ar: string
        }
        code?: string
        note?: string
    }
    area?: {
        code: string
        name_en: string
        name_ar: string
    }
    country?: {
        country_code: string
        countryIso2: string
        countryIso3: string
    }
    phone_options?: string[]
    reason?: {
        en: string
        ar: string
    }
}
