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
      description: `Wejście na Śnieżkę może być osobiste wyzwanie, poprawa kondycji, podziwianie piękna górskiej przyrody, oderwanie od codzienności oraz satysfakcja ze zdobycia najwyższego szczytu Karkonoszy`,
    },
    {
        typeIcon: 'pool',
        grade: 2.3,
        shared: 95,
              type:'Zewnątrz',
              title:'Mrągowo',
        image:
          'https://www.szalonewalizki.pl/wp-content/uploads/2021/09/DJI_0893-2.jpg',
        description: `Mrągowo to urokliwe miasto położone na Mazurach w północno-wschodniej Polsce. Słynie z pięknych jezior, malowniczych krajobrazów i licznych atrakcji turystycznych`,
      },

        {
            typeIcon: 'directions_walk',
            grade: 1.8,
            shared: 64,
                  type:'Outdoor',
                  title:'Wałbrzych',
            image:
              'https://www.busemprzezswiat.pl/wp-content/uploads/2020/07/dn0b2928.jpg',
            description: `Celem zwiedzenia Wałbrzycha jest odkrycie jego historycznych i kulturowych atrakcji, takich jak Zamek Książ i Muzeum Przemysłu, podziwianie architektury oraz aktywny wypoczynek w okolicznych parkach i górach.`,
          },

            {
                typeIcon: 'directions_walk',
                grade: 4.1,
                shared: 17,
                      type:'Outdoor',
                      title:'Polańczyk',
                image:
                  'https://www.owbystre.pl/wp-content/uploads/2023/02/Polanczyk.jpg',
                description: `Polańczyk to malownicza miejscowość nad Jeziorem Solińskim, popularna wśród turystów. Oferuje rekreację wodną, piękne szlaki turystyczne w Bieszczadach`,
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
      description: ``,
    },
    {
        typeIcon: 'cottage',
        grade: 6.3,
        shared: 176,
        type:'Wewnątrz',
        title:'Pompki',
        image:
          'https://hips.hearstapps.com/hmg-prod/images/man-cross-training-in-a-gym-royalty-free-image-1701272927.jpg',
        description: ``,
      },
  ];
}
