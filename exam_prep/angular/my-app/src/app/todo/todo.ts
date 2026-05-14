import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'to-do-app',
  imports:[FormsModule, CommonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})

export class Todo implements OnInit{
  newTask = "";
  tasks: string[] = [];

  ngOnInit(){
    console.log("Component made");
  }

  addTask(){
    this.tasks.push(this.newTask);
    this.newTask = "";
  }

  deleteTask(index: number){
    this.tasks.splice(index, 1);
  }
}
