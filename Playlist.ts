import { Album } from "./Album";

export class Playlist {
    playlist_albums: Album[] = [];
    pl_name: string;

    constructor(pl_name: string){
        this.pl_name = pl_name;
    }

    addAlbum(album: Album){
        this.playlist_albums.push(album);
    }
}