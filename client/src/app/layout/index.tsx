import { Outlet } from 'react-router';

import PromptEntry from '@/components/promptEntry/PromptEntry';

export const Layout: React.FC = () => {
    return (
        <div>
            <PromptEntry />
            <Outlet />
        </div>
    );
};
