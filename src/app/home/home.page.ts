import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

interface Porta{
  readonly id:number
  premio:boolean
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, NgFor],
})

export class HomePage {
  porta!:any
  validacao:boolean = false
  portas:Porta[] = []
  idPortaPremio!:number
  escolhaUser!:number

  constructor() {
    this.portas.push({id: 1, premio: false}, {id: 2, premio: false}, {id: 3, premio: false})
    this.portas[Math.floor(Math.random() * 3)].premio = true  
    this.idPortaPremio = this.portas.find((porta) => porta.premio)!.id
  }

  abrirPorta(num:number){
    let numero:number = 0
    this.porta = this.portas.find((porta) => porta.id == num)
    
    do{
      numero = Math.floor(Math.random() * 3) + 1
    }while(numero == 0 || numero == this.porta!.id || numero == this.idPortaPremio)
      
    if(!this.validacao){
      this.escolhaUser = num
      alert(`Há uma cabra na porta ${numero}`)
    }
    
    this.escolherOuManter()
  }

  escolherOuManter(){
    if(!this.validacao){
      let respostaUser = prompt("Deseja manter a porta?\n1-SIM 2-NÃO")
      switch(respostaUser){
        case "1":
          this.validacao = true
        break;

        case "2":
            if(this.porta.premio) alert("Parabéns! Você ganhou um carro!!")
            else{
              alert("Que pena... Você ganhou uma cabra")
              alert(`O carro estava na porta ${this.idPortaPremio}`)
            }
          break;

        default:
          alert("Opção inválida")
          this.escolherOuManter()
          break;
      }
    }else{
      let porta = this.portas.find((porta) => porta.id == this.escolhaUser)
      if(porta!.premio) alert("Parabéns! Você ganhou um carro!!")
        else{
          alert("Que pena... Você ganhou uma cabra")
          alert(`O carro estava na porta ${this.idPortaPremio}`)
        } 
    }
  }
}

