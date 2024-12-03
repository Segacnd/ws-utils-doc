import Image from 'next/image';

import route from '@/public/routes-route.jpg';
import route2 from '@/public/routes-usage.jpg';
import route3 from '@/public/routes-with-meta.jpg';
import { Devider } from '../react/devider';
import { InstallWidget } from '../install-widget';

const data = {
	npm: 'npm i @ws-utils/common-http',
	pnpm: 'pnpm i @ws-utils/common-http',
	yarn: 'yarn add @ws-utils/common-http',
};
export const Routes = () => {
	return (
		<div className='flex flex-col p-4 gap-2'>
			<Devider id={'routes'} />
			<h3 className='text-3xl mb-4'>Routes</h3>
			<InstallWidget data={data} />
			<p className='pl-4'>
				<span className='text-blue-500'>routes</span> - это утилита для создания
				типизированной карты маршрутов API с поддержкой вложенности и
				параметров.
			</p>
			<ul className='mt-4'>
				<p className='text-xl'>
					Функция преобразует иерархическую структуру маршрутов в плоский
					объект, где каждый маршрут представлен строкой с дополнительными
					возможностями:
				</p>
				<li className='ml-4'>
					Генерация конкретных URL с подстановкой параметров
				</li>
				<li className='ml-4'>Доступ к метаданным маршрута</li>
				<li className='ml-4'>Константное имя маршрута</li>
			</ul>

			<p className='text-2xl mt-4'>Example</p>
			<Image className='rounded-xl' src={route} alt='image context' />
			<Image className='rounded-xl' src={route2} alt='image context' />

			<h3 className='text-3xl mb-4'>routesWithMetadata</h3>
			<ul className='mt-4'>
				<li className='ml-4'>
					Требует двойных скобок при вызове из-за ограничений вывода типов
					TypeScript
				</li>
				<li className='ml-4'>
					Поддерживает вложенную иерархию маршрутов любой глубины
				</li>
				<li className='ml-4'>
					Автоматически генерирует константы для всех маршрутов
				</li>
				<li className='ml-4'>
					Обеспечивает типобезопасность при использовании метаданных
				</li>
			</ul>
			<p className='text-2xl mt-4'>Example</p>
			<Image className='rounded-xl' src={route3} alt='image context' />
		</div>
	);
};
