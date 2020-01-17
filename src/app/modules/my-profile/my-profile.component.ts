import { Component } from '@angular/core';

@Component({
    selector: 'app-my-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {

    public readonly user: any = {
        name: 'Juan Camilo',
        lastname: 'Velásquez',
        phone: '1234588595',
        email: 'juan@expensesapi.com',
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    };

}
