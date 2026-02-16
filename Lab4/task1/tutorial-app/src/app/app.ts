import {Component, Input} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
//import {Child} from './child';
//import { Comments } from './comments';
//import { NgOptimizedImage } from '@angular/common';
//import { RouterOutlet } from '@angular/router';
import {User} from './user';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [User],
  //template:`<section><app-user /></section>`,
   //imports: [User],

  /* 
  template: `
  @if (isLoggedIn){
  <p>Welcome back friend!</p>
  }`,*/

  /*template: `
  @if(isServerRunning){
    <p>Yes the server is running</p>
  }@else{
    <p>No, the server is not running</p>
    }`,*/

    /*template: `
    @for(user of users; track user.id){
    <p>{{user.id}}: {{user.name}}</p>
    }`,*/

    /*template: `
    <div [contentEditable] = "isEditable"></div>
    `*/

    /*template: `<button (click) = "greet()"></button>`*/

    //template:`<section (mouseover) = "showSecretMessage()">There is a secret message for you to reveal {{message}}</section>`
   // template: `<app-user [occupation] = "' Angular Developer'"></app-user>`
  /*imports:[Child],
   template: `<app-child (addItemEvent) = "addItem($event)"/>
   <p>🐢 all the way down {{ items.length }}</p>`*/

  /*template:`
   <div>
   <h1>How do i feel abput angular</h1>
    <article>
        <p>
              Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
                feature that makes defer loading content the easiest and most ergonomic it could possibly
                be. The Angular community is also filled with amazing contributors and experts that create
                excellent content. The community is welcoming and friendly, and it really is the best
                community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted. In fact, I think I'll say these exact same
          things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted. In fact, I think I'll say these exact same
          things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted.
        </p>
    </article>
    
      @defer (on viewport) {
        <comments />
      } @placeholder {
        <p>Future comments</p>
      } @loading (minimum 2s) {
        <p>Loading comments...</p>
      }
   </div>
   
   `,
   imports: [Comments],*/

  /*template :`
  <li>
  Static Image: 
  <img ngSrc = "/logo.svg" alt = "Angular log" width = "32" height = "32"/>
  </li>
  <li>
  Dyanmic Image:
  <img [ngSrc] = "logoUrl" [alt] = "logoAlt" width = "32" height = "32" />
  </li>
  imports: [NgOptimizedImage],*/

 /* template: `
  <nav>
      <a href = "/">Home</a>
      <a href = "/user">User</a>
  </nav>
  <router-outlet/>
  `,*/

  imports: [RouterLink, RouterOutlet],
  
  template:`
  <nav>
   <a routerLink = "/"> Home</a>
   <a routerLink = "/user">User</a>
  </nav> 
  <router-outlet></router-outlet>
  `,
  
})

export class App {


  city = 'San Francisco';
  isLoggedIn = true;
  isServerRunning = true;

  users = [
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
  ];

  isEditable = true;

  greet(){
    console.log('Hello, there! :)');
  }
  message = '';
  showSecretMessage(){
    this.message = 'Way to go';
  }

  items = new Array();
  addItem(item: string){
    this.items.push(item);
  }
}

/*export class User{
  logoAlt = '/logo.svg';
  logoUrl = 'Angular.logo';
  username = 'youngTech';
}*/
