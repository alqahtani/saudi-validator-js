export * from './validators'
import { validateSaudiID, validateSaudiPhone } from './validators'

const Saudi = {
    id: validateSaudiID,
    isId: (id: string | number) => validateSaudiID(id).isValid,
    phone: validateSaudiPhone,
    isPhone: (phone: string | number) => validateSaudiPhone(phone).isValid,
}

export default Saudi
