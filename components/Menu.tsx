import Link from 'next/link';
import React from 'react';

const Menu = () => {
	return (
		<div className="col-span-12 flex justify-between items-center px-11 mt-7">
			<Link href="/">
				<div className="text-morado font-black text-xl cursor-pointer">
					<p>Liliana</p>
					<p>Palomino</p>
				</div>
			</Link>
			<ul className="flex gap-12">
				<li className="font-extrabold cursor-pointer hover:text-morado transition-colors">
					Work
				</li>
				<li className="cursor-pointer hover:text-morado transition-colors">
					About me
				</li>
				<li className="cursor-pointer hover:text-morado transition-colors">
					Contact
				</li>
				<li className="cursor-pointer hover:text-morado transition-colors">
					Eng
				</li>
			</ul>
		</div>
	);
};

export default Menu;
