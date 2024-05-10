export type Csv2json = (csv: string) => { [key: string]: any }[];

/**
 * csvをjsonに変換するやつ
 */
const csv2json: Csv2json = (csv: string): { [key: string]: any }[] => {
    // csvを配列に変換
    const lines = csv
        .replace(/\r\n/g, "\n") // 改行コード正規化
        .split("\n"); // 改行コード区切りで配列に分割

    // ヘッダー行を取得し、コンマで分割
    const headers = lines[0].split(",");

    // ヘッダーを除く各行を処理し、JSONオブジェクトの配列を作成
    const json = lines
        .slice(1) // ヘッダーは除く
        .filter((line) => line) // 空行は除く
        .map((line) => {
            // 各行をコンマで分割
            let csvRow = line.split(",");

            // 改行コード削除
            csvRow = csvRow.map((row) => row.replace(/\n$/, ""));

            // ヘッダーに基づいてオブジェクトを生成
            const jsonObj: { [key: string]: string } = {};
            headers.forEach((header, index) => {
                jsonObj[header] = csvRow[index];
            });
            return jsonObj;
        });

    // 返却
    return json;
};

export default csv2json;
