import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ComponentType } from '@angular/cdk/portal';

@Injectable()
export class DialogService {

    constructor(
        private readonly matDialog: MatDialog,
    ) { }

    open(component: ComponentType<any>, data?: any): Observable<any> {
        const dialogRef = this.matDialog.open(component, data);

        return dialogRef.afterClosed();
    }

}
