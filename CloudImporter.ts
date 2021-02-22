import {Importable} from "./Interfaces";


export class CloudImporter implements Importable {
    imported_name: string;
    constructor(imported_name: string){
        this.imported_name = imported_name;
    }


    loadPlaylist(){
        
    }
}