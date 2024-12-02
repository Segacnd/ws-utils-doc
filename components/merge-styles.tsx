import Image from 'next/image';
import { Devider } from './devider';
import imageContext from '@/public/merge-styles.jpg';
export const MergeStyles = () => {
	return (
		<div className='flex flex-col p-4 gap-2'>
			<Devider id={'merge-styles'} />
			<h3 className='text-3xl mb-4'>Merge styles</h3>
			<p className='pl-4'>
				<span className='text-blue-500'>mergeStyles</span> - это утилитарная
				функция, которая объединяет несколько объектов CSS стилей в один
				консолидированный объект.
			</p>
			<ul className='mt-4'>
				<span className='text-2xl'>Params:</span>
				<li className='ml-4'>
					<span className='text-blue-500'>...styles: InlineStyle[] </span> -
					Массив объектов стилей типа InlineStyle, который может включать:
				</li>
				<li className='ml-4'>
					<span className='text-blue-500'>CSSProperties </span> - стандартные
					React CSS свойства
				</li>
				<li className='ml-4'>
					<span className='text-blue-500'>объект с CSS свойствами </span>
				</li>
				<li className='ml-4'>
					<span className='text-blue-500'>null | undefined </span>
				</li>
			</ul>
			<ul className='mt-4'>
				<span className='text-2xl mt-4'>Return:</span>
				<li className='ml-4'>
					{' '}
					<span className='text-blue-500'>CSSProperties | undefined</span> -
					Объединенный объект стилей или undefined, если нет действительных
					стилей
				</li>
			</ul>
			<p className='text-2xl mt-4'>Example</p>
			<Image className='rounded-xl' src={imageContext} alt='image context' />
		</div>
	);
};
