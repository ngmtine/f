export type DefaultObject = <T extends Record<string, any>, U>(obj: T, defaultValue: U) => { [K in keyof T]: U };

/**
 * あるオブジェクトから、全ての値がdefaultValueであるような別のオブジェクトを作成する関数
 */
const defaultObject: DefaultObject = <T extends Record<string, any>, U>(obj: T, defaultValue: U = undefined as any): { [K in keyof T]: U } =>
    Object.keys(obj).reduce((acc, key) => {
        acc[key] = defaultValue;
        return acc;
    }, {} as any);

export default defaultObject;

/*

使い方
const o = { a: 100, b: 200, c: { d: "あ" } };
const newObject = defaultObject(o, "default");
console.log(newObject);
// {a: 'default', b: 'default', c: 'default'}

 */
