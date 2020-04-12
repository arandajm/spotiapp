import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// provideIn => with this param, no neccesary to import it into the app.module to use it. Angular know about it!
@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  token: string =
    'BQBgjy0CvRZ9DyD8afQ9qgjoKV6i4ZdDrLMPXObaQ5s_iLrzEonLHseW1qQ9wLTsIr157VinByIUywm6hRmI1Gr7LYmZwjdAee-03r29qttQcSKWPbfV5p66dv9Nvt3-s8c2Gwr53HmHPFgVBbU';
  constructor(private httpClient: HttpClient) {
    console.log('Spotify service listo para usarse!');
  }

  getNewReleases() {
    // Create the httpHeaders that spotify needs to work!
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.httpClient.get(
      'https://api.spotify.com/v1/browse/new-releases?limit=20',
      {
        headers,
      }
    );
  }

  getArtistsByTerm(term: string) {
    // Create the httpHeaders that spotify needs to work!
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.httpClient.get(
      `https://api.spotify.com/v1/search?q=${term}&type=artist&limit=20`,
      {
        headers,
      }
    );
  }
}
