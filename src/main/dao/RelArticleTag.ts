import BaseDto from "./BaseDto";

export default class RelArticleTag extends BaseDto {

  private _at_id: string
  private _at_atc_id: string
  private _at_tag_id: string
  private _at_create_time: string
  private _at_edit_time: string

  constructor() {
    super();
    this._at_id = ''
    this._at_atc_id = ''
    this._at_tag_id = ''
    this._at_create_time = ''
    this._at_edit_time = ''
  }

  public seal(obj: any): RelArticleTag {
    return this.sealProp(this, 'at', obj)
  }

  public toString(): string {
    return "_at_id" +
          "_at_atc_id" +
          "_at_tag_id" +
          "_at_create_time" +
          "_at_edit_time"
  }

  get at_id(): string {
    return this._at_id;
  }

  set at_id(value: string) {
    this._at_id = value;
  }

  get at_atc_id(): string {
    return this._at_atc_id;
  }

  set at_atc_id(value: string) {
    this._at_atc_id = value;
  }

  get at_tag_id(): string {
    return this._at_tag_id;
  }

  set at_tag_id(value: string) {
    this._at_tag_id = value;
  }

  get at_create_time(): string {
    return this._at_create_time;
  }

  set at_create_time(value: string) {
    this._at_create_time = value;
  }

  get at_edit_time(): string {
    return this._at_edit_time;
  }

  set at_edit_time(value: string) {
    this._at_edit_time = value;
  }
}
