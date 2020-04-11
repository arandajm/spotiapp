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
        'Bearer BQB2faQwiWiCWm3ifw2ubHTB0f0uX-Gkw0KfcOhYXixt_HgXv-OPRVlUwRKpCPNRJ_ijVvnXxFyGfEFIFQfjFzviaJgMT_7cGc6flcieUn6mN2Hx4aNF6JhRG4ZpSGt7MCUswvqM_SprJ9v-vBA',
    });
    this.httpClient
      .get('https://api.spotify.com/v1/browse/new-releases?limit=20', {
        headers,
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
