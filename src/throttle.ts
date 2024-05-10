export type Throttle = (func: Func, limit: number) => void;

type Func = (...args: any) => void;

/**
 * 連続して大量に繰り返される処理を一定感覚で間引く関数
 */
const throttle: Throttle = (func: Func, limit: number) => {
    let lastFunc: number;
    let lastRan: number;

    return (...args: any) => {
        const self = this;

        if (!lastRan) {
            func.apply(self, args);
            lastRan = Date.now();
        }

        //
        else {
            clearTimeout(lastFunc);
            lastFunc = window.setTimeout(
                () => {
                    if (Date.now() - lastRan >= limit) {
                        func.apply(self, args);
                        lastRan = Date.now();
                    }
                },
                limit - (Date.now() - lastRan),
            );
        }
    };
};

export default throttle;
