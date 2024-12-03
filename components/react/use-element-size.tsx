import Image from 'next/image';
import { Devider } from './devider';
import imageContext from '@/public/use-element-size.jpg';
import { InstallWidget } from '../install-widget';
const data = {
	npm: 'npm i @ws-utils/react-use-element-size',
	pnpm: 'pnpm i @ws-utils/react-use-element-size',
	yarn: 'yarn add @ws-utils/react-use-element-size',
};
export const UseElementSize = () => {
	return (
		<div className='flex flex-col p-4 gap-2'>
			<Devider id={'use-element-size'} />
			<h3 className='text-3xl mb-4'>useElementSize</h3>
			<p className='pl-4'>
				<span className='text-blue-500'>useElementSize</span> - позволяет
				получить размеры (ширину и высоту) HTML элемента.
			</p>
			<InstallWidget data={data} />
			<ul className='mt-4'>
				<span className='text-2xl'>Params:</span>
				<li className='ml-4'>
					<span className='text-blue-500'>element </span> - React ref объект,
					указывающий на HTML элемент, размеры которого необходимо измерить
				</li>
			</ul>
			<ul className='mt-4'>
				<span className='text-2xl mt-4'>Return:</span>

				<pre>
					{`
                    elementWidth: number;  // Ширина элемента в пикселях
                    elementHeight: number; // Высота элемента в пикселях
                    `}
				</pre>
			</ul>
			<p className='text-2xl mt-4'>Example</p>
			<Image className='rounded-xl' src={imageContext} alt='image context' />
		</div>
	);
};
