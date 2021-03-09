export class UrlUtils {
    private port: number;

    constructor(port?: number) {
        this.port = port || 3259
    }

    serverLogin(uri: string): string {
        return 'http://localhost:' + this.port + uri;
    }

    serverUri(uri: string): string {
        return 'http://localhost:'+ this.port + '/api' + uri
    }
}
