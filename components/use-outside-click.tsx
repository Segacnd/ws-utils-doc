import Image from 'next/image';
import { Devider } from './devider';
import imageContext from '@/public/use-outside-click.jpg';
export const UseOutsideClick = () => {
	return (
		<div className='flex flex-col p-4 gap-2'>
			<Devider id={'use-outside-click'} />
			<h3 className='text-3xl mb-4'>useOutsideClick</h3>
			<p className='pl-4'>
				<span className='text-blue-500'>useOutsideClick</span> - позволяет
				отслеживать клики вне указанного элемента.
			</p>
			<ul className='mt-4'>
				<span className='text-2xl'>Params:</span>
				<li className='ml-4'>
					<span className='text-blue-500'>callback </span> - функция, которая
					будет вызвана при клике вне отслеживаемого элемента.
				</li>
				<li className='ml-4'>
					<span className='text-blue-500'>eventType </span> - тип события DOM
					для прослушивания (по умолчанию mousedown)
				</li>
			</ul>
			<ul className='mt-4'>
				<span className='text-2xl mt-4'>Return:</span>
				<li className='ml-4'>
					<span className='text-blue-500'>ref </span> - необходимо присвоить
					отслеживаемому элементу
				</li>
			</ul>
			<p className='text-2xl mt-4'>Example</p>
			<Image className='rounded-xl' src={imageContext} alt='image context' />
		</div>
	);
};
