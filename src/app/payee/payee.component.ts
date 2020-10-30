import { Component } from "@angular/core";

@Component({
  selector: "[app-payee]",
  templateUrl: "./payee.component.html"
})
export class PayeeComponent {
name : string = "Pankaj"
getName(){
  return this.name;
}

}
