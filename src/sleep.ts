export type Sleep = (t: number) => Promise<void>;

export const sleep: Sleep = async (t: number) => new Promise((resolve) => setTimeout(resolve, t));
