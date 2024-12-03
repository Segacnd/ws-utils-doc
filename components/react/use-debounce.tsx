import { InstallWidget } from '../install-widget';
import { Devider } from './devider';
const data = {
	npm: 'npm i @ws-utils/react-use-debounce',
	pnpm: 'pnpm i @ws-utils/react-use-debounce',
	yarn: 'yarn add @ws-utils/react-use-debounce',
};
export const UseDebounce = () => {
	return (
		<div className='flex flex-col p-4 gap-2'>
			<Devider id={'use-debounce'} />
			<h3 className='text-3xl mb-4'>useDebounce</h3>
			<p className='pl-4'>
				<span className='text-blue-500'>useDebounce</span> - используется для
				дебаунса значения, что означает задержку обновления значения до тех пор,
				пока не пройдет определенное количество времени с момента последнего
				изменения.
			</p>
			<InstallWidget data={data} />
			<ul className='mt-4'>
				<span className='text-2xl'>Params:</span>
				<li className='ml-4'>
					<span className='text-blue-500'>Value </span> - Значение, которое
					нужно дебаунсить.
				</li>
				<li className='ml-4'>
					<span className='text-blue-500'>Delay </span> - Задержка в
					миллисекундах, по умолчанию 500 мс.
				</li>
			</ul>
			<ul className='mt-4'>
				<span className='text-2xl mt-4'>Return:</span>
				<li className='ml-4'>
					<span className='text-blue-500'>debouncedValue </span> - которое
					обновляется только после того, как прошло указанное время delay с
					момента последнего изменения value.
				</li>
			</ul>
		</div>
	);
};
