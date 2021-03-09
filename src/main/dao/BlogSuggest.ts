import BaseDto from "./BaseDto";

export default class BlogSuggest extends BaseDto {

    private _sgt_id: string;
    private _sgt_title: string | undefined;
    private _sgt_content: string;
    private _sgt_contact: string;
    private _sgt_create_time: string;
    private _sgt_edit_time: string;
    private _sgt_status: number | undefined;


    constructor() {
        super();
        this._sgt_id = '';
        this._sgt_title = '';
        this._sgt_content = '';
        this._sgt_contact = '';
        this._sgt_create_time = '';
        this._sgt_edit_time = '';
        this._sgt_status = 0;
    }

    public seal(obj: any): BlogSuggest {
        return this.sealProp(this, 'sgt', obj)
    }

    public toString(): string {
        return  "_sgt_id" +
                "_sgt_title" +
                "_sgt_content" +
                "_sgt_contact" +
                "_sgt_create_time" +
                "_sgt_edit_time" +
                "_sgt_status"
    }


    get sgt_id(): string {
        return this._sgt_id;
    }

    set sgt_id(value: string) {
        this._sgt_id = value;
    }

    get sgt_title(): string | undefined {
        return this._sgt_title;
    }

    set sgt_title(value: string | undefined) {
        this._sgt_title = value;
    }

    get sgt_content(): string {
        return this._sgt_content;
    }

    set sgt_content(value: string) {
        this._sgt_content = value;
    }

    get sgt_contact(): string {
        return this._sgt_contact;
    }

    set sgt_contact(value: string) {
        this._sgt_contact = value;
    }

    get sgt_create_time(): string {
        return this._sgt_create_time;
    }

    set sgt_create_time(value: string) {
        this._sgt_create_time = value;
    }

    get sgt_edit_time(): string {
        return this._sgt_edit_time;
    }

    set sgt_edit_time(value: string) {
        this._sgt_edit_time = value;
    }

    get sgt_status(): number | undefined {
        return this._sgt_status;
    }

    set sgt_status(value: number | undefined) {
        this._sgt_status = value;
    }
}
