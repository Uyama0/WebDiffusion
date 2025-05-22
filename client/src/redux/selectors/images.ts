import { RootState } from '../store';

export const imagesSelector = (state: RootState): string[] => state.imageStore;
