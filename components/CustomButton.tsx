import Link from 'next/link';
import React from 'react';

const CustomButton = ({ text = '', link = '', enlace = '' }) => {
	if (enlace !== '') {
		return (
			<button
				onClick={() => {
					window.open(`${enlace}`, '_blank');
				}}
				className="border-morado border-2 font-bold text-morado px-3 py-1 rounded-lg hover:bg-morado/5">
				{text}
			</button>
		);
	} else {
		return (
			<Link href={link}>
				<button className="border-morado border-2 font-bold text-morado px-3 py-1 rounded-lg hover:bg-morado/5">
					{text}
				</button>
			</Link>
		);
	}
};

export default CustomButton;
