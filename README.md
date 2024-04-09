![Logo]('https://raw.githubusercontent.com/alqahtani/saudi-validator-js/main/saudi-js.png')

![version badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Falqahtani%2Fsaudi-validator-js%2Fmain%2Fpackage.json&query=%24.version&label=version)
![License](https://img.shields.io/npm/l/saudi-validator)

---
## About
**Saudi-Validator** is a toolkit to verify Saudi specific formats, like: id, phone and mobile numbers.

## Why
To ensures data integrity and compliance with Saudi Arabia’s official formats, making it an essential tool for developers targeting the Saudi market. It offers:

- **Accuracy**: Matches Saudi standards for ID and phone numbers.
- **Simplicity**: Easy integration with a straightforward API.
- **Efficiency**: Saves development time with ready-to-use validation functions.
- **Localization**: Tailored for Saudi-specific data validation needs.

Ideal for web services, applications, and systems requiring Saudi format validation, **Saudi-Validator** streamlines development and enhances data reliability.

## Installation

To use **Saudi-Validator** in your project, install it via either of these commands:

```bash
# npm
npm install saudi-validator

# yarn
yarn add saudi-validator

# pnpm
pnpm install saudi-validator
```

## Usage

To get started with **Saudi-Validator**, follow these simple examples. Ensure you've installed the package in your project as detailed in the installation section.


### Validating Saudi ID numbers
```javascript
import { validateSaudiID } from 'saudi-validator'

// Validate a Saudi ID
const valid_id = '1010101010'; // Example Saudi ID
const invalid_id = '1234567890'; // Example Saudi ID

const idIsValid = validateSaudiID(valid_id).isValid // true
const idIsInvalid = validateSaudiID(invalid_id).isValid // false

console.log(`Is valid Saudi ID: ${idIsValid}`); // Outputs: true
console.log(`Is valid Saudi ID: ${idIsInvalid}`); // Outputs: false

// You can get more details about the id
console.log(validateSaudiID(valid_id))

// -----------------
// Output:
// -----------------
{
  isValid: true,
  id: '1010101010',
  type: {
    ar: 'هوية وطنية',
    en: 'National ID'
  }
}
```
Also, you can use the default `Saudi` object instead of named a specific validator:
```javascript
import Saudi from 'saudi-validator'

const valid_id = '1010101010'; // Example Saudi ID
const invalid_id = '123456789'; // Example Saudi ID

Saudi.isId(valid_id)
// Output:
true

Saudi.isId(invalid_id)
// Output:
false

// You can get more details about the id:

Saudi.id(valid_id)
// Output:
{
  isValid: true,
  id: '1010101010',
  type: {
    ar: 'هوية وطنية',
    en: 'National ID'
  }
}

Saudi.id(invalid_id)
// Output:
{
  isValid: false,
  id: '123456789',
  type: {
    en: 'Invalid ID',
    ar: 'رقم غير صالح'
  },
  reason: {
    en: 'ID should be 10 digits long',
    ar: 'رقم الهوية يجب أن يتكون من 10 أرقام'
  }
}


// Other types of accepted Saudi ID are: Iqama and Border number

const valid_iqama = '2020202020' // Example Saudi Iqama
const valid_border_number = '3030303030' // Example Saudi Border Number

Saudi.isId(valid_iqama)
// Output:
true

Saudi.id(valid_iqama)
// Output:
{
  isValid: true,
  id: '2020202020',
  type: {
    ar: 'بطاقة إقامة',
    en: 'Iqama ID'
  }
}

Saudi.isId(valid_border_number)
// Output:
true

Saudi.id(valid_border_number)
// Output:
{
  isValid: true,
  id: '3030303030',
  type: {
    ar: 'رقم حدود',
    en: 'Border Number'
  }
}
```

### Validating Saudi Phone numbers
You can use named import to specifically import `{ validateSaudiPhone }` like the following example:
```javascript
import { validateSaudiPhone } from 'saudi-validator'

// Validate a Saudi Mobile Number
const mobileNumber = '+966501234567'; // Example Saudi mobile number

validateSaudiPhone(mobileNumber).isValid;
// Output:
true

validateSaudiPhone(mobileNumber);
// Output:
{
  isValid: true,
  input: '+966501234567',
  provider: {
    name: {
      ar: 'STC - الشركة السعودية للاتصالات',
      en: 'STC - Saudi Telecom Company'
    },
    code: '50',
    note: 'Numbers could be transfered by customers across providers'
  },
  country: {
    country_code: '+966',
    countryIso2: 'SA',
    countryIso3: 'SAU'
  },
  phone_options: [
    '501234567',
    '0501234567',
    '966501234567',
    '+966501234567',
    '00966501234567'
  ]
}

// Validate a landline phone number
const phoneNumber = '+966133123456'; // Example Saudi phone number

validateSaudiPhone(phoneNumber).isValid;
// Output:
true

validateSaudiPhone(phoneNumber);
// Output:
{
  isValid: true,
  input: '+966133123456',
  provider: {
    name: {
      ar: 'هاتف أرضي',
      en: 'Landline'
    }
  },
  area: {
    code: '13',
    name_en: 'The Eastern Province, which includes, Dammam, Khobar, Qatif, Jubail, Dhahran, Hafar al-Batin & others',
    name_ar: 'المنطقة الشرقية، تشمل الدمام، الخبر، القطيف، الجبيل، الظهران، حفر الباطن وغيرها'
  },
  country: {
    country_code: '+966',
    countryIso2: 'SA',
    countryIso3: 'SAU'
  },
  phone_options: [
    '0133123456',
    '966133123456',
    '+966133123456',
    '00966133123456'
  ]
}
```

Also, the default `Saudi` object can be used instead of named a specific validator:
```javascript
import Saudi from 'saudi-validator'

// Validate a Saudi Mobile Number
const mobileNumber = '561234567'; // Example Saudi mobile number

Saudi.isPhone(mobileNumber)
// Output:
true

Saudi.phone(mobileNumber)
// Output:
{
  isValid: true,
  input: '561234567',
  provider: {
    name: {
      ar: 'موبايلي',
      en: 'Mobily'
    },
    code: '56',
    note: 'Numbers could be transfered by customers across providers'
  },
  country: {
    country_code: '+966',
    countryIso2: 'SA',
    countryIso3: 'SAU'
  },
  phone_options: [
    '561234567',
    '0561234567',
    '966561234567',
    '+966561234567',
    '00966561234567'
  ]
}
```

## Error handling
This package will handle and cleanse input as long as the result will get to a valid ID or phone number.

here are some examples of different inputs that can be handled:
```javascript
import Saudi from 'saudi-validator'


// input with Arabic-indic digits
Saudi.id("١٠١٠١٠١٠١٠")
// Output:
{
  isValid: true,
  id: '1010101010',
  type: { ar: 'هوية وطنية', en: 'National ID' }
}

// input with mixed digits
Saudi.id("2020٢٠٢٠٢٠")
// Output:
{
  isValid: true,
  id: '2020202020',
  type: { ar: 'بطاقة إقامة', en: 'Iqama ID' }
}

// input with spaces, dots, dashes or underscores
Saudi.id("30-30 30.30_30")
// Output:
{
  isValid: true,
  id: '3030303030',
  type: { ar: 'رقم حدود', en: 'Border Number' }
}

// all the above is also working with phone numbers
Saudi.phone("059-123-4567")
// Output:
{
  isValid: true,
  input: '0591234567',
  provider: {
    name: { ar: 'زين', en: 'Zain' },
    code: '59',
    note: 'Numbers could be transfered by customers across providers'
  },
  country: { country_code: '+966', countryIso2: 'SA', countryIso3: 'SAU' },
  phone_options: [
    '591234567',
    '0591234567',
    '966591234567',
    '+966591234567',
    '00966591234567'
  ]
}
```

## API Reference

**Saudi-Validator** simplifies the validation of Saudi-specific data formats. Below are the main functions provided:

### `validateSaudiID(input: string | number): SaudiIDType`
> Also can be called using `Saudi.id()`

Validates whether the given string is a valid Saudi ID.
Returns an object with `isValid`.

- **Parameters**:
  - `input`: A string representing the Saudi ID to be validated.
- **Returns**: Object with `isValid` property indicateing `true` if the ID is valid, otherwise `false`.

### `validateSaudiPhone(input: string | number): SaudiPhoneType`
> Also can be called using `Saudi.phone()`

Validates whether the given string is a valid Saudi mobile number.

- **Parameters**:
  - `input`: A string representing the Saudi phone/mobile number to be validated.
- **Returns**: Object with `isValid` property indicateing `true` if the mobile number is valid, otherwise `false`.

These functions aim to provide a straightforward interface for validating Saudi IDs and mobile numbers, ensuring compliance with local standards and formats.
