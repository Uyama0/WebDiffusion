import { useNavigate } from 'react-router';
import { Button } from '../ui';

import { PATHS } from '@/constants';

export const Navigation: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigate = (path: PATHS) => {
        navigate(path);
    };

    return (
        <nav className='absolute left-1/2 transform -translate-x-1/2 flex gap-sm'>
            <Button variant='ghost' onClick={() => handleNavigate(PATHS.HOME)}>
                Home
            </Button>
            <Button variant='ghost' onClick={() => handleNavigate(PATHS.ABOUT)}>
                About
            </Button>
        </nav>
    );
};
