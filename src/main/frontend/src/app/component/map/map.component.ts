import { Component, AfterViewInit, Input  } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements AfterViewInit {

  @Input()
  coordinates : string = '49.72397993323012, 18.856487533233324';
  cords = this.coordinates.split(',')

  private map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ this.cords[0], this.cords[1] ],
      zoom: 11
  });

  const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 3,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });

      tiles.addTo(this.map);

      L.marker([this.cords[0], this.cords[1]]).addTo(this.map);
  }

  constructor() { }

    ngAfterViewInit(): void {
      console.log('cord',this.coordinates)
      this.initMap();
    }
}
