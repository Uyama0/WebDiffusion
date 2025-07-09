import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { ModeToggle, Button, Navigation } from '@/components';

export const Header: React.FC = () => {
    const handleGithubClick = () => {
        window.open('https://github.com/Uyama0/WebDiffusion', '_blank', 'noopener,noreferrer');
    };

    return (
        <div className='px-lg border-b border-border'>
            <header className='flex py-sm px-sm items-center justify-between border-x border-border relative'>
                <span className='text-lg font-bold'>NeuroSketch</span>
                <Navigation />
                <div className='flex gap-sm'>
                    <Button variant='outline' size='icon'>
                        <GitHubLogoIcon onClick={handleGithubClick} />
                    </Button>
                    <ModeToggle />
                </div>
            </header>
        </div>
    );
};
