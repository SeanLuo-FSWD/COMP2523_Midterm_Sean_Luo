import { Playlist } from "./Playlist";

export interface Importable {
  loadPlaylist(importer: string): Playlist;
}
