import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//вся логика описывается в классах
export class AppComponent {
  title: string = 'Dynamic Title';

  number: number = 34;

  arr: number[] = [1, 2, 3,];

  obj = {
    a: 1,
    b: {
      c: 4,
    },
  };

  img: string = 'https://encrypted-tbn0.gstatic.com/images?q=\
  tbn:ANd9GcThGyyY4OZ3bk3rFDaYtAbHR8htxrLHnjw2nxRL_80Xs7F0KG8-4dgIxP-wtQKFhdyXyvQ&usqp=CAU';

  inputText: string = '';

  myNumber: number = 5;

  constructor() {
    setTimeout(() => {
      console.log('Timeout is over');

      this.img = 'https://encrypted-tbn0.gstatic.com/\
      images?q=tbn:ANd9GcR3-XHgiNJWPedplE0FHDZFYGCygQkYNTPgAvoox4-BmuORc40M7xg0-5ZDkh-HMKdc3eY&usqp=CAU'
    }, 500);
  };

  //стандартный объект ивента нужно передавать в вызов
  //обработчика с шаблона с помощю специального синтаксиса
  onInput(event: Event) {
    this.inputText = (<HTMLInputElement>event.target).value;
  };

  onBlur(str: string) {
    this.inputText = str;
  };
}
