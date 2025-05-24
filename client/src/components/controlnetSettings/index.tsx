import { CONTROLNET_TOGGLE_SETTINGS, CONTROLNET_PARAMETER_SETTINGS } from './constants';
import { COL_SPAN_VARIANTS } from '@/constants';

import { TColSpan } from '@/types/componentTypes';

export const ControlnetSettings: React.FC = () => {
    return (
        <>
            <div className='grid grid-cols-4'>
                {CONTROLNET_TOGGLE_SETTINGS.map((data, index) => {
                    const { component: Component, colSpan, props } = data;
                    return (
                        <div key={index} className={`${COL_SPAN_VARIANTS[colSpan as TColSpan]}`}>
                            <Component {...props} />
                        </div>
                    );
                })}
            </div>
            <div className='grid grid-cols-6 gap-md'>
                {CONTROLNET_PARAMETER_SETTINGS.map((data, index) => {
                    const { component: Component, colSpan, props } = data;
                    return (
                        <div key={index} className={`${COL_SPAN_VARIANTS[colSpan as TColSpan]}`}>
                            <Component {...props} />
                        </div>
                    );
                })}
            </div>
        </>
    );
};
