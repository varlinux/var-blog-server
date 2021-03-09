import BaseDto from "./BaseDto";

export default class BlogUser extends BaseDto {

    private _user_id: string;
    private _user_name: string;
    private _user_pwd: string;
    private _user_intro: string;
    private _user_sing: string;
    private _user_icon_url: string;
    private _user_create_time: string;
    private _user_github: string;
    private _user_gitee: string;
    private _user_weixin: string;
    private _user_qq: number;
    private _user_payfor: string;
    private _user_phone: string;
    private _user_status: number | undefined;

    constructor() {
        super();
        this._user_id = '';
        this._user_name = '';
        this._user_pwd = '';
        this._user_intro = '';
        this._user_sing = '';
        this._user_icon_url = '';
        this._user_create_time = '';
        this._user_github = '';
        this._user_gitee = '';
        this._user_weixin = '';
        this._user_qq = 0;
        this._user_payfor = '';
        this._user_phone = '';
        this._user_status = 0;
    }

    public seal(obj: any): BlogUser {
        return this.sealProp(this, 'user', obj)
    }

    public toString(): string {
        return  "_user_id" +
                "_user_name" +
                "_user_pwd" +
                "_user_intro" +
                "_user_sing" +
                "_user_icon_url" +
                "_user_create_time" +
                "_user_github" +
                "_user_gitee" +
                "_user_weixin" +
                "_user_qq" +
                "_user_payfor" +
                "_user_phone" +
                "_user_status"
    }


    get user_id(): string {
        return this._user_id;
    }

    set user_id(value: string) {
        this._user_id = value;
    }

    get user_name(): string {
        return this._user_name;
    }

    set user_name(value: string) {
        this._user_name = value;
    }

    get user_pwd(): string {
        return this._user_pwd;
    }

    set user_pwd(value: string) {
        this._user_pwd = value;
    }

    get user_intro(): string {
        return this._user_intro;
    }

    set user_intro(value: string) {
        this._user_intro = value;
    }

    get user_sing(): string {
        return this._user_sing;
    }

    set user_sing(value: string) {
        this._user_sing = value;
    }

    get user_icon_url(): string {
        return this._user_icon_url;
    }

    set user_icon_url(value: string) {
        this._user_icon_url = value;
    }

    get user_create_time(): string {
        return this._user_create_time;
    }

    set user_create_time(value: string) {
        this._user_create_time = value;
    }

    get user_github(): string {
        return this._user_github;
    }

    set user_github(value: string) {
        this._user_github = value;
    }

    get user_gitee(): string {
        return this._user_gitee;
    }

    set user_gitee(value: string) {
        this._user_gitee = value;
    }

    get user_weixin(): string {
        return this._user_weixin;
    }

    set user_weixin(value: string) {
        this._user_weixin = value;
    }

    get user_qq(): number {
        return this._user_qq;
    }

    set user_qq(value: number) {
        this._user_qq = value;
    }

    get user_payfor(): string {
        return this._user_payfor;
    }

    set user_payfor(value: string) {
        this._user_payfor = value;
    }

    get user_phone(): string {
        return this._user_phone;
    }

    set user_phone(value: string) {
        this._user_phone = value;
    }

    get user_status(): number | undefined {
        return this._user_status;
    }

    set user_status(value: number | undefined) {
        this._user_status = value;
    }
}
