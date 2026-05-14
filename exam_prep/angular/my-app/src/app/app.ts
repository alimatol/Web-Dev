import { Component, OnInit } from '@angular/core';
import { Todo } from "./todo/todo";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RouterLink, RouterOutlet]
})

export class App{}
