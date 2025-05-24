import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui';
import { useTheme } from '@/components';

export const ModeToggle: React.FC = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <Button variant='outline' size='icon' onClick={toggleTheme}>
            {theme === 'light' ? (
                <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all' />
            ) : (
                <Moon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all' />
            )}
            <span className='sr-only'>Toggle theme</span>
        </Button>
    );
};
