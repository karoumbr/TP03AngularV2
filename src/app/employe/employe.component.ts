import { Component } from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent {

  employe={nom:'Belhadj', prenom:'Rami', date:new Date(1988,3,5), salaire: 1687.56};
}
