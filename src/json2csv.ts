export type Json2csv = <T extends { [key: string]: any }>(json: T[], columns: string[]) => string;

/**
 * jsonをcsvに変換するやつ
 */
const json2csv: Json2csv = <T extends { [key: string]: any }>(json: T[], columns: string[]): string => {
    // ヘッダー作成
    const header = columns.join(",");

    // ボディ作成
    let body = "";
    for (const row of json) {
        let rowStr = "";
        for (const key of columns) {
            // 値がundefinedだった場合、csv上の値が空になるように
            if (row[key] === undefined) {
                rowStr += ",";
            }

            // 値がある場合
            else {
                rowStr += `${row[key]},`;
            }
        }
        // 最後のコンマ削除
        rowStr = rowStr.replace(/,$/, "");

        body += `${rowStr}\r\n`;
    }

    // 結合
    const csv = `${header}\r\n${body}`;

    // 返却
    return csv;
};

export default json2csv;
