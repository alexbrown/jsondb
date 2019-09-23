export default class {
    public message: any;

    constructor() {
        this.message = null;
    }

    send(message: any) : void {
        this.message = message;
    }
}