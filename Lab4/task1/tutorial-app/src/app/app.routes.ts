import { Routes } from '@angular/router';
import {User} from './user';
import {Home} from './home';

export const routes: Routes = [
    {
        path: '',
        title: 'Home Page',
        component: Home,
    },
    {
        path: 'user',
        title: 'User page',
        component: User,
    },
];
