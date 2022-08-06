import Link from 'next/link';
import React from 'react';

const Menu = () => {
	return (
		<div className="col-span-12 flex flex-col  items-start md:flex-row justify-between md:items-center px-0 md:px-11 mt-7">
			<Link href="/">
				<div className="text-morado font-black text-xl cursor-pointer">
					<p>Liliana</p>
					<p>Palomino</p>
				</div>
			</Link>
			<ul className="md:flex gap-12 hidden ">
				<Link href="/">
					<li>
						<a className=" cursor-pointer hover:text-morado transition-colors">
							Inicio
						</a>
					</li>
				</Link>
				<Link href="/sobre-mi">
					<li>
						<a className="cursor-pointer hover:text-morado transition-colors">
							Sobre mi
						</a>
					</li>
				</Link>
			</ul>
			<ul className="list-none md:hidden mt-4 flex justify-end w-full">
				<Link href="/">
					<li className="">
						<a className=" cursor-pointer hover:text-morado transition-colors">
							Inicio
						</a>
					</li>
				</Link>
				<Link href="/sobre-mi">
					<li>
						<a className="ml-3 cursor-pointer hover:text-morado transition-colors">
							Sobre mi
						</a>
					</li>
				</Link>
			</ul>
		</div>
	);
};

export default Menu;
