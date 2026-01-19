import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function RangeValidator(
  fieldMin: string = 'minPlayers',
  fieldMax: string = 'maxPlayers',
  errorAnnotation: string = 'range'
): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const min = group.get(fieldMin)?.value;
    const max = group.get(fieldMax)?.value;

    if (min != null && max != null && min > max) {
      return { [errorAnnotation]: true };
    }

    return null;
  }
}
