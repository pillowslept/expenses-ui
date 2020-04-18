import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { TWELVE_HOURS_FORMAT } from 'app/utils/constants/dates';

@Pipe({ name: 'customDate' })
export class CustomDatePipe implements PipeTransform {

    transform(value: string): string {
        return value ? moment(value).format(TWELVE_HOURS_FORMAT) : '';
    }

}
