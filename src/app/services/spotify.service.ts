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
    'BQAOHdwtinh5SBYyH_4f_BQSqkGEawO78FYKKJvn98eyM-YC_905oo1DOd9IE4Y4LG3iBZkHdYBvPzIDKPU6b9EK1n5MZhwkwHjLxU0DhfbAm2cO8WHxEj186wRYUU0bx7ZN1QYo2GP0NM626UU';

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
