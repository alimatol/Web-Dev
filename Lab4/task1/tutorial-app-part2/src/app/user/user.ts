import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
@Component({
    selector: 'user-app',
    template: `
    <p>Username: {{username}}</p>
    <p>{{username}} favorite framewrok: {{favoriteFramework}}</p>
    <label for = "framework">
        favoriteFramework: 
        <input id = "framework" type = "text" [(ngModel)] = "favoriteFramework" />
    </label>
    <button (click) ="showFramework()" >Show Framework</button>
    `,
    imports: [FormsModule],
})

export class User{
    username = 'youngTech';
    favoriteFramework = '';
    showFramework(){
        alert(this.favoriteFramework);
    }
}