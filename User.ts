import { Validator } from "./validator";
import { Importable } from "./Interfaces";
import { Playlist } from "./Playlist";

export class User {
  private _username: string;
  private _password: string;

  private _playlists: Playlist[] = [];
  private _Albums: string[] = [];
  private _Songs: string[] = [];

  constructor(username: string, password: string) {
    this.setUsername(username);
    this.setPassword(password);
  }

  addPlaylist(imported_name: Playlist) {
    this._playlists.push(imported_name);
  }

  getPlaylists() {
    console.log(this._playlists);
  }

  getAlbums() {
    for (let pl of this._playlists) {
      console.log(pl.playlist_albums);
    }
  }

  getSongs() {
    for (let pl of this._playlists) {
      for (let al of pl.playlist_albums) {
        console.log(al.song_list);
      }
    }
  }

  getUsername(): string {
    return this._username;
  }

  getPassword(): string {
    return this._password;
  }

  setUsername(username: string): void {
    if (username.length < 4) {
      return;
    }
    this._username = username;
  }

  setPassword(password: string): void {
    const validator = new Validator();
    const validPassword = validator.validate(password);
    if (validPassword) {
      this._password = password;
      return;
    }

    throw new Error("invalid pw input ");
  }

  printFullName(): void {
    console.log(this._username + this._password);
  }
}
