import BaseDto from "./BaseDto";

export enum ImgStatusEnum {
  STATUS_SURVIVAL = 1,
  STATUS_DEATH = 0,
  TYPE_SERVER = '1',
  TYPE_ISSUE = '2',
  TYPE_OTHER = '3',
}

export default class BlogImg extends BaseDto {

  private _img_id: string | undefined;
  private _img_name: string | undefined;
  private _img_type: string | undefined;
  private _img_desc: string | undefined;
  private _img_url: string | undefined;
  private _img_create_time: string | undefined;
  private _img_edit_time: string | undefined;
  private _img_status: number | undefined;

  private _blog_atc_id: string | undefined;
  private _blog_user_id: string | undefined;


  constructor(imgId?: string, imgType?: string, imgName?: string, imgDesc?: string, imgUrl?: string,
              imgCreateTime?: string, imgEditTime?: string,
              imgStatus?: number, atcId?: string, userId?: string) {
    super();
    this._img_id = imgId
    this._img_name = imgName
    this._img_type = imgType
    this._img_desc = imgDesc
    this._img_url = imgUrl
    this._img_create_time = imgCreateTime
    this._img_edit_time = imgEditTime
    this._img_status = imgStatus
    this._blog_atc_id = atcId
    this._blog_user_id = userId
  }

  public async seal(obj: any) {
    return await this.sealProp(this, 'img', obj)
  }

  public toString(): string {
    return "_img_id" +
        "_img_name" +
        "_img_type" +
        "_img_desc" +
        "_img_url" +
        "_img_create_time" +
        "_img_edit_time" +
        "_img_status" +
        "_blog_atc_id" +
        "_blog_user_id"
  }

  get img_id(): string | undefined {
    return this._img_id;
  }

  set img_id(value: string | undefined) {
    this._img_id = value;
  }

  get img_name(): string | undefined {
    return this._img_name;
  }

  set img_name(value: string | undefined) {
    this._img_name = value;
  }

  get img_type(): string | undefined {
    return this._img_type;
  }

  set img_type(value: string | undefined) {
    this._img_type = value;
  }

  get img_desc(): string | undefined {
    return this._img_desc;
  }

  set img_desc(value: string | undefined) {
    this._img_desc = value;
  }

  get img_url(): string | undefined {
    return this._img_url;
  }

  set img_url(value: string | undefined) {
    this._img_url = value;
  }

  get img_create_time(): string | undefined {
    return this._img_create_time;
  }

  set img_create_time(value: string | undefined) {
    this._img_create_time = value;
  }

  get img_edit_time(): string | undefined {
    return this._img_edit_time;
  }

  set img_edit_time(value: string | undefined) {
    this._img_edit_time = value;
  }

  get img_status(): number | undefined {
    return this._img_status;
  }

  set img_status(value: number | undefined) {
    this._img_status = value;
  }

  get blog_atc_id(): string | undefined {
    return this._blog_atc_id;
  }

  set blog_atc_id(value: string | undefined) {
    this._blog_atc_id = value;
  }

  get blog_user_id(): string | undefined {
    return this._blog_user_id;
  }

  set blog_user_id(value: string | undefined) {
    this._blog_user_id = value;
  }
}
