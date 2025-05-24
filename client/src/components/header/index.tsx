import { ModeToggle } from '@/components';

export const Header: React.FC = () => {
    return (
        <header className='py-sm flex justify-between border-b'>
            <span className='text-lg font-semibold'>Stable Diffusion Web UI</span>
            <ModeToggle />
        </header>
    );
};
