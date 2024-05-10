import decimalizeIp from "./decimalizeIp";

// IPアドレス正規表現
const regex = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$/;

/**
 * IPアドレスバリデーション
 * @param str - 検証するIPアドレス文字列
 * @param range - 許可されるIPアドレスの範囲（開始アドレスと終了アドレスのペアの配列）
 * @returns - IPアドレスが有効かつ指定の範囲内であるかどうか
 */
const isValidIp = (str: string, range?: [string, string]): boolean => {
    try {
        // IPアドレスの基本バリデーション
        if (!regex.test(str)) throw new Error();

        // 開始範囲/終了範囲
        if (range) {
            // 10進数変換
            const ipNum = decimalizeIp(str);

            // 指定された範囲内にあるかどうかをチェック
            const [start, end] = range;
            if (!start || !end) throw new Error();
            const startNum = decimalizeIp(start);
            const endNum = decimalizeIp(end);
            if (ipNum < startNum || endNum < ipNum) throw new Error();
        }

        return true;
    } catch (error: any) {
        if (error.message) console.error(error);
        return false;
    }
};

export default isValidIp;
