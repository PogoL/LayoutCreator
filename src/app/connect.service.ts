import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class Connect {
    generateCode = new EventEmitter();

}