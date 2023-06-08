import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})

export class ButtonComponent {

    @Input() number = 0
    @Output() id = new EventEmitter<string>()

    passId = (e: any) => {
        this.id.emit(e.target.textContent)
    }

}