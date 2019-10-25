import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ComponentType } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable()
export class DialogService {

    constructor(
        public matDialog: MatDialog,
    ) { }

    open(component: ComponentType<any>, data?: any): Observable<any> {
        const dialogRef = this.matDialog.open(component, data);

        return dialogRef.afterClosed();
    }

}
