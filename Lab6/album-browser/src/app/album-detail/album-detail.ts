import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album.model';
import { AlbumService } from '../services/album.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-detail',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css'],
  standalone: true,
})

export class AlbumDetailComponent implements OnInit{
  album!: Album;
  loading = true;

  constructor(
    private albumService: AlbumService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  
    ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  save() {
    this.albumService.updateAlbum(this.album).subscribe(updated => {
      alert('Album updated!');
    });
  }
 
  back(){
    this.router.navigate(['/albums']);
  }
}
