import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const cpfNotValidResponse: ValidationErrors = { cpfNotValid: true };
export const cpfValidResponse: ValidationErrors = null;
export const cpfEmptyResponse: ValidationErrors = null;

export function cpfValidator(): ValidatorFn {
  const validatorFn = (control: AbstractControl): ValidationErrors => {
    const cpf = control.value;
    const isEmpty = !cpf?.length;
    if (isEmpty) {
      // IF EMPTY RETURNS NO ERROR
      return cpfEmptyResponse;
    } else {
      const hasCorrectLength = cpf.length === 11;
      if (hasCorrectLength) {
        const hasNoEqualDigits = customCpfMaskReturnTrueIfHasNoEqualDigits(cpf);
        if (hasNoEqualDigits) {
          const penultimateDigitIsOk = customCpfMaskReturnTrueIfRespectsPenultimateDigitSumRule(
            cpf,
          );
          if (penultimateDigitIsOk) {
            const lastDigitIsOk = customCpfMaskReturnTrueIfRespectsLastDigitSumRule(cpf);
            if (lastDigitIsOk) {
              // IF VALID RETURNS NO ERROR
              return cpfValidResponse;
            }
          }
        }
      }
      // IF NOT EMPTY AND NOT VALID RETURNS ERROR
      return cpfNotValidResponse;
    }
  };
  return validatorFn;
}

function customCpfMaskReturnTrueIfRespectsPenultimateDigitSumRule(cpf: string) {
  const firstTenDigits = cpf.substring(0, 9).split('');
  const penultimateDigit = cpf.substring(9, 10);
  const sum = firstTenDigits.reduce((total, digit, index) => {
    const opsitIndex = 10 - index;
    return total + parseInt(digit, 10) * opsitIndex;
  }, 0);
  const restOfSumDividedByEleven = sum % 11;
  const sumResult = restOfSumDividedByEleven < 2 ? 0 : 11 - restOfSumDividedByEleven;
  return sumResult === parseInt(penultimateDigit, 10);
}

function customCpfMaskReturnTrueIfRespectsLastDigitSumRule(cpf: string) {
  const firstElevenDigits = cpf.substring(0, 10).split('');
  const lastDigit = cpf.substring(10);
  const sum = firstElevenDigits.reduce((total, digit, index) => {
    const opsitIndex = 11 - index;
    return total + parseInt(digit, 10) * opsitIndex;
  }, 0);
  const restOfSumDividedByEleven = sum % 11;
  const sumResult = restOfSumDividedByEleven < 2 ? 0 : 11 - restOfSumDividedByEleven;
  return sumResult === parseInt(lastDigit, 10);
}

function customCpfMaskReturnTrueIfHasNoEqualDigits(cpf: string) {
  let equalDigits = 1;
  for (let i = 0; i < cpf.length - 1; i++) {
    if (cpf.charAt(i) !== cpf.charAt(i + 1)) {
      equalDigits = 0;
      break;
    }
  }
  return !equalDigits;
}
