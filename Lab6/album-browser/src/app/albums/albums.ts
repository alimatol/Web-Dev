import { Component, OnInit, NgZone } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-albums',
  imports: [RouterModule, CommonModule],
  templateUrl: './albums.html',
  styleUrls: ['./albums.css'],

})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;

  constructor(private albumService: AlbumService, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (albums) => {
        this.ngZone.run(() => {  
          this.albums = albums;
          this.loading = false;
        });
      },
      error: (err) => {
        this.ngZone.run(() => this.loading = false);
        console.error('Failed to fetch albums', err);
      }
    });
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}