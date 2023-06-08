import { Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {

  constructor() { }

  @Input() photos!: string[];
  @Output() photo = new EventEmitter<string>()

  // @Input() test!: string;
  // @Input('gosho') test!: string;

  hasUser: boolean = true;

  movies: string[] = ['Movie1', 'Movie2', 'Movie3', 'Movie4']

  toggleBtn: boolean = true;

  hello: string = 'Hello, I am interpolation'

  dogImgSrc: string = 'https://media.npr.org/assets/img/2022/11/23/russian-toy-2-002--059b8a825dac13f92234d65777e6b29b0914e92f-s1100-c50.jpg'
  dogImgAlt: string = 'Dog image'

  testClassAttr: boolean = true;

  text: string = ''

  ngDoCheck() {
    console.log(this.photos);

  }

  toggleBgChange(): void {
    this.toggleBtn = !this.toggleBtn
  }

  toggleBtnFunc(event: MouseEvent): void {
    console.log(event);

    if (this.toggleBtn) {
      this.toggleBtn = !this.toggleBtn
      console.log('toggle', this.toggleBtn);
    } else {
      this.toggleBtn = !this.toggleBtn
      console.log('toggle', this.toggleBtn);
    }
  }

  changeText(textFromTemplate: string): void {
    this.text = textFromTemplate;
  }

  addPhoto = (photo: string) => {
    this.photo.emit(photo)
  }
}
