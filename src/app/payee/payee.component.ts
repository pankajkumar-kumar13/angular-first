import { Component } from "@angular/core";

@Component({
  selector: "[app-payee]",
  templateUrl: "./payee.component.html"
})
export class PayeeComponent {
name : string = "Pankaj";
data : string = "you not click buttom";
typeText : string = " ";



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
