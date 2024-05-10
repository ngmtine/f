export type Str2bool = (str: string) => boolean;

/**
 * 文字列の"true", "false"を真偽値にキャスト
 * 変換不可能な場合はfalse
 */
const str2bool: Str2bool = (str: string): boolean => {
    // "true", "True" 等（大文字小文字区別なし）
    if (/^true$/i.test(str)) {
        return true;
    }

    // "false", "False" 等（大文字小文字区別なし）
    if (/^false$/i.test(str)) {
        return false;
    }

    // その他の場合、false
    return false;
};

export default str2bool;
