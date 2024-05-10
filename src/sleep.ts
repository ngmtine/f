export type Sleep = (t: number) => Promise<void>;

const sleep: Sleep = async (t: number) => new Promise((resolve) => setTimeout(resolve, t));

export default sleep;
