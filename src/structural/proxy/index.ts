const networkFetch = (url: string): string => {
  return `${url} - response from server`;
};

const cache = new Set();

export const proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArgs, args) {
    const url = args[0];

    if (cache.has(url)) {
      return `${url} - response from cache`;
    }

    cache.add(url);
    return Reflect.apply(target, thisArgs, args);
  },
});
