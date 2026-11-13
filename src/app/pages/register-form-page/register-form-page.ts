import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SOLO_LETRAS, TELEFONO } from '../../validators/regex';

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
      nombre: new FormControl(''),
      especie: new FormControl(''),
      sexo: new FormControl(''),
      raza: new FormControl(''),
      edad: new FormControl(null),
      peso: new FormControl(null),
      microchip: new FormControl(''),
    }),
    cuenta: new FormGroup({
      password: new FormControl(''),
      motivo: new FormControl(''),
      privacidad: new FormControl(false),
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
