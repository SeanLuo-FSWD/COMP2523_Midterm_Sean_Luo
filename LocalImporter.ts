import { Importable } from "./Interfaces";
import { Playlist } from "./Playlist";
import { readFileSync } from "fs";
import { Album } from "./Album";
import { Artist } from "./Artist";
import { Song } from "./Song";

export class LocalImporter implements Importable {
  imported_name: string;
  playlist: Playlist;

  constructor(imported_name: string) {
    this.imported_name = imported_name;
  }

  loadPlaylist(importer: string): Playlist {
    let txtFile = readFileSync(__dirname + "/" + importer, {
      encoding: "utf8",
    });

    let arr = txtFile.split("\n");
    let pl_name = arr[0].split(":")[1];

    let artist_name = arr[3].split(":")[1];
    let artist = new Artist(artist_name);
    let year = parseInt(arr[4].split(":")[1]);

    let playlist_albums = arr[1].split(":")[1];
    let album = new Album(playlist_albums, artist, year);

    let song_list = arr[2].split(":")[1].split(",");
    for (let sg of song_list) {
      let song = new Song(sg);
      album.addTrack(song);
    }

    let playlist_r = new Playlist(pl_name);
    playlist_r.addAlbum(album);

    return playlist_r;
  }
}
