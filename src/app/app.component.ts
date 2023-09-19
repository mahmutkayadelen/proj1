import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proj1';
name:string="";
  eventBindingClick() {
    this.title= "even binding ile proje adı proj 5 olarak değiştirildi."
  }
}
