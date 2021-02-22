import { LocalImporter } from "./LocalImporter";
import { Importable } from "./Interfaces";

export class PlaylistImporter {
  importer: LocalImporter;
  pl_name: string;

  constructor(importer: LocalImporter) {
    this.importer = importer;
    this.pl_name = importer.imported_name;
  }

  importPlaylist() {
    return this.importer.loadPlaylist(this.pl_name);
  }
}
