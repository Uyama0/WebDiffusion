import { RootState } from '../store';

import { IParameters } from '../slices/parameters';

export const parametersSelector = (state: RootState): IParameters => state.parameters;
