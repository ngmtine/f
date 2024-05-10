export type DecimalizeIp = (ip: string) => number;

/**
 * IPアドレスを10進数に変換する
 * @param ip - 変換するIPアドレス文字列
 * @returns - 符号なし32ビット整数としてのIPアドレス
 */
const decimalizeIp: DecimalizeIp = (ip: string): number => {
    // オクテット毎に8ビットシフト、ビット論理和で累積和に追加、結果を符号なし右シフト演算子で正の整数に修正
    return ip.split(".").reduce((acc, octet) => (acc << 8) | Number(octet), 0) >>> 0;
};

export default decimalizeIp;
