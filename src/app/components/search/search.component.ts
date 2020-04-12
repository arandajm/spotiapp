import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  constructor(private _spotifyService: SpotifyService) {}

  ngOnInit(): void {}

  buscar(term: string) {
    this._spotifyService.getArtistsByTerm(term).subscribe((data: any) => {
      this.artistas = data;
      console.log(this.artistas);
    });
  }
}
