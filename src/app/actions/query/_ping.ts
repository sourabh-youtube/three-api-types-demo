export interface IGetPing {
  ping: string;
}
export const getPing = async (): Promise<IGetPing> => {
  return {
    ping: "Hello, server is running!",
  };
};
