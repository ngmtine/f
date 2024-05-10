export type IsEmpty = (obj: any) => boolean;

/**
 * objectが空であるか否か
 */
const isEmpty: IsEmpty = (obj: any): boolean => {
    switch (obj) {
        case null:
        case undefined:
            return true;
        default:
            return Object.keys(obj).length === 0;
    }
};

export default isEmpty;
