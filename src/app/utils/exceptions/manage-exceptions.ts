import * as selectn from 'selectn';

export class ManageException {

    static handle(exception: Response) {
        return selectn('error.message', exception) || selectn('message', exception);
    }

}
