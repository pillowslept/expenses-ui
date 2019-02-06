import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MovementsService } from '.././shared/movements.service';
import { CategoriesService } from '../../services/categories.service';
import { TypesService } from '../../services/types.service';

@Component({
    selector: 'app-movements-form',
    templateUrl: './movements-form.component.html',
    styleUrls: ['./movements-form.component.css']
})
export class MovementsFormComponent implements OnInit {

    title: string;
    movement: any = {};
    public categories = [];
    public types = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private movementsService: MovementsService,
        private categoriesService: CategoriesService,
        private typesService: TypesService
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
        this.getCategories();
        this.getTypes();
    }

    private getTypes() {
        this.typesService.get().subscribe(
            types => this.types = types
        );
    }

    private getCategories() {
        this.categoriesService.get().subscribe(
            categories => this.categories = categories
        );
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
