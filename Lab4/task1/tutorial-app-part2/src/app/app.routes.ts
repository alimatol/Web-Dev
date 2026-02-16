import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import{Home} from './home/home';
import { User } from './user/user';

export const routes: Routes = [
    {
        path: '',
        title: 'App Home Page',
        component: Home,
    },
    {
        path: 'user',
        title:'User App Page',
        component: User,
    }
];

