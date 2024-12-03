'use client';
import { FC, useState } from 'react';

export const packageManagers = ['npm', 'yarn', 'pnpm'] as const;

type PackageManager = (typeof packageManagers)[number];

type InstallWidgetProps = {
	data: Record<PackageManager, string>;
};

const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);

export const InstallWidget: FC<InstallWidgetProps> = ({ data }) => {
	const [activeKey, setActiveKey] = useState<PackageManager>('npm');
	const keys = Object.keys(data) as PackageManager[];
	return (
		<div>
			<div>
				{keys.map((item) => (
					<button
						style={{
							backgroundColor: activeKey === item ? '#80808069' : 'transparent',
						}}
						className={'text-lg border border-b-0 rounded-t-lg px-4'}
						onClick={() => setActiveKey(item)}
						key={item}
					>
						{item}
					</button>
				))}
			</div>
			<div className='border w-fit min-w-[450px] justify-between px-4 py-3 flex gap-4'>
				{data[activeKey]}{' '}
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='lucide lucide-clipboard-copy cursor-pointer'
					onClick={() => copyToClipboard(data[activeKey])}
				>
					<rect width='8' height='4' x='8' y='2' rx='1' ry='1' />
					<path d='M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2' />
					<path d='M16 4h2a2 2 0 0 1 2 2v4' />
					<path d='M21 14H11' />
					<path d='m15 10-4 4 4 4' />
				</svg>
			</div>
		</div>
	);
};
