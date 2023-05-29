import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private http: HttpClient) {}

  cadastrarSenha(tipoSenha: string) {
    const url = 'http://localhost:3000/api/senha';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const data = { tipoSenha: tipoSenha };
    


    this.http.post(url, data, { headers: headers })
      .subscribe(
        response => {
          console.log('Requisição bem-sucedida', response, data);
        },
        error => {
          console.error('Erro na requisição', error);
        }
      );
  }
}