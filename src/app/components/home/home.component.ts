import { Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, OnChanges, DoCheck {

  constructor() { }

  test: string = 'Uppercase pipe'
  currentDate: Date = new Date()
  num1 = 5
  welcomeMsg: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum autem praesentium incidunt voluptates cumque repudiandae laborum amet modi porro!'

  photos: string[] = ['Photo1', 'Photo2', 'Photo3', 'Photo4']

  ngOnInit() {
    console.log('Init');
  }

  ngOnDestroy() {
    console.log('Destroy');
  }

  ngOnChanges() {
    console.log('Change');
  }

  ngDoCheck() {
    console.log('Check');

    // console.log(this.photo);
    
  }

  handleAddPhoto = (photo: string) => { 
    this.photos.push(photo);
    console.log(this.photos);
  }

}
