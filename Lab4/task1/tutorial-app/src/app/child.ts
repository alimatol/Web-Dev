import { Component, output } from "@angular/core";

@Component({
    selector: 'app-child',
    standalone: true,   
    styles: `.btn{
    padding: 5px;}`,
    template: `<button class = "btn" (click) = "addItem()">AddItem</button>`
})
export class Child{
    readonly addItemEvent = output<string>();
    addItem(){
        this.addItemEvent.emit('🐢');
    }
}