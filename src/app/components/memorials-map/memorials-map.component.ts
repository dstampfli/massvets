import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memorials-map',
  templateUrl: './memorials-map.component.html',
  styleUrls: ['./memorials-map.component.css']
})
export class MemorialsMapComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
