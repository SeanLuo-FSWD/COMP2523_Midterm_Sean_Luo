import { Artist } from "./Artist";
import { Validator } from "./validator";
import { User } from "./User";
import { Album } from "./Album";
import { Song } from "./Song";
import { Playlist } from "./Playlist";
import { PlaylistImporter } from "./PlaylistImporter";
import { LocalImporter } from "./LocalImporter";
import { CloudImporter } from "./CloudImporter";

let artist = new Artist("Muse");
let album = new Album("The 2nd Low", artist, 2012);
let song = new Song("Madness");
album.addTrack(song);

let playlist = new Playlist("Fun songs");
playlist.addAlbum(album);

let localPlaylistImporter = new PlaylistImporter(
  new LocalImporter("myPlaylist.txt")
);

let cloudPlaylistImporter = new PlaylistImporter(
  new CloudImporter("www.youtube.com")
);

let localPlaylist = localPlaylistImporter.importPlaylist();
// let cloudPlaylist = cloudPlaylistImporter.importPlaylist();

let user = new User("jonh123", "12aabacaddfas!");

user.addPlaylist(localPlaylist);
// user.addPlaylist(cloudPlaylist);
user.addPlaylist(playlist);

console.log(user.getPlaylists());

console.log(user.getAlbums());

console.log(user.getSongs());
