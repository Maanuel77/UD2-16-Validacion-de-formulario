import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-register-form-page',
  styleUrl: './register-form-page.css',
  templateUrl: './register-form-page.html',
})
export class RegisterFormPage {
  registerForm = new FormGroup({
    propietario: new FormGroup({
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      telefono: new FormControl(''),
      email: new FormControl(''),
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

  registrar() {
    console.log(this.registerForm.value);
  }
}
