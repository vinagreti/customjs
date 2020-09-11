import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

export class CustomValidators {
  constructor() {}

  static validateCpf(): ValidatorFn {
    return (control: AbstractControl): Validators => {
      const cpf = control.value;
      if (cpf) {
        let numbers, digits, sum, counter, result, equalDigits;
        equalDigits = 1;
        if (cpf.length < 11) {
          return null;
        }

        for (counter = 0; counter < cpf.length - 1; counter++) {
          if (cpf.charAt(counter) !== cpf.charAt(counter + 1)) {
            equalDigits = 0;
            break;
          }
        }

        if (!equalDigits) {
          numbers = cpf.substring(0, 9);
          digits = cpf.substring(9);
          sum = 0;
          for (counter = 10; counter > 1; counter--) {
            sum += numbers.charAt(10 - counter) * counter;
          }

          result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

          if (result !== Number(digits.charAt(0))) {
            return { cpfNotValid: true };
          }
          numbers = cpf.substring(0, 10);
          sum = 0;

          for (counter = 11; counter > 1; counter--) {
            sum += numbers.charAt(11 - counter) * counter;
          }
          result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

          if (result !== Number(digits.charAt(1))) {
            return { cpfNotValid: true };
          }
          return null;
        } else {
          return { cpfNotValid: true };
        }
      }
      return null;
    };
  }
}
