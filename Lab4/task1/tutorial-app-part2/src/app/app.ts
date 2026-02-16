import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CarService } from './car.server';
@Component({
  selector: 'app-root',
  
  template: `
  <nav>
    <a routerLink = "/">Home</a>
    <a routerLink = "/user"> User</a>
  </nav>
  <form [formGroup]="profileFrom" (ngSubmit)="handleSubmit()">
    <label>
      Name
      <input type = "text" formControlName = "name"/>
    </label>
    <label>
      Email
      <input type = "email" formControlName = "email"/>
    </label>
    <button type = "submit">Submit</button>
  </form>

  <h2>Profile Forms</h2>
  <p>Name: {{profileFrom.value.name}}</p>
  <p>Email: {{profileFrom.value.email}}</p>
  <p>{{CarService.getCars()}}</p>
  <router-outlet />
  `,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule],
})

export class App {
  CarService = inject(CarService);

  profileFrom= new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  })
  handleSubmit(){
    alert(this.profileFrom.value.name + '|' + this.profileFrom.value.email);
  }
}
