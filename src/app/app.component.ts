import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Zadanie-rekrutacyjne';
  users: any; 
  showSpinner: boolean = false;
  showTable: boolean = true;
  usersGroupedByAge: any = { 
    '20-29': 0,
    '30-39': 0,
    '40-49': 0,
    '50-59': 0,
    '60-69': 0,
    '70-79': 0,
    '80-89': 0,
    '90-99': 0,
  };

  ngOnInit() {
    this.getUsers();
    this.loadData();
    this.loadTable();
  };

  loadTable() {
    this.showTable = !this.showTable
  };

  loadData() {
    this.showSpinner = !this.showSpinner;
    setTimeout(() => {
      this.showSpinner = true;
    }, 5000);
  };

  private getUsers() {
    fetch("https://randomuser.me/api/?results=1000&gender=male&nat=fr")

      .then((results) => {
        return results.json();
      })
      .then((data) => {
        this.getOldestUsers(data);
        this.divideUsersByAge(data);
      });
    };

    private getOldestUsers(data: any) {
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
    };
    
    private divideUsersByAge(data: any) {
        data.results.forEach((user: any) => {
          if(user.dob.age > 19 && user.dob.age < 30){
            this.usersGroupedByAge['20-29']++
          }
          if(user.dob.age > 29 && user.dob.age < 40){
            this.usersGroupedByAge['30-39']++
          }
          if(user.dob.age > 39 && user.dob.age < 50){
            this.usersGroupedByAge['40-49']++
          }
          if(user.dob.age > 49 && user.dob.age < 60){
            this.usersGroupedByAge['50-59']++
          }
          if(user.dob.age > 59 && user.dob.age < 70){
            this.usersGroupedByAge['60-69']++
          }
          if(user.dob.age > 69 && user.dob.age < 80){
            this.usersGroupedByAge['70-79']++
          }
          if(user.dob.age > 79 && user.dob.age < 90){
            this.usersGroupedByAge['80-89']++
          }
          if(user.dob.age > 89 && user.dob.age < 100){
            this.usersGroupedByAge['90-99']++
          }
      })
    };
};
