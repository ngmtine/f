export type IsValidMac = (str: string) => boolean;

/**
 *  macアドレスバリデーション
 */
const isValidMac: IsValidMac = (str: string): boolean => {
    const regex = /^[0-9a-fA-F]{2}(:[0-9a-fA-F]{2}){5}$/i;
    return regex.test(str);
};

export default isValidMac;
