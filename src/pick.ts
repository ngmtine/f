export type FPick = <T extends Record<string, unknown>, K extends string>(obj: T, ...keys: K[]) => Pick<T, K>;

/**
 * オブジェクトからkeysで渡されたキーだけを含むオブジェクトを返す関数
 */
const pick: FPick = <T extends Record<string, unknown>, K extends string>(obj: T, ...keys: K[]): Pick<T, K> => {
    const result = {} as Pick<T, K>;
    for (const key of keys) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[key] = obj[key];
        }
    }
    return result;
};

export default pick;

/*

// 使用例
const keys = ["key1", "key2", "key3"];
const obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4",
};

const pickedObj = pick(obj, ...keys);
console.log(pickedObj); // {key1: 'value1', key2: 'value2', key3: 'value3'}

参考
https://zenn.dev/zozotech/articles/a107520099d8be

*/
