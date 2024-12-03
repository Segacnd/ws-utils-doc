import Image from 'next/image';
import { Devider } from './devider';
import imageContext from '@/public/use-element-scroll-position.jpg';
import { InstallWidget } from '../install-widget';
const data = {
	npm: 'npm i @ws-utils/react-use-element-scroll-position',
	pnpm: 'pnpm i @ws-utils/react-use-element-scroll-position',
	yarn: 'yarn add @ws-utils/react-use-element-scroll-position',
};
export const UseElementScrollPosition = () => {
	return (
		<div className='flex flex-col p-4 gap-2'>
			<Devider id={'use-element-scroll-position'} />
			<h3 className='text-3xl mb-4'>useElementScrollPosition</h3>
			<p className='pl-4'>
				<span className='text-blue-500'>useElementScrollPosition</span> -
				отслеживает позицию прокрутки указанного DOM-элемента.
			</p>
			<InstallWidget data={data} />
			<ul className='mt-4'>
				<span className='text-2xl'>Params:</span>
				<li className='ml-4'>
					<span className='text-blue-500'>scrollElementRef </span> - React
					ref-объект, который ссылается на HTML-элемент, чью позицию прокрутки
					необходимо отслеживать.
				</li>
			</ul>
			<ul className='mt-4'>
				<span className='text-2xl mt-4'>Return:</span>
				<li className='ml-4'>
					Возвращает текущую позицию прокрутки элемента в пикселях (число).
				</li>
			</ul>
			<p className='text-2xl mt-4'>Example</p>
			<Image className='rounded-xl' src={imageContext} alt='image context' />
		</div>
	);
};
