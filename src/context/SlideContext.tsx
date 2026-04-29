import { createContext, useContext } from "react";

interface SlideContextValue {
  slideNum: number;
}

export const SlideContext = createContext<SlideContextValue>({ slideNum: 0 });

export function useSlideNum(): number {
  return useContext(SlideContext).slideNum;
}
