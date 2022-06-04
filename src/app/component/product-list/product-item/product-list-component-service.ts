import {Injectable} from "@angular/core";
import {httpCliente} from "angular/http";
import { Book } from "../model/book";

@Injectable()

export class BookService{
    private url = "http://localhost: 4200/api/bookstore";

    httpOptions = {
        Headers: new Headers{{'content-type': 'application/json'}}
    }
    
    constructor(private http: httpCliente){

        getBack(){

            return.this.http.get(this.url)
        }

    }
}