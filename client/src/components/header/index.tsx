import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { ModeToggle, Button } from '@/components';

export const Header: React.FC = () => {
    const handleGithubClick = () => {
        window.open('https://github.com/Uyama0/WebDiffusion', '_blank', 'noopener,noreferrer');
    };
    return (
        <header className='px-lg border-b border-border'>
            <div className='flex py-sm px-sm items-center justify-between border-x border-border'>
                <span className='text-lg font-semibold'>Stable Diffusion Web UI</span>
                <div className='flex gap-sm'>
                    <Button variant='outline' size='icon'>
                        <GitHubLogoIcon onClick={handleGithubClick} />
                    </Button>
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
};
