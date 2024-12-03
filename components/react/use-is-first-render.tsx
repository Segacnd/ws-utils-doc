import { InstallWidget } from '../install-widget';
import { Devider } from './devider';
const data = {
	npm: 'npm i @ws-utils/react-use-is-first-render',
	pnpm: 'pnpm i @ws-utils/react-use-is-first-render',
	yarn: 'yarn add @ws-utils/react-use-is-first-render',
};
export const UseIsFirstRender = () => {
	return (
		<div className='flex flex-col p-4 gap-2'>
			<Devider id={'use-is-first-render'} />
			<h3 className='text-3xl mb-4'>useIsFirstRender</h3>
			<InstallWidget data={data} />
			<p className='pl-4'>
				<span className='text-blue-500'>useIsFirstRender</span> - предназначен для определения первого рендера компонента
			</p>
		</div>
	);
};
