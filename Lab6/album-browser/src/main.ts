
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './app/home/home';
import { AboutComponent } from './app/about/about';
import { AlbumsComponent } from './app/albums/albums';
import { AlbumDetailComponent } from './app/album-detail/album-detail';
import { AlbumPhotoComponent } from './app/album-photo/album-photo';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'albums', component: AlbumsComponent },
      { path: 'albums/:id', component: AlbumDetailComponent },
      { path: 'albums/:id/photos', component: AlbumPhotoComponent },
      { path: '**', redirectTo: '/home' } 
    ])
  ]
}).catch(err => console.error(err));