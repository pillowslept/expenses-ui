import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-confirm-action',
    templateUrl: './confirm-action.component.html',
    styleUrls: ['./confirm-action.component.scss']
})
export class ConfirmActionDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<ConfirmActionDialogComponent>,
    ) { }

}
