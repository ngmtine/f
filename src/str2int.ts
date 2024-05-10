export type Str2int = (str: string) => number | string;

/**
 * 文字列を整数型にキャスト
 * 変換不可能な場合は元の文字列を返却
 */
const str2int: Str2int = (str: string): number | string => {
    // 文字列が整数表現のみを含む場合
    if (/^-?\d+$/.test(str)) {
        return Number.parseInt(str);
    }

    // その他の場合、入力をそのまま返却
    return str;
};

export default str2int;
