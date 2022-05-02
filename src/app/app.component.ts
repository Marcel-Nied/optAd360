import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Zadanie-rekrutacyjne';
  users: any; 

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    fetch("https://randomuser.me/api/?results=1000&gender=male&nat=fr")
    
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        this.users = data.results.sort((a: any, b: any) => {
          return b.dob.age - a.dob.age
        }).map((user: any) => {
          return {
            firstName: user.name.first,
            lastName: user.name.last,
            age: user.dob.age,
          }
        }).slice(0, 10);
        
        console.log("this.users:", this.users);
      });
    }
}
