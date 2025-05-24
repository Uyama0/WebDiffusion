import { Outlet } from 'react-router';

import { ThemeProvider, Header, PromptEntry } from '@/components';

export const Layout: React.FC = () => {
    return (
        <ThemeProvider defaultTheme='dark'>
            <div className='min-h-screen bg-background px-lg flex flex-col gap-md dark:text-primary outline'>
                <Header />
                <PromptEntry />
                <Outlet />
            </div>
        </ThemeProvider>
    );
};
