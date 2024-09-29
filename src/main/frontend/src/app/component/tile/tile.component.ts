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
        description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`,
        progress: 25,
        start_date: new Date(2024,1,10),
        end_date: new Date(2025,1,10),
        main_category: 'Wewnątrz',
        sub_category: 'Trekking',
        goal: 'Kasprowy wierch'
      }
  ]
}
