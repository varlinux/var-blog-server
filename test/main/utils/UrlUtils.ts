export class UrlUtils {
    private port: number;

    constructor(port?: number) {
        this.port = port || 3000
    }

    serverLogin(uri: string): string {
        return 'http://127.0.0.1:' + this.port + uri;
    }

    serverUri(uri: string): string {
        return 'http://127.0.0.1:'+ this.port + '/api' + uri
    }
}
