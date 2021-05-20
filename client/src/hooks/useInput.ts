import React, { useCallback, useState } from "react";

export const useInput = (initVal = "") => {
  const [value, setValue] = useState(initVal);
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
};
