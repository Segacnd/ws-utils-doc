import Image from 'next/image';
import { Devider } from './devider';
import imageContext from '@/public/use-latest.jpg';
export const UseLatest = () => {
	return (
		<div className='flex flex-col p-4 gap-2'>
			<Devider id={'use-latest'} />
			<h3 className='text-3xl mb-4'>useLatest</h3>
			<p className='pl-4'>
				<span className='text-blue-500'>useLatest</span> - это утилита для
				создания React контекста с предустановленными Provider и хуком
				useContext.
			</p>
		
			<p className='text-2xl mt-4'>Example</p>
			<Image className='rounded-xl' src={imageContext} alt='image context' />
		</div>
	);
};
