import { Component } from '@angular/core';
import { TileComponent } from "../tile/tile.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TileComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
