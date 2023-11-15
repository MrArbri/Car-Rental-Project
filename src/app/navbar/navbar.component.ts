import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  amount: number = 0;

    donateMoney(){
      if(this.amount !=300)
      this.amount = this.amount + 10;
  };
}
