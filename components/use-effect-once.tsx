import Image from 'next/image';
import { Devider } from './devider';
import imageContext from '@/public/use-effect-once.jpg';
export const UseEffectOnce = () => {
	return (
		<div className='flex flex-col p-4 gap-2'>
			<Devider id={'use-effect-once'} />
			<h3 className='text-3xl mb-4'>useEffectOnce</h3>
			<p className='pl-4'>
				<span className='text-blue-500'>useEffectOnce</span> - это пользовательский React хук, который гарантирует однократное выполнение эффекта в течение жизненного цикла компонента, даже при использовании строгого режима React (Strict Mode) и повторных рендерах.
			</p>

			<p className='text-2xl mt-4'>Example</p>
			<Image className='rounded-xl' src={imageContext} alt='image context' />
		</div>
	);
};
