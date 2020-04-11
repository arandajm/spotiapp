import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// provideIn => with this param, no neccesary to import it into the app.module to use it. Angular know about it!
@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private httpClient: HttpClient) {
    console.log('Spotify service listo para usarse!');
  }

  getNewReleases() {
    // Create the httpHeaders that spotify needs to work!
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAgYa0ecL1tAwhtjck-Yl1q18rLK6uyTvBPaeKrYMflOKbp1SHrL6u2lAl-ywnOpfFkGLyr54unrRJGTtpOZq1RetnOGFqqagaLkDu1pTbRR3fNfQkyHXRqpdl8TIjDcjZduud2RD3-z1j9O8k',
    });

    return this.httpClient.get(
      'https://api.spotify.com/v1/browse/new-releases?limit=20',
      {
        headers,
      }
    );
  }
}
