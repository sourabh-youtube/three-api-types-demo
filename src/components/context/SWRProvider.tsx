"use client";

import { ReactNode } from "react";
import { Cache, SWRConfig } from "swr";

const cacheProvider: (cache: Readonly<Cache<any>>) => Cache<any> = (cache) =>
  new Map();

export const SWRProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SWRConfig
      value={{
        provider: cacheProvider,
        fetcher: (url: string) => {
          return fetch(url)
            .then((res) => {
              if (!res.ok) {
                // global error handling
                console.error(res.statusText);
              }
              return res.json();
            })
            .catch((err) => {
              console.error(err);
            });
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};
