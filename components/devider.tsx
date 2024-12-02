export const Devider = ({ id, invisible = false }: { id?: string; invisible?: boolean }) => {
	return <div className='h-px my-8 w-[90%] mx-auto bg-white/30' id={id} style={invisible ? {visibility: 'hidden'} : {}} />;
};
