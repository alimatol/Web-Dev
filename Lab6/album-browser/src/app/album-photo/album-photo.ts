import { Component, OnInit } from '@angular/core';
import { Photo } from '../models/photo.model';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photo',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './album-photo.html',
  styleUrls: ['./album-photo.css'],
})
export class AlbumPhotoComponent implements OnInit {
  photos: Photo[] = [];
  loading = true;

  constructor(private route: ActivatedRoute, private router: Router, private albumService: AlbumService){}
   ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(id).subscribe({
      next: data => { this.photos = data; this.loading = false; },
      error: () => this.loading = false
    });
  }

  back(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.router.navigate(['/albums', id]);
  }
}
