import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-app-folder';
  inputval:number;

  constructor(private httpClient:HttpClient){}
  onNameKeyUp(event:any){
    this.inputval = event.target.value;
  }
  getProfile() {
    console.log(this.inputval);
    this.httpClient.get("https://jsonplaceholder.typicode.com/todos/?id=" + this.inputval)
      .subscribe(
        (data: any[]) => {
          console.log(data);
        }
      )
  }
}
