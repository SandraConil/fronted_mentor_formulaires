import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name : string = "name";
  email : string = "e-mail";
  phone : string = "phone";
  title : string = "image footer";
  image : string = "https://static.vecteezy.com/ti/vecteur-libre/t2/4427015-fond-bleu-avec-accent-geometrique-gratuit-vectoriel.jpg";

  titleMain : string = "Personal info";
  descriptionMain : string = "Please provide your name, email, adress, and phone number.";
 
  isAdmin: Boolean = true;
  
  constructor() {  }

  ngOnInit(): void {}

eventclick(){
  this.isAdmin  = !this.isAdmin
}


}
