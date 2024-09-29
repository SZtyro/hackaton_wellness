import { Component, AfterViewInit, Input  } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements AfterViewInit {

  @Input()
  coordinates : {coordinates: string}[]= []


  private map: L.Map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [0,0],
      zoom: 13
  });

  const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 3,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });

      tiles.addTo(this.map);

  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
    this.coordinates.forEach((c, index )=> {
      let cords = (c.coordinates ?? '0, 0').split(',')
      if(index == 0)
         this.map.setView([Number(cords[0]), Number(cords[1])])
     
      this.addMapPoint(cords[0], cords[1])
    })
  }

  addMapPoint(x, y){
    L.marker([x, y]).addTo(this.map);
  }
}
