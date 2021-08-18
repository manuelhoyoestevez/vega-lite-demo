import { Component, OnInit } from '@angular/core';
import * as embed from 'vega-embed';
import spec from '../assets/vega-example';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    ngOnInit() {
        embed("#vis", spec, { actions: false });
    }

}
