import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pharmacy-card',
  templateUrl: './pharmacy-card.component.html',
  styleUrls: ['./pharmacy-card.component.css']
})
export class PharmacyCardComponent {
  constructor(private router: Router) {}
  navigateToClients() {
    this.router.navigate(['/clients']); // Naviguer vers la page 'clients'
  }
}
