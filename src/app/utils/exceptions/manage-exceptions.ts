import * as selectn from 'selectn';

export class ManageException {

    static handle(exception: Response) {
        return {
            message: selectn('error.message', exception),
            title: this.title(exception)
        };
    }

    private static title(exception: Response) {
        const statusCode = selectn('error.statusCode', exception);

        let title;
        switch (statusCode) {
            case 400:
                title = 'INFORMATION';
                break;
            case 500:
                title = 'ERROR';
                break;
            default:
                title = 'INFORMATION';
                break;
        }

        return title;
    }

}
