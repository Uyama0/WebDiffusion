import { H3, P, List, Blockquote, Button } from '@/components';

import moana1 from '@/assets/moana1.jpg';
import moana2 from '@/assets/moana2.png';
import rabbit1 from '@/assets/rabbit1.jpg';
import rabbit2 from '@/assets/rabbit2.png';
import old1 from '@/assets/old.jpg';
import old2 from '@/assets/old2.png';
import nature1 from '@/assets/nature1.jpg';
import nature2 from '@/assets/nature3.png';

import { Link } from 'react-router';
import styles from './styles.module.css';

export const About: React.FC = () => {
    return (
        <div className='mx-60'>
            <H3>О проекте</H3>
            <P>
                NeuroSketch — веб-сервис генерации изображений из скетчей на базе современных диффузионных моделей. Мы
                автоматизируем этапы, которые обычно занимают часы ручной доработки: подбор стилей, детализацию,
                цветокоррекцию. Создавайте визуальные концепты за минуты: загрузите простой набросок и получите
                реалистичное изображение для презентаций, маркетинга и прототипирования.
            </P>
            <H3 classname='mt-8'>Что вы получаете</H3>
            <List>
                <li>Быстрый путь от идеи к картинке</li>
                <li>Стабильное качество без сложных настроек</li>
                <li>Безопасную обработку данных (файлы можно не сохранять на сервере по настройке)</li>
            </List>
            <H3 classname='mt-8'>Возможности</H3>
            <List>
                <li>Загрузка скетча (PNG/JPG/SVG), задание стиля и подсказок (prompt)</li>
                <li>Шаблоны стилей (реализм, иллюстрация, продукт-рендер, интерьер)</li>
                <li>Контроль степени «следования скетчу»</li>
                <li>Cерии вариаций и апскейл</li>
            </List>
            <H3 classname='mt-8'>Коммерческие применения</H3>
            <List>
                <li>Дизайн и брендинг: быстрые прототипы логотипов, иллюстраций, айдентики</li>
                <li>E-commerce: карточки товара, визуализации упаковки</li>
                <li>Архитектура/интерьеры: быстрые эскизные визуализации</li>
                <li>Образование: наглядные материалы по рисунку и композиции</li>
                <li>Маркетинг: креативы для посадочных страниц, соцсетей</li>
            </List>
            <H3 classname='mt-8'>Примеры работы</H3>
            <div className={styles.gallery}>
                <img src={moana1} />
                <img src={moana2} />
                <img src={nature1} />
                <img src={nature2} />
                <img src={old1} />
                <img src={old2} />
                <img src={rabbit1} />
                <img src={rabbit2} />
            </div>
            <H3 classname='mt-8'>Инструкция</H3>
            <List>
                <li>Нажмите Загрузить скетч и выберите файл</li>
                <li>Выберите Sampling method ( Метод выборки)</li>
                <li>Выберите Model (Модель)</li>
                <li>Опишите, что хотите получить, в поле Подсказка (не обязательно)</li>
                <li>Нажмите Сгенерировать</li>
                <li>Сохраните понравившийся вариант или создайте вариации/апскейл.</li>
            </List>
            <H3 classname='mt-8'>Команда</H3>
            <List>
                <li>Кинзябулатов Дамир Даниярович, ML-инженер </li>
                <li>Баязитов Руслан Римович, frontend/backend </li>
            </List>
            <H3 classname='mt-8'>Контакты и ссылки</H3>
            <List>
                <li>Github: https://github.com/Uyama0/WebDiffusion</li>
                <li>Почта: uyamawork@gmail.com</li>
            </List>
        </div>
    );
};
