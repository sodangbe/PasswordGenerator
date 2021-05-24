import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  password = '';
  includeLetters = false ;
  includeNumbers = false ;
  includeSymbols = false ;
  length = 0;



  onChangeLength(value : string){

    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)){

      this.length = parsedValue;

    }

  }

  onChangeUseLetters(){

    this.includeLetters = !this.includeLetters;

  }

  onChangeUseNumbers(){

    this.includeNumbers = !this.includeNumbers;
    ;

  }

  onChangeUseSymbols(){

    this.includeSymbols = !this.includeSymbols;

  }

  onButtonClick(){

    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const symbols = '!@#$%^&*()'

    let validChar = '';

    if(this.includeLetters){
      validChar += letters;
    }

    if(this.includeNumbers){
      validChar += numbers ;
    }

    if(this.includeSymbols){
      validChar += symbols ;
    }

    let generatedPassword ='';

    for(let i= 0; i< this.length; i++){

      const index = Math.floor(Math.random() * validChar.length);
      generatedPassword += validChar[index];
    }

    this.password = generatedPassword ;

  }

  getPassword(){

    return this.password;
  }


}
