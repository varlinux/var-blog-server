import BaseDto from "./BaseDto";
import BlogSuggest from "./BlogSuggest";

export default class BlogLink extends BaseDto {

    private _link_id: string | undefined;
    private _link_name: string | undefined;
    private _link_url: string | undefined;
    private _link_create_time: string | undefined;
    private _link_status: number | undefined;


    constructor() {
        super();
        this._link_id = '';
        this._link_name = '';
        this._link_url = '';
        this._link_create_time = '';
        this._link_status = 0;
    }

    public seal(obj: any): BlogLink {
        return this.sealProp(this, 'link', obj)
    }

    public toString(): string {
        return  "_link_id" +
                "_link_name" +
                "_link_url" +
                "_link_create_time" +
                "_link_status"
    }


    get link_id(): string | undefined {
        return this._link_id;
    }

    set link_id(value: string | undefined) {
        this._link_id = value;
    }

    get link_name(): string | undefined {
        return this._link_name;
    }

    set link_name(value: string | undefined) {
        this._link_name = value;
    }

    get link_url(): string | undefined {
        return this._link_url;
    }

    set link_url(value: string | undefined) {
        this._link_url = value;
    }

    get link_create_time(): string | undefined {
        return this._link_create_time;
    }

    set link_create_time(value: string | undefined) {
        this._link_create_time = value;
    }

    get link_status(): number | undefined {
        return this._link_status;
    }

    set link_status(value: number | undefined) {
        this._link_status = value;
    }
}
