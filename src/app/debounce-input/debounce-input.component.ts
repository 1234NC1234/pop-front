import {Component, Input, Output, ElementRef, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'debounce-input',
    template: '<input type="text" class="form-control" [placeholder]="placeholder" [(ngModel)]="inputValue">'
})
export class DebounceInputComponent {
    @Input() placeholder: string;
    @Input() delay: number = 300;
    @Output() value: EventEmitter<String> = new EventEmitter();

    public inputValue: string;

    constructor(private elementRef: ElementRef) {
        const eventStream = Observable.fromEvent(elementRef.nativeElement, 'keyup')
            .map(() => this.inputValue)
            .debounceTime(this.delay)
            .distinctUntilChanged();

        eventStream.subscribe(input => this.value.emit(input));
    }
}
