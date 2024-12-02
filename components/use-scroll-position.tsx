import { Devider } from './devider';
export const UseScrollPosition = () => {
	return (
		<div className='flex flex-col p-4 gap-2'>
			<Devider id={'use-scroll-position'} />
			<h3 className='text-3xl mb-4'>useScrollPosition</h3>
			<p className='pl-4'>
				<span className='text-blue-500'>useScrollPosition</span> - отслеживает
				положение прокрутки окна браузера по указанной оси и возвращает объект с
				текущими значениями прокрутки.
			</p>
			<ul className='mt-4'>
				<span className='text-2xl'>Params:</span>
				<li className='ml-4'>
					<span className='text-blue-500'>Axis </span> - Тип, который может
					принимать значения x, y или both, указывая, какую ось прокрутки нужно
					отслеживать.
				</li>
			</ul>
			<ul className='mt-4'>
				<span className='text-2xl mt-4'>Return:</span>
				<li className='ml-4'>
					<span className='text-blue-500'>ScrollPosition </span> - содержащий
					текущие значения прокрутки для отслеживаемых осей. Если ось не
					отслеживается, соответствующее значение будет null.
				</li>
			</ul>
			<p className='text-2xl mt-4'>Example</p>
			<p>{`const { y } = useScrollPosition('y');`}</p>
		</div>
	);
};
