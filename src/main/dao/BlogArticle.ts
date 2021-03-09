import BaseDto from "./BaseDto";

export default class BlogArticle extends BaseDto {

    private _atc_id: string;
    private _atc_title: string;
    private _atc_content: string;
    private _atc_author: string;
    private _atc_create_time: string;
    private _atc_edit_time: string;
    private _atc_status: number | undefined;
    private _atc_type: number | undefined; // 1: 前端 2：后端 3：linux/服务端

    private _blog_user_id: string;
    private _tag_ids: string;


    constructor() {
        super();
        this._atc_id = '';
        this._atc_title = '';
        this._atc_content = '';
        this._atc_author = '';
        this._atc_create_time = '';
        this._atc_edit_time = '';
        this._atc_status = 0;
        this._atc_type = 0;
        this._blog_user_id = '';
        this._tag_ids = '';
    }

    public seal(obj: any): BlogArticle {
        return this.sealProp(this, 'atc', obj)
    }

    public toString(): string {
        return  "_atc_id" +
                "_atc_title" +
                "_atc_content" +
                "_atc_author" +
                "_atc_create_time" +
                "_atc_edit_time" +
                "_atc_status" +
                "_atc_type" +
                "_blog_user_id" +
                "_tag_ids"
    }

    get atc_title(): string {
        return this._atc_title;
    }

    set atc_title(value: string) {
        this._atc_title = value;
    }

    get atc_content(): string {
        return this._atc_content;
    }

    set atc_content(value: string) {
        this._atc_content = value;
    }

    get atc_author(): string {
        return this._atc_author;
    }

    set atc_author(value: string) {
        this._atc_author = value;
    }

    get atc_create_time(): string {
        return this._atc_create_time;
    }

    set atc_create_time(value: string) {
        this._atc_create_time = value;
    }

    get atc_edit_time(): string {
        return this._atc_edit_time;
    }

    set atc_edit_time(value: string) {
        this._atc_edit_time = value;
    }


    get atc_id(): string {
        return this._atc_id;
    }

    set atc_id(value: string) {
        this._atc_id = value;
    }

    get blog_user_id(): string {
        return this._blog_user_id;
    }

    set blog_user_id(value: string) {
        this._blog_user_id = value;
    }

    get tag_ids(): string {
        return this._tag_ids;
    }

    set tag_ids(value: string) {
        this._tag_ids = value;
    }

    get atc_status(): number | undefined {
        return this._atc_status;
    }

    set atc_status(value: number | undefined) {
        this._atc_status = value;
    }


    get atc_type(): number | undefined {
        return this._atc_type;
    }

    set atc_type(value: number | undefined) {
        this._atc_type = value;
    }
}
