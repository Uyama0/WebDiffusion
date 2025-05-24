import { TColSpan } from '@/types/componentTypes';
import { BASE_SETTINGS_CONFIG, COL_SPAN_VARIANTS } from './constants';

export const BaseSettings: React.FC = () => {
    return (
        <div className='grid grid-cols-4 gap-sm'>
            {BASE_SETTINGS_CONFIG.map((data, index) => {
                const { component: Component, colSpan, props } = data;

                return (
                    <div key={index} className={`${COL_SPAN_VARIANTS[colSpan as TColSpan]}`}>
                        <Component {...props} />
                    </div>
                );
            })}
        </div>
    );
};
