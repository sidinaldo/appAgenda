import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../environments/environment';

@Injectable()
export class JogadorService {
    public serviceUrl: string = 'http://localhost:3000/';

    constructor(private http: Http) {

    }

    criarJogador(jogador: any) {
        var token = localStorage.getItem('mws.token');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('x-access-token', token); Headers
        let options = new RequestOptions({ headers: headers });

        // let data = this.formatarData(jogador.dataNascimento);
        // jogador.dataNascimento = data;

        return this.http
            .post(environment.serviceUrl + 'jogadores', jogador, options)
            //.map((res: Response) => res.json());
    }

    editarJogador(jogador: any) {
        var token = localStorage.getItem('mws.token');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('x-access-token', token); Headers
        let options = new RequestOptions({ headers: headers });        
        return this.http
            .put(environment.serviceUrl + 'jogadores/'+jogador.id, jogador, options)
            //.map((res: Response) => res.json());
    }

    getJogadores() {
        var token = localStorage.getItem('mws.token');
        let headers = new Headers({ 'Content-Type': 'application/json'});
        headers.append('x-access-token', token); 
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.serviceUrl + 'jogadores', options)
            //.map((res: Response) => res.json());
    }
    
    getById(id) {
        var token = localStorage.getItem('mws.token');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('x-access-token', token);
        let options = new RequestOptions({ headers: headers });

        return this.http
            .get(this.serviceUrl + 'jogadores/' + id, options)
            //.map((res: Response) => res.json());
    }

    remove(jogador) {
        //console.log(bairro);
        var token = localStorage.getItem('mws.token');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('x-access-token', token);
        let options = new RequestOptions({ headers: headers });

        return this.http
            .delete(environment.serviceUrl + 'jogadores/'+ jogador._id, options)
            //.map((res: Response) => res.json());
    }
    
}