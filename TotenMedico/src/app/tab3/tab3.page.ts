import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private alertController: AlertController, private http: HttpClient) {}

  async fazerChamadaAPI() {
    try {
      const request = {
        method: "GET",
        header: {'Content-Type': 'application/json'},
        body: {"tipoSenha": "SG" }
      }
      const response = await this.http.get<any>('https://localhost:3000/api/senha').toPromise();
      const mensagem = response;
      return mensagem;
      // Faça algo com a mensagem obtida da API
    } catch (error) {
      console.error(error);
      // Lida com o erro, se necessário
    }
  }

  async exibirAlerta() {
    const mensagem = await this.fazerChamadaAPI();

    const alert = await this.alertController.create({
      header: 'Senha Chamada:',
      message: mensagem, // TODO: Alterar depois para consumir do back
      buttons: ['OK']
    });

    await alert.present();
  }

  async exibirAlertaErro() {
    const alert = await this.alertController.create({
      header: 'Erro',
      message: 'Erro no APP',
      buttons: ['OK']
    });

    await alert.present();
  }

}