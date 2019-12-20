import { Component } from '@angular/core';
import { HOME_CARDS } from 'app/utils/constants/home';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    public readonly CARDS: Array<any> = HOME_CARDS;

}
