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
    'BQCU8qW8xrV-D0QWIwX7d_ecnjtlMN0xLLTeUwpsphJUjZM--NwTS6F4JdcuueUoxJc92gf3NwN3PWn1y0y_oH2XSb04_p_C0O2Pa-vzD-Qu5nugrx7nd6fgRcDLXrKBN4i7vW1lrkGrMZrp6Tg';

  constructor(private httpClient: HttpClient) {
    console.log('Spotify service listo para usarse!');
  }

  getQuery(query: string) {
    // Create url
    const url: string = `https://api.spotify.com/v1/${query}`;

    // Create headers
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.httpClient.get(url, {
      headers,
    });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data) => data['albums'].items)
    );
  }

  getArtistsByTerm(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=20`).pipe(
      map((data) => data['artists'].items)
    );
  }
}
