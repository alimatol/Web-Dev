import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Output() info = new EventEmitter<string>();

  sendInfo(){
    this.info.emit("hello");
  }

}
