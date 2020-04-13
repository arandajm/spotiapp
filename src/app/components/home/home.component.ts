import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  nuevosLanzamientos: any[] = [];
  loading: boolean;
  constructor(private _spotifyService: SpotifyService) {}

  ngOnInit() {
    this.loading = true;
    this._spotifyService.getNewReleases().subscribe((data: any) => {
      this.nuevosLanzamientos = data;
      console.log(this.nuevosLanzamientos);
      this.loading = false;
    });
  }
}
