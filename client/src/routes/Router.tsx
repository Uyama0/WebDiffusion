import { Route, Routes } from 'react-router-dom';

import ScratchToImage from '../components/models/ScratchToImage';

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<ScratchToImage />} />
        </Routes>
    );
};

export default Router;
