export interface IGetPing {
  ping: string;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const postPing = async (data: string): Promise<IGetPing> => {
  await sleep(2000);

  return {
    ping: data,
  };
};
