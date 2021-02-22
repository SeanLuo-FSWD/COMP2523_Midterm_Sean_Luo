import { Artist } from "./Artist";
import { Song } from "./Song";

export class Album {
  artist: string;
  album_name: string;
  year: number;
  song_list: string[] = [];

  constructor(album_name: string, artist: Artist, year: number) {
    this.artist = artist.artist;
    this.album_name = album_name;
    this.year = year;
  }

  addTrack(song: Song) {
    this.song_list.push(song.song);
  }
}
