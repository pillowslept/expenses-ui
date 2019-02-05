import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MovementsService } from '.././shared/movements.service';

@Component({
    selector: 'app-movements-form',
    templateUrl: './movements-form.component.html',
    styleUrls: ['./movements-form.component.css']
})
export class MovementsFormComponent implements OnInit {

    title: string;
    movement: any = {};

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private movementsService: MovementsService
    ) {
    }

    ngOnInit() {
        var id = this.route.params.subscribe(params => {
            var id = params['id'];

            this.title = id ? 'Edit' : 'Create';

            if (!id) {
                return;
            }

            this.movementsService.getMovement(id)
                .subscribe(
                    user => this.movement = user,
                    response => {
                        if (response.status === 404) {
                            this.router.navigate(['not-found']);
                        }
                    });
        });
    }

    save() {
        let result;
        if (this.movement.id) {
            result = this.movementsService.updateMovement(this.movement);
        } else {
            result = this.movementsService.addMovement(this.movement);
        }

        result.subscribe(data => this.router.navigate(['movements']));
    }

}
