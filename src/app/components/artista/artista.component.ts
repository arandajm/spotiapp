import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent implements OnInit {
  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    // subscribe to get the params
    this.activatedRoute.params.subscribe((params) => {
      // Call to getArtist to get the artist from spotify
      this.getArtist(params['id']);
      this.getTopTracksByArtist(params['id']);
    });
  }

  getArtist(id: string) {
    this.loading = true;
    this._spotifyService.getArtist(id).subscribe((data: any) => {
      console.log(data);
      this.artista = data;
      this.loading = false;
    });
  }

  getTopTracksByArtist(id: string) {
    //this.loading = true;
    this._spotifyService.getTopTracks(id).subscribe((data: any) => {
      console.log(data);
      this.topTracks = data;
      console.log(this.topTracks);
      // this.loading = false;
    });
  }
}
