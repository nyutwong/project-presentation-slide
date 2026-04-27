import type { ComponentType } from 'react';
import { Slide01 } from './Slide01.tsx';
import { Slide02 } from './Slide02.tsx';
import { Slide03 } from './Slide03.tsx';
import { Slide04 } from './Slide04.tsx';

export type SlideComponent = ComponentType;

export const slides: SlideComponent[] = [
  Slide01,
  Slide02,
  Slide03,
  Slide04,
];
