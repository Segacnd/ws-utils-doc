import Image from 'next/image';
import { Devider } from './devider';
import imageContext from '@/public/context-memo.jpg';
import { InstallWidget } from '../install-widget';
const data = {
	npm: 'npm i @ws-utils/react-context-memo',
	pnpm: 'pnpm i @ws-utils/react-context-memo',
	yarn: 'yarn add @ws-utils/react-context-memo',
};
export const ContextMemo = () => {
	return (
		<div className='flex flex-col p-4 gap-2'>
			<Devider id={'context-memo'} />
			<h3 className='text-3xl mb-4'>Context memo</h3>
			<p className='pl-4'>
				<span className='text-blue-500'>withSetterFromContext</span> - это
				компонент высшего порядка, который позволяет извлекать функции-сеттеры
				из React контекста и передавать их в оборачиваемый компонент как пропсы.
			</p>
			<InstallWidget data={data} />
			<ul className='mt-4'>
				<span className='text-2xl'>Params:</span>
				<li className='ml-4'>
					<span className='text-blue-500'>Component </span> -React компонент,
					который использует контекст
				</li>
				<li className='ml-4'>
					<span className='text-blue-500'>Context </span> - React контекст, из
					которого будут извлекаться сеттеры
				</li>
				<li className='ml-4'>
					<span className='text-blue-500'>setNames </span> - Массив имен
					функций-сеттеров, которые нужно извлечь из контекста
				</li>
			</ul>
			<ul className='mt-4'>
				<span className='text-2xl mt-4'>Important:</span>
				<li className='ml-4'>
					В мемоизированный компонент можно передавать пропсы из вне.
					<br /> <span className='text-blue-500'>Нужно помнить</span> что если
					при мемоизации мы кроме сеттеров достанем велью из контекста, смылс
					мемоизации потеряется.
				</li>
			</ul>
			<p className='text-2xl mt-4'>Example</p>
			<Image className='rounded-xl' src={imageContext} alt='image context' />
		</div>
	);
};
