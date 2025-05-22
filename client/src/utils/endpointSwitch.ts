import { TPromptSchema } from '@/types/modelsTypes';

export default function determineEndpoint(settings: TPromptSchema, url: string): string {
    const auto = settings.auto;
    const input_image = settings.alwayson_scripts.controlnet.args[0].input_image;

    switch (true) {
        case input_image && auto:
            return `${url}/auto/controlnet`;

        case input_image && !auto:
            return `${url}/default/controlnet`;

        default:
            return `${url}/default`;
    }
}
