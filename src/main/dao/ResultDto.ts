enum ResultCode {
    IS_EXIST = -1,
    IS_NOT_EXIST = -2,
    OPERATE_FAILURE = -3,
    OPERATE_SUCCESS = 3,
    REQUEST_FAILURE = 404,
    REQUEST_SUCCESS = 200,
}

enum ResultMsg {
    IS_EXIST = '数据已存在',
    IS_NOT_EXIST = '数据不存在',
    OPERATE_SUCCESS = '操作成功',
    OPERATE_FAILURE = '操作失败',
    REQUEST_FAILURE = '请求成功',
    REQUEST_SUCCESS = '请求成功',
}

export class ResultDto {
    private _code: number;
    private _msg: string;
    private _data?: any;
    private _token?: string;

    constructor(code?: number, msg?: string, data?: any, token?: string) {
        this._code = code;
        this._msg = msg;
        this._data = data ? data : "" ;
        this._token = token;
    }

    public isExist(info ?: string): ResultDto {
        return new ResultDto(ResultCode.IS_EXIST, info ? info : "" + ResultMsg.IS_EXIST)
    }

    public isNotExist(info ?: string): ResultDto {
        return new ResultDto(ResultCode.IS_NOT_EXIST, info ? info : "" + ResultMsg.IS_NOT_EXIST)
    }

    public isSuccess(info ?: string): ResultDto {
        return new ResultDto(ResultCode.OPERATE_SUCCESS, info ? info : "" + ResultMsg.OPERATE_SUCCESS)
    }

    public isFailure(info ?: string): ResultDto {
        return new ResultDto(ResultCode.OPERATE_FAILURE, info ? info : "" + ResultMsg.OPERATE_FAILURE)
    }

    public isOk(data: any, info ?: string): ResultDto {
        return new ResultDto(ResultCode.REQUEST_SUCCESS, info ? info : "" + ResultMsg.REQUEST_SUCCESS, data)
    }

    public operateFailure(info ?: string): ResultDto {
        return new ResultDto(ResultCode.OPERATE_FAILURE, info ? info : "" + ResultMsg.OPERATE_FAILURE)
    }

    get code(): number {
        return this._code;
    }

    set code(value: number) {
        this._code = value;
    }

    get msg(): string {
        return this._msg;
    }

    set msg(value: string) {
        this._msg = value;
    }

    get data(): any {
        return this._data;
    }

    set data(value: any) {
        this._data = value;
    }

    get token(): string {
        return this._token;
    }

    set token(value: string) {
        this._token = value;
    }
}
