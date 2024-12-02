import Image from 'next/image';
import { Devider } from './devider';
import imageContext from '@/public/context-generator.jpg';
export const ContextGenerator = () => {
	return (
		<div className='flex flex-col p-4 gap-2'>
			<Devider id={'context-generator'} invisible />
			<h3 className='text-3xl mb-4'>Context generator</h3>
			<p className='pl-4'>
				<span className='text-blue-500'>generateContext</span> - это утилита для
				создания React контекста с предустановленными Provider и хуком
				useContext.
			</p>
			<ul className='mt-4'>
				<span className='text-2xl'>Params:</span>
				<li className='ml-4'>
					<span className='text-blue-500'>componentName: string </span> - Имя
					компонента, использующего контекст. Используется в сообщениях об
					ошибках.
				</li>
				<li className='ml-4'>
					<span className='text-blue-500'>
						defaultContextValue?: ContextValueType{' '}
					</span>{' '}
					- Опциональное значение по умолчанию для велью контекста.
				</li>
			</ul>
			<ul className='mt-4'>
				<span className='text-2xl mt-4'>Return:</span>
				<li className='ml-4'>
					<span className='text-blue-500'>Provider </span> - React
					компонент-провайдер для передачи значений контекста
				</li>
				<li className='ml-4'>
					<span className='text-blue-500'>useContext</span> - Кастомный хук для
					получения значений из контекста
				</li>
				<li className='ml-4'>
					<span className='text-blue-500'>Context</span> - Сам объект контекста
					React.Context
				</li>
			</ul>
			<p className='text-2xl mt-4'>Example</p>
			<Image className='rounded-xl' src={imageContext} alt='image context' />
		</div>
	);
};
