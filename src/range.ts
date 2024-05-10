export type Range = (a: number, b: number, c: number) => Generator<number, void, unknown>;

export const range: Range = function* (a: number, b: number, c: number) {
    let _a = a;
    if (0 < c) {
        while (_a < b) {
            yield _a;
            _a += c;
        }
    } else {
        while (_a > b) {
            yield _a;
            _a += c;
        }
    }
};
