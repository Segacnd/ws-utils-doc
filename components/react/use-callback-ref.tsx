import Image from 'next/image';
import { Devider } from './devider';
import imageContext from '@/public/use-callback-ref.jpg';
import { InstallWidget } from '../install-widget';
const data = {
	npm: 'npm i @ws-utils/react-use-callback-ref',
	pnpm: 'pnpm i @ws-utils/react-use-callback-ref',
	yarn: 'yarn add @ws-utils/react-use-callback-ref',
};
export const UseCallbackRef = () => {
	return (
		<div className='flex flex-col p-4 gap-2'>
			<Devider id={'use-callback-ref'} />
			<h3 className='text-3xl mb-4'>useCallbackRef</h3>
			<p className='pl-4'>
				<span className='text-blue-500'>useCallbackRef</span> - это хук, который
				создает стабильную ссылку на колбэк-функцию, всегда имеющую доступ к
				актуальным значениям из замыкания.
			</p>
			<InstallWidget data={data} />
			<ul className='mt-4'>
				<span className='text-2xl'>Params:</span>
				<li className='ml-4'>
					<span className='text-blue-500'>
						Хук принимает колбэк-функцию как аргумент{' '}
					</span>
				</li>
			</ul>
			<ul className='mt-4'>
				<span className='text-2xl mt-4'>Important:</span>
				<li className='ml-4'>
					{' '}
					Создает мутабельную ссылку через useRef, которая хранит текущую версию
					колбэка
				</li>
				<li className='ml-4'>
					{' '}
					Использует useEffect для обновления ссылки при каждом изменении
					колбэка
				</li>
				<p className='text-xl'>
					Возвращает мемоизированную функцию через useMemo, которая:
				</p>
				<ul>
					<li className='ml-4'>
						{' '}
						Имеет стабильную ссылку (не меняется между рендерами)
					</li>
					<li className='ml-4'>
						{' '}
						При вызове всегда использует актуальную версию колбэка из ref
					</li>
				</ul>
			</ul>
			<p className='text-2xl mt-4'>Example</p>
			<Image className='rounded-xl' src={imageContext} alt='image context' />
		</div>
	);
};
