export type FOmit = <T extends Record<string, unknown>, K extends string>(obj: T, ...keys: K[]) => Omit<T, K>;

/**
 * オブジェクトからkeysで渡されたキーを除くオブジェクトを返す関数
 */
const omit: FOmit = <T extends Record<string, unknown>, K extends string>(obj: T, ...keys: K[]): Omit<T, K> => {
    const result = { ...obj };
    for (const key of keys) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            delete result[key];
        }
    }
    return result;
};

export default omit;

/*

// 使用例
const keys = ["key1", "key2", "key3"];
const obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4",
};

const omittedObj = omit(obj, ...keys);
console.log(omittedObj); // {key4: 'value4'}

参考
https://zenn.dev/zozotech/articles/a107520099d8be

*/
