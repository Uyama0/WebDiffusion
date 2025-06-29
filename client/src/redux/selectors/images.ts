import { RootState } from '../store';

import { IImages } from '../slices/images';

export const imagesSelector = (state: RootState): IImages => state.images;
