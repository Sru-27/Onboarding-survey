import { FormGroup } from '@angular/forms';

export function URLValidator(controlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];

    if (control.errors && !control.errors.invalidURL) {
      return;
    }

    // set error on control if validation fails
    try {
      const url = new URL(control.value);
      control.setErrors(null);
    } catch (_) {
      control.setErrors({ invalidURL: true });
    }
  };
}
