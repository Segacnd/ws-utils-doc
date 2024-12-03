import { Devider } from './react/devider';
export const Instalation = () => {
	return (
		<div className='flex flex-col p-4 gap-2'>
			<Devider id={'instalation'} invisible />
			<h3 className='text-3xl mb-4'>Instalation</h3>
			
            <p className='text-blue-500 text-lg'><a href="https://www.npmjs.com/settings/ws-utils/packages">NPM</a></p>
            <p className='text-blue-500 text-lg'><a href="https://github.com/whitesnake-dev/ws-utils">GitHub</a></p>
		</div>
	);
};
