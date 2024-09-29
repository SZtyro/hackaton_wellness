import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.scss'
})
export class TileComponent {

  @Input()
  title:string

  activities = [
      {
        typeIcon: 'hiking',
        image:
          'https://www.niesamowitapolska.eu/images/malopolska/tatry/110755778_m.webp',
        description: `Kasprowy Wierch to popularny szczyt w Tatrach, osiągający wysokość 1987 m n.p.m. Jest znany z malowniczych widoków, tras narciarskich oraz dostępu do szlaków turystycznych.`,
        progress: 25,
        start_date: new Date(2024,1,10),
        end_date: new Date(2025,1,10),
        main_category: 'Indoor',
        sub_category: 'hiking',
        goal: 'Kasprowy wierch'
      }
  ]
}
