import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of} from 'rxjs';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeerapiService {
  API: string = 'https://sitenotexist.com/content/0';


  valor = "Connection to API Success";

  constructor(private clienteHTTP: HttpClient) { }

  llamarapi() {

        const apiData = this.clienteHTTP.get(this.API).pipe(
          map((res: any) => {
            if (!res.response) {
              
              this.valor ='Connection to API Failed';
            }
            return this.valor;
          }),
          catchError(() => of([]))
        );

        return this.valor;
  }


}
