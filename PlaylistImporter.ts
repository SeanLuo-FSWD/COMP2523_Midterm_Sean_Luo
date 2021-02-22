import { LocalImporter } from "./LocalImporter";
import { Importable } from "./Interfaces";

export class PlaylistImporter {
  importer: string;

  constructor(importer: string) {
    this.importer = importer;
  }

  importPlaylist(importer: Importable) {
    return this.importer.loadPlaylist(this.importer);
  }
}
