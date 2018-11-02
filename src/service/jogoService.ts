import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HTTP } from '@ionic-native/http';
import { Headers, RequestOptions } from '@angular/http';


@Injectable()
export class JogoService {
    constructor(private http: HTTP) {

    }

    getJogos() {
        var token = localStorage.getItem('mws.token');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('x-access-token', token); Headers
        let options = new RequestOptions({ headers: headers });

        this.http.get(environment.serviceUrl + 'jogos', {}, {})
            .then(data => {

                console.log(data.status);
                console.log(data.data); // data received by server
                console.log(data.headers);

            })
            .catch(error => {

                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);

            });
    }

    // getById(id) {
    //     var token = localStorage.getItem('mws.token');
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     headers.append('x-access-token', token);
    //     let options = new RequestOptions({ headers: headers });

    //     return this.http
    //         .get(this.serviceUrl + 'jogos/admin/' + id, options)
    //         .map((res: Response) => res.json());
    // }

    // getJogosFinalizados() {
    //     var token = localStorage.getItem('mws.token');
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     headers.append('x-access-token', token);
    //     let options = new RequestOptions({ headers: headers });
    //     //console.log(this.serviceUrl + 'jogos/getJogosFinalizados');
    //     return this.http.get(this.serviceUrl + 'jogos/finalizados', options)
    //         .map((res: Response) => res.json());
    // }
}