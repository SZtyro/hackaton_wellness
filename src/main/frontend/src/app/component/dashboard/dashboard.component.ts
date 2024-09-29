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
      shared: 21,
            type:'Zewnątrz',
            title:'Śnieżka',
      image:
        'https://hasajacezajace.com/wp-content/uploads/2023/10/sniezka-karkonosze-92.jpg',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`,
    },
    {
        typeIcon: 'pool',
        grade: 2.3,
        shared: 95,
              type:'Zewnątrz',
              title:'Mrągowo',
        image:
          'https://www.szalonewalizki.pl/wp-content/uploads/2021/09/DJI_0893-2.jpg',
        description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`,
      },

        {
            typeIcon: 'directions_walk',
            grade: 1.8,
            shared: 64,
                  type:'Outdoor',
                  title:'Wałbrzych',
            image:
              'https://www.busemprzezswiat.pl/wp-content/uploads/2020/07/dn0b2928.jpg',
            description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.`,
          },

            {
                typeIcon: 'directions_walk',
                grade: 4.1,
                shared: 17,
                      type:'Outdoor',
                      title:'Polańczyk',
                image:
                  'https://www.owbystre.pl/wp-content/uploads/2023/02/Polanczyk.jpg',
                description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
                bred for hunting.`,
              },
  ];

daily = [
    {
      typeIcon: 'directions_walk',
      grade: 5.3,
      shared: 234,
      type:'Zewnątrz',
      title:'Zamek na Wawelu',
      image:
        'https://trivabook.pl/thumbs/6/wawel-garsc-praktycznych-informacji-o-zwiedzaniu-6812d983.jpg',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`,
    },
    {
        typeIcon: 'cottage',
        grade: 6.3,
        shared: 176,
        type:'Wewnątrz',
        title:'Pompki',
        image:
          'https://hips.hearstapps.com/hmg-prod/images/man-cross-training-in-a-gym-royalty-free-image-1701272927.jpg',
        description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`,
      },
  ];
}
