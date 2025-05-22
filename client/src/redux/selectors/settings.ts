import { TPromptSchema, TControlNetArgs } from '@/types/modelsTypes';

import { RootState } from '../store';

export const settingsSelector = (state: RootState): TPromptSchema => state.scratchToImage;

export const controlnetArgsSelector = (state: RootState): TControlNetArgs =>
    settingsSelector(state).alwayson_scripts.controlnet.args[0];
