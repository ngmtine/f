export type IsEqual = (x: any, y: any) => boolean;

/**
 * 2つのオブジェクトを受け取り、中身が同じならばtrueを返す
 */
const isEqual: IsEqual = (x: any, y: any): boolean => {
    if (x === y) {
        return true;
    }

    if (x === null || y === null || typeof x !== "object" || typeof y !== "object") {
        return false;
    }

    const xKeys = Object.keys(x);
    const yKeys = Object.keys(y);

    if (xKeys.length !== yKeys.length) {
        return false;
    }

    for (const key of xKeys) {
        if (!yKeys.includes(key) || !isEqual(x[key], y[key])) {
            return false;
        }
    }

    return true;
};

export default isEqual;
