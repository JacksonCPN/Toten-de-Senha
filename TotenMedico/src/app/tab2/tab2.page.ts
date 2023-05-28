import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  items: any[] = [
    { title: 'Senha 1', guiche: 'Guichê 1', hora: '16:03' },
    { title: 'Senha 2', guiche: 'Guichê 2', hora: '16:03' },
    { title: 'Senha 3', guiche: 'Guichê 3', hora: '16:03' },
    { title: 'Senha 4', guiche: 'Guichê 4', hora: '16:03' },
    { title: 'Senha 5', guiche: 'Guichê 5', hora: '16:03' }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.getDataFromAPI();
  }

  getDataFromAPI() {
    this.http.get<any>('http://localhost:3000/api/senha').subscribe(data =>{
    console.log(data);
    this.items = data;
    })
  }

}