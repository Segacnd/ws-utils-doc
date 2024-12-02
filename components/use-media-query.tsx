import Image from 'next/image';
import { Devider } from './devider';
import imageContext from '@/public/use-media-query.jpg';
export const UseMediaQuery = () => {
	return (
		<div className='flex flex-col p-4 gap-2'>
			<Devider id={'use-media-query'}  />
			<h3 className='text-3xl mb-4'>useMediaQuery</h3>
			<p className='pl-4'>
				<span className='text-blue-500'>useMediaQuery</span> - позволяет
				отслеживать соответствие медиа-запроса текущему состоянию viewport
				(области просмотра) браузера.
			</p>
			<ul className='mt-4'>
				<span className='text-2xl'>Params:</span>
				<li className='ml-4'>
					<span className='text-blue-500'>query </span> -
					{`строку медиа-запроса
					(например, '(max-width: 768px)')`}
				</li>
			</ul>
			<ul className='mt-4'>
				<span className='text-2xl mt-4'>Return:</span>
				<li className='ml-4'>
					<span className='text-blue-500'>boolean </span> - если текущее
					состояние viewport соответствует медиа-запросу
				</li>
			</ul>
			<p className='text-2xl mt-4'>Example</p>
			<Image className='rounded-xl' src={imageContext} alt='image context' />
		</div>
	);
};
