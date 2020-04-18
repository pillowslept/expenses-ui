import * as selectn from 'selectn';

export class ManageException {

    static handle(exception: Response): string {
        return selectn('error.message', exception) || selectn('message', exception);
    }

}
