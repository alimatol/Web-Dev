import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector:'app-user',
    standalone: true,   
    template: `
    <p>User page of {{username}}</p>
    <p>{{username}} favorite framework: {{favoriteFramework}}</p>
    <label for = "framework">
    Favorite Framework:
    <input id = "framework" type = "text" [(ngModel)] = "favoriteFramework"/>
    </label>`,
    imports: [FormsModule],
})
export class User{
    username = 'youngTech';
    favoriteFramework = '';
}
