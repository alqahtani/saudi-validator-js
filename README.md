```text
 ___               _ _   __   __    _ _    _      _
/ __| __ _ _  _ __| (_)__\ \ / /_ _| (_)__| |__ _| |_ ___ _ _
\__ \/ _` | || / _` | |___\ V / _` | | / _` / _` |  _/ _ \ '_|
|___/\__,_|\_,_\__,_|_|    \_/\__,_|_|_\__,_\__,_|\__\___/_|
```
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

To use **Saudi-Validator** in your project, install it via npm:

```bash
npm install saudi-validator
```
or via yarn
```bash
yarn add saudi-validator
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
// Output:
// {
//   valid: true,
//   id: '1010101010',
//   type: { ar: 'هوية وطنية', en: 'National ID' }
// }
```

### Validating Saudi Phone numbers
```javascript
import { validateSaudiPhone } from 'saudi-validator'

// Validate a Saudi Mobile Number
const mobileNumber = '+966501234567'; // Example Saudi mobile number
const mobileIsValid = validateSaudiPhone(mobileNumber).isValid;
console.log(`Is valid Saudi mobile number: ${mobileIsValid}`); // Outputs: true or false
```

## API Reference

**Saudi-Validator** simplifies the validation of Saudi-specific data formats. Below are the main functions provided:

### `isValidID(id: string): boolean`

Validates whether the given string is a valid Saudi ID.

- **Parameters**:
  - `id`: A string representing the Saudi ID to be validated.
- **Returns**: `true` if the ID is valid, otherwise `false`.

### `isValidMobile(number: string): boolean`

Validates whether the given string is a valid Saudi mobile number.

- **Parameters**:
  - `number`: A string representing the Saudi mobile number to be validated.
- **Returns**: `true` if the mobile number is valid, otherwise `false`.

These functions aim to provide a straightforward interface for validating Saudi IDs and mobile numbers, ensuring compliance with local standards and formats.
