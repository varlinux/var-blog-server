export interface BaseService {

    getAll(): Promise<any>;
    getObjByKey(key: string, val: string): Promise<any>;
    insert(obj: any): Promise<any>;
    delete(key: string, value: string): Promise<any>;
}
