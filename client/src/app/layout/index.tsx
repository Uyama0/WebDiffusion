import { Outlet } from 'react-router';

import { ThemeProvider, Header, Footer, Toaster } from '@/components';

export const Layout: React.FC = () => {
    return (
        <ThemeProvider defaultTheme='dark'>
            <div className='min-h-screen bg-background flex flex-col dark:text-primary'>
                <Header />
                <main className='mx-lg border-x border-border p-sm'>
                    <Outlet />
                </main>
                <Footer />
                <Toaster />
            </div>
        </ThemeProvider>
    );
};
