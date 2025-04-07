import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, NgFor],
})
export class HomePage {
  constructor() {}
  num = Math.floor(Math.random() * 3)
  portas = [1, 2, 3]

  abrirPorta(numero:number){
    switch(numero){
      case 0:
        alert("Cabra")
        break;

      case 1:
        alert("Carro")
        break;

      case 2:
        alert("Cabra")
          break;
    }
  }
}
