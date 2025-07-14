import { Muted } from '@/components';

import fond from '@/assets/fond.png';

export const Footer: React.FC = () => {
    return (
        <footer className='px-lg border-t border-border'>
            <div className='flex p-sm items-center border-x border-border'>
                <div className='flex gap-md w-[40%]'>
                    <img src={fond} alt='fond img' className='h-[50px]' />
                    <Muted>
                        Проект создан при поддержке Федерального государственного бюджетного учреждения «Фонд содействия
                        развитию малых форм предприятий в научно-технической сфере» в рамках программы «Студенческий
                        стартап» федерального проекта «Платформа университетского технологического предпринимательства»
                    </Muted>
                </div>
            </div>
        </footer>
    );
};
