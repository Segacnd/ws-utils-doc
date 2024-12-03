import Image from 'next/image';
import { Devider } from './devider';
import imageContext from '@/public/use-controllable-state.jpg';
import { InstallWidget } from '../install-widget';
const data = {
	npm: 'npm i @ws-utils/react-use-controllable-state',
	yarn: 'yarn add @ws-utils/react-use-controllable-state',
    pnpm: 'pnpm add @ws-utils/react-use-controllable-state',
}
export const UseControllableState = () => {
	return (
		<div className='flex flex-col p-4 gap-2'>
			<Devider id={'use-controllable-state'} />
			<h3 className='text-3xl mb-4'>useControllableState</h3>
			<InstallWidget data={data} />
			<p className='pl-4'>
				<span className='text-blue-500'>useControllableState</span> - это React
				хук, который помогает управлять состоянием компонента, поддерживая как
				контролируемый, так и неконтролируемый режимы работы.
			</p>
			
			<p className='text-2xl mt-4'>Example</p>
			<Image className='rounded-xl' src={imageContext} alt='image context' />
		</div>
	);
};
