
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  public formRegister!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formInit();
  }

  // Metodo para inicializar el formulario
  public formInit(): void {

    this.formRegister = this.fb.group({

      nombre: ['', Validators.required],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],

      confirmarPassword: ['', Validators.required]

    }, {
      validators: this.validarCoincidencia
    });

  }

  // Metodo para validar que las contraseñas sean iguales
  validarCoincidencia(control: AbstractControl): ValidationErrors | null {

    const password = control.get('password')?.value;
    const confirmarPassword = control.get('confirmarPassword')?.value;

    if (password !== confirmarPassword) {
      return { noCoinciden: true };
    }

    return null;
  }

  // Metodo para manejar el registro
  registrarUsuario(): void {

    if (this.formRegister.invalid) {
      this.formRegister.markAllAsTouched();
      return;
    }

    const data = this.formRegister.value;

    console.log('Datos del registro:', data);

  }

}
