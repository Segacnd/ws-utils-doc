import Image from 'next/image';
import { Devider } from './devider';
import imageContext from '@/public/merge-refs.jpg';
import { InstallWidget } from '../install-widget';

const data = {
	npm: 'npm i @ws-utils/react-merge-refs',
	pnpm: 'pnpm i @ws-utils/react-merge-refs',
	yarn: 'yarn add @ws-utils/react-merge-refs',
};
export const MergeRefs = () => {
	return (
		<div className='flex flex-col p-4 gap-2'>
			<Devider id={'merge-refs'} />
			<h3 className='text-3xl mb-4'>Merge refs</h3>
			<p className='pl-4'>
				<span className='text-blue-500'>MergeRefs</span> - это утилита для
				объединения нескольких React-рефов в один. Она позволяет применить
				несколько рефов к одному DOM-элементу или компоненту.
			</p>
			<InstallWidget data={data} />
			<ul className='mt-4'>
				<span className='text-2xl'>Params:</span>
				<li className='ml-4'>
					<span className='text-blue-500'>...inputRefs </span> - Функция
					принимает массив рефов через rest-параметр
				</li>
			</ul>
			<ul className='mt-4'>
				<span className='text-2xl mt-4'>Important:</span>
				<li className='ml-4'>
					Если после фильтрации остается 0 или 1 реф, возвращает его напрямую
				</li>
				<p className='my-2 text-xl'>
					<span className='text-blue-500'>В противном случае</span> создает
					новую функцию-обработчик, которая:{' '}
				</p>
				<ul>
					<li className='ml-2 '>
						Принимает значение рефа (DOM-элемент или инстанс компонента)
					</li>
					<li className='ml-4'>
						Применяет это значение ко всем переданным рефам:
					</li>
					<li className='ml-4'>
						Для функций-рефов вызывает их с новым значением
					</li>
					<li className='ml-4'>
						Для объектов-рефов устанавливает значение в свойство .current{' '}
					</li>
				</ul>
			</ul>
			<p className='text-2xl mt-4'>Example</p>
			<Image className='rounded-xl' src={imageContext} alt='image context' />
		</div>
	);
};
