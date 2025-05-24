import { Outlet } from 'react-router';

import { ThemeProvider, Header, PromptEntry, Footer } from '@/components';

export const Layout: React.FC = () => {
    return (
        <ThemeProvider defaultTheme='dark'>
            <div className='min-h-screen bg-background flex flex-col dark:text-primary'>
                <Header />
                <main className='mx-lg border-x border-border p-sm'>
                    <PromptEntry />
                    <Outlet />
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
};
