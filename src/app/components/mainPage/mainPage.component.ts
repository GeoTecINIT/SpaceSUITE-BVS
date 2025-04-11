import {Component} from '@angular/core';
import { BokComponent } from '@eo4geo/ngx-bok-visualization';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  standalone: true,
  selector: 'main-page',
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.css'],
  imports: [BokComponent],
})
export class MainPageComponent {
  dynamicValue: string = '';

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        this.dynamicValue = params.get('dynamicValue') || 'GIST';
    });
  }

  updatePath(newCode: string) {
    if (this.dynamicValue != '') this.location.go(`/${newCode}`);
  }
}