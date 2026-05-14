import { Routes } from '@angular/router';
import { Todo } from './todo/todo';
import { User } from './user/user';
import { App } from './app';

export const routes: Routes = [
    {path: '', component: App},
    {path: 'todo', component: Todo},
    {path: 'user', component: User},
];
