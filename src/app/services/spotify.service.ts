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
    'BQADg4hh2Y7ko3u7RTF8RODmEuGh68QXuNXdGLJiag15_Rs5eQ_fJ-y5_vsrtxT4SS4J9RkwlJGsE41QLEygJZcMq6eFbEoG8PzXW2fooejDxFpG70g4AxchW9oGVJ4AquXKWLFULVhWQxAmXa8';

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

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map((data) => data['tracks'])
    );
  }
}
