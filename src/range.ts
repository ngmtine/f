export type Range = (start: number, stop?: number, step?: number) => Generator<number, void, unknown>;

/**
 * pythonのrange同等のイテレータ
 */
const range: Range = function* (start: number, stop?: number, step?: number) {
    let _start = stop !== undefined ? start : 0;
    const _stop = stop ?? start;
    const _step = step ?? (start <= _stop ? 1 : -1);

    if (0 < _step) {
        while (_start < _stop) {
            yield _start;
            _start += _step;
        }
    } else {
        while (_start > _stop) {
            yield _start;
            _start += _step;
        }
    }
};

export default range;

/*

使い方
for (const i of range(10)) console.log(i);

*/
