import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  trending = [
    {
      typeIcon: 'hiking',
      grade: 4.3,
      shared: 2,
      image:
        'https://www.niesamowitapolska.eu/images/malopolska/tatry/110755778_m.webp',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`,
    },
    {
        typeIcon: 'hiking',
        grade: 4.3,
        shared: 2,
        image:
          'https://www.niesamowitapolska.eu/images/malopolska/tatry/110755778_m.webp',
        description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`,
      },

        {
            typeIcon: 'hiking',
            grade: 4.3,
            shared: 2,
            image:
              'https://www.niesamowitapolska.eu/images/malopolska/tatry/110755778_m.webp',
            description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.`,
          },

            {
                typeIcon: 'hiking',
                grade: 4.3,
                shared: 2,
                image:
                  'https://www.niesamowitapolska.eu/images/malopolska/tatry/110755778_m.webp',
                description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
                bred for hunting.`,
              },
  ];

daily = [
    {
      typeIcon: 'hiking',
      grade: 4.3,
      shared: 2,
      type:'Indoor',
      title:'#1',
      image:
        'https://www.niesamowitapolska.eu/images/malopolska/tatry/110755778_m.webp',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`,
    },
    {
        typeIcon: 'hiking',
        grade: 4.3,
        shared: 2,
        type:'Outdoor',
        title:'#2',
        image:
          'https://www.niesamowitapolska.eu/images/malopolska/tatry/110755778_m.webp',
        description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`,
      },
  ];
}
