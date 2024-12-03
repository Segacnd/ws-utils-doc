import Image from 'next/image';
import { Devider } from './devider';
import imageContext from '@/public/use-interval.jpg';
import { InstallWidget } from '../install-widget';
const data = {
	npm: 'npm i @ws-utils/react-use-interval',
	pnpm: 'pnpm i @ws-utils/react-use-interval',
	yarn: 'yarn add @ws-utils/react-use-interval',
};
export const UseInterval = () => {
	return (
		<div className='flex flex-col p-4 gap-2'>
			<Devider id={'use-interval'} />
			<h3 className='text-3xl mb-4'>useInterval </h3>
			<p className='pl-4'>
				<span className='text-blue-500'>useInterval </span> - позволяет
				выполнять функцию обратного вызова через регулярные интервалы времени.
			</p>
			<InstallWidget data={data} />
			<ul className='mt-4'>
				<span className='text-2xl'>Params:</span>
				<li className='ml-4'>
					<span className='text-blue-500'>callback </span> - Функция, которая
					будет выполняться при каждом интервале
				</li>
				<li className='ml-4'>
					<span className='text-blue-500'>
                    delay{' '}
					</span>{' '}
					- Интервал в миллисекундах между выполнениями колбэка. Если передано null, интервал не запускается
				</li>
			</ul>
			<p className='text-2xl mt-4'>Example</p>
			<Image className='rounded-xl' src={imageContext} alt='image context' />
		</div>
	);
};
