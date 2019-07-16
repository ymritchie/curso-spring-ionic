import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoDTO } from '../../models/endereco.dto';


@IonicPage()
@Component({
  selector: 'page-pick-address',
  templateUrl: 'pick-address.html',
})
export class PickAddressPage {

  items: EnderecoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [
      {
        id: "1",
        logradouro: "Rua de teste 01",
        numero: "100",
        complemento: "Apto. 200",
        bairro: "Santa Mônica",
        cep: "70023658",
        cidade : {
          id: "1",
          nome: "Ubenlândia",
          estado: {
            id:"1",
            nome: "Minas Gerais"
          }
        }
      },
      {
        id: "2",
        logradouro: "Rua de teste 02",
        numero: "200",
        complemento: "Apto. 2300",
        bairro: "centro",
        cep: "70023652",
        cidade : {
          id: "3",
          nome: "São Paulo",
          estado: {
            id:"2",
            nome: "São Paulo"
          }
        }
      }
    ]
  }

}
