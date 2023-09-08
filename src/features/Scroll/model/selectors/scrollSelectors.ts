import { StateSchema } from '@app/providers/StorePovider';
import { Scroll } from '../types/scrollSchema';
import { createSelector } from '@reduxjs/toolkit';

export const getScroll = (state: StateSchema): Scroll => state.scroll.scroll;

export const getScrollByPath = createSelector(
  getScroll,
  (_: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
