import { Devider } from './devider';
export const UseIsFirstRender = () => {
	return (
		<div className='flex flex-col p-4 gap-2'>
			<Devider id={'context-generator'} />
			<h3 className='text-3xl mb-4'>useIsFirstRender</h3>
			<p className='pl-4'>
				<span className='text-blue-500'>useIsFirstRender</span> - предназначен для определения первого рендера компонента
			</p>
		</div>
	);
};
