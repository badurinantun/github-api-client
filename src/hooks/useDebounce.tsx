import React from 'react';

export function useDebounce(searchFn: Function, time = 0, deps: React.DependencyList = []) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, cancel, time]);
}
