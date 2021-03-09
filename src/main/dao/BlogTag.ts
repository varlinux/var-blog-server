import BaseDto from "./BaseDto";

export enum TagStatusEnum {
    IS_SURVIVAL = 1,
    IS_DEATH = 0
}

export default class BlogTag extends BaseDto {

    private _tag_id: string | undefined;
    private _tag_name: string | undefined;
    private _tag_create_time: string | undefined;
    private _tag_status: number | undefined;


    constructor(tagId?: string,tagName?: string, tagCreateTime?: string, tagStatus?: number) {
        super();
        this._tag_id = tagId || '';
        this._tag_name = tagName || '';
        this._tag_create_time = tagCreateTime || '';
        this._tag_status = tagStatus || 0;
    }

    public async seal(obj: any) {
        return await this.sealProp(this, 'tag', obj)
    }

    public toString(): string {
        return "_tag_id" +
            "_tag_name" +
            "_tag_create_time" +
            "_tag_status"
    }


    get tag_id(): string | undefined {
        return this._tag_id;
    }

    set tag_id(value: string | undefined) {
        this._tag_id = value;
    }

    get tag_name(): string | undefined {
        return this._tag_name;
    }

    set tag_name(value: string | undefined) {
        this._tag_name = value;
    }

    get tag_create_time(): string | undefined {
        return this._tag_create_time;
    }

    set tag_create_time(value: string | undefined) {
        this._tag_create_time = value;
    }

    get tag_status(): number | undefined {
        return this._tag_status;
    }

    set tag_status(value: number | undefined) {
        this._tag_status = value;
    }
}
