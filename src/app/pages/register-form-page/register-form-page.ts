import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MICROCHIP, NOMBRE_MASCOTA, PASSWORD, SOLO_LETRAS, TELEFONO } from '../../validators/regex';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-register-form-page',
  styleUrl: './register-form-page.css',
  templateUrl: './register-form-page.html',
})
export class RegisterFormPage {
  registerForm = new FormGroup({
    propietario: new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern(SOLO_LETRAS)]),
      apellidos: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(SOLO_LETRAS)]),
      telefono: new FormControl('', [Validators.required, Validators.pattern(TELEFONO)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    }),
    mascota: new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(NOMBRE_MASCOTA)]),
      especie: new FormControl('', [Validators.required]),
      sexo: new FormControl('', [Validators.required]),
      raza: new FormControl('', [Validators.maxLength(40)]),
      edad: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(30)]),
      peso: new FormControl(null, [Validators.required, Validators.min(0.1), Validators.max(90)]),
      microchip: new FormControl('', [Validators.required, Validators.pattern(MICROCHIP)]),
    }),
    cuenta: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(24), Validators.pattern(PASSWORD)]),
      motivo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(300)]),
      privacidad: new FormControl(false, [Validators.requiredTrue]),
      recordatorios: new FormControl(false),
    }),
  });

  hasError(field: string, error: string) {
    const control = this.registerForm.get(field);
    return control?.hasError(error) && (control.dirty || control.touched);
  }

  registrar() {
    console.log(this.registerForm.value);
  }
}
