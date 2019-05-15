import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MovementsService } from '.././shared/movements.service';
import { CategoriesService } from '../../services/categories.service';
import { TypesService } from '../../services/types.service';

@Component({
    selector: 'app-movements-form',
    templateUrl: './movements-form.component.html',
    styleUrls: ['./movements-form.component.scss']
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
        this.route.params.subscribe(params => {
            const id = params['id'];

            this.title = id ? 'Update' : 'Create';

            if (!id) {
                return;
            }

            this.movementsService.getById(id)
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

    private validateFields() {

        if (!this.movement.categoryId) {
            return;
        }
        if (!this.movement.typeId) {
            return;
        }
        if (!this.movement.value) {
            return;
        }
        if (!this.movement.creationDate) {
            return;
        }
        if (!this.movement.observations) {
            return;
        }

        return this.save();
    }

    private save() {
        let result;
        if (this.movement.id) {
            result = this.movementsService.update(this.movement);
        } else {
            result = this.movementsService.add(this.movement);
        }

        result.subscribe(data => this.goBack());
    }

    goBack() {
        this.router.navigate(['movements']);
    }

}
