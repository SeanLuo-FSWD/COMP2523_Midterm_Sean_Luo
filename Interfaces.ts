import { Playlist } from "./Playlist";

export interface Importable {
  loadPlaylist(importer: Importable): () => Playlist;
}
