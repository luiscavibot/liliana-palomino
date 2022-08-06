import Link from 'next/link';
import React from 'react';

const CustomButton = ({ text = '', link = '' }) => {
	return (
		<Link href={link}>
			<button className="border-morado border-2 font-bold text-morado px-3 py-1 rounded-lg hover:bg-morado/5">
				{text}
			</button>
		</Link>
	);
};

export default CustomButton;
