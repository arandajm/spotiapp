import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// RxJS v6+
import { map } from 'rxjs/operators';

// provideIn => with this param, no neccesary to import it into the app.module to use it. Angular know about it!
@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  token: string =
    'BQAv3Qao9a3v45SAYFP4LcZ5QihYsle__aFUW6v6Kav6Otp8_pHt0jjBNVV9QYd4TaPuPCltLGSVmJ3Ub56NqrjgsaAabfA_3RVZiSRUlay-EIQEqNc0KmzNeX9-lqR0kQy1E8WAE8VY4kB1pE0';
  constructor(private httpClient: HttpClient) {
    console.log('Spotify service listo para usarse!');
  }

  getNewReleases() {
    // Create the httpHeaders that spotify needs to work!
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.httpClient
      .get('https://api.spotify.com/v1/browse/new-releases?limit=20', {
        headers,
      })
      .pipe(map((data) => data['albums'].items));
  }

  getArtistsByTerm(term: string) {
    // Create the httpHeaders that spotify needs to work!
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.httpClient
      .get(`https://api.spotify.com/v1/search?q=${term}&type=artist&limit=20`, {
        headers,
      })
      .pipe(map((data) => data['artists'].items));
  }
}
