import { $ } from "./$";
import { $$ } from "./$$";

import type { Range } from "./range";
import { range } from "./range";

import type { Sleep } from "./sleep";
import { sleep } from "./sleep";

import type { IsEqual } from "./isEqual";
import { isEqual } from "./isEqual";

type F = {
    $: (str: string) => Element | null;
    $$: (str: string) => Element[];
    sleep: Sleep;
    range: Range;
    isEqual: IsEqual;
};

const f: F = {
    $: $,
    $$: $$,
    sleep: sleep,
    range: range,
    isEqual: isEqual,
};

export default f;
