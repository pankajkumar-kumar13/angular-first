import { Component } from "@angular/core";

@Component({
  selector: "[app-payee]",
  templateUrl: "./payee.component.html",
  styleUrls: [ './payee.component.css' ]
})
export class PayeeComponent {
name  = 'Pankaj';
data = "you not click buttom";
color = "green"
typeText : string = " ";
sFavorite = true;
getColor(){
  return this.color= Math.random()>0.5?'green':'blue';
}


getName(){
  return this.name;
}
clickButton(){
  this.data ="you have click buttom";
}
typedText(event){
this.typeText=event.target.value;
}

}
