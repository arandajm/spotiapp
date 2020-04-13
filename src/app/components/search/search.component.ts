import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  loading: boolean;
  constructor(private _spotifyService: SpotifyService) {}

  ngOnInit(): void {}

  buscar(term: string) {
    this.loading = true;
    this._spotifyService.getArtistsByTerm(term).subscribe((data: any) => {
      this.artistas = data;
      this.loading = false;
      console.log(this.artistas);
    });
  }
}
