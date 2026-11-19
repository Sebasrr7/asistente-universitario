import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

// export class LoginComponent {
//   email: string = '';
//   password: string = '';
//   rememberMe: boolean = false;

//   onLogin() {
//     console.log('Datos de inicio de sesión:', {
//       email: this.email,
//       password: this.password,
//       rememberMe: this.rememberMe
//     });
//   }
// }

export class LoginComponent implements OnInit {
  public formLogin!: FormGroup;
  
  email: string = 'sebastianriosrestrepo0@gmail.com';
  password: string = '123456';

  islogin: boolean = true;


  
  constructor(
    private fb: FormBuilder,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.formInit();

  }
 //metodo para inicializar el formulario
  public formInit() {
    this.formLogin = this.fb.group({
      email: [''],
      password: [''],
      rememberMe: [false]
    });
  }


 //metodo para manejar el evento de inicio de sesión
  iniciarSesion() {
    const data = this.formLogin.value;
    
    if (data.email != this.email || data.password != this.password) {
      this.islogin = false;
      setTimeout(() => {
        this.islogin = true;
      }, 5000)
    }
    else {
      sessionStorage.setItem('login', 'true')
      setTimeout(() => {
        this.router.navigate(['/pages/dashboard']);
      }, 2000)
     
    }
  }

}



