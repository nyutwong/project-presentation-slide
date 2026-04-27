import type { ComponentType } from 'react';
import { Slide01 } from './Slide01.tsx';
import { Slide02 } from './Slide02.tsx';

export type SlideComponent = ComponentType;

export const slides: SlideComponent[] = [
  Slide01,
  Slide02,
];
