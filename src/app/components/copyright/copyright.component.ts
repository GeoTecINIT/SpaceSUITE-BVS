import {Component, EventEmitter, Input, Output} from '@angular/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  standalone: true,
  selector: 'copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css'],
  imports: [DialogModule],
})
export class CopyrightComponent {
    @Input() visible: boolean = false;
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
}