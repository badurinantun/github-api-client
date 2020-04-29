import React from 'react';

export function useSearchDebounce(searchFn: Function, time: number = 0, query: string) {
  const timeoutId = React.useRef<ReturnType<typeof setTimeout>>();
  const callback = React.useRef(searchFn);

  const cancel = React.useCallback(() => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
  }, []);

  React.useEffect(() => {
    callback.current = searchFn;
  }, [searchFn]);

  React.useEffect(() => {
    cancel();

    timeoutId.current = setTimeout(() => {
      callback.current();
    }, time);

    return () => {
      cancel();
    };
  }, [query, cancel, time]);
}
