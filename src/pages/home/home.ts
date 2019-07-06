import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : CredenciaisDTO = {
    email: "",
    senha: ""
  };
  
  constructor(
    public navCtrl: NavController, 
    public menu: MenuController,
    public auth: AuthService) {

  }

  login(){
    this.auth.autheticate(this.creds)
      .subscribe(response => {
        console.log(response);
        this.auth.successfullLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot("CategoriasPage");
      }, 
      error => {})
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  ionViewDidEnter(){
    console.log("Passou por aqui")
    this.auth.refreshToken()
      .subscribe(response => {
        console.log(response);
        this.auth.successfullLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot("CategoriasPage");
      }, 
      error => {})
  }

  signup(){
    this.navCtrl.push('SignupPage');
  }

}
