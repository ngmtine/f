export type Debounce = (func: Func, wait: number) => void;

type Func = (...args: any) => void;

/**
 * 特定の時間が経過するまで処理の実行を遅延させる関数
 */
const debounce: Debounce = (func: Func, wait: number) => {
    let timeout: NodeJS.Timeout | null = null;

    return (...args: any) => {
        if (timeout !== null) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            func(...args);
        }, wait);
    };
};

export default debounce;
