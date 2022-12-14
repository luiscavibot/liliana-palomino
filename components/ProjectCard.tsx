import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/future/image';
import { title } from 'process';
import CustomButton from './CustomButton';

interface Props {
	src: StaticImageData;
	layout: number;
	link: string;
	title: string;
	roles: string;
	subtitle: string;
}

const ProjectCard: FC<Props> = ({
	layout = 0,
	src,
	title = '',
	roles = '',
	link = '',
	subtitle = '',
}) => {
	if (layout === 0) {
		return (
			<>
				<div className="col-span-10 md:col-span-5 md:col-start-2 col-start-2 mt-16 flex w-full md:w-[96%] flex-col items-start justify-center">
					<h1 className="font-bold text-morado">{title}</h1>
					<p className=" font-light mt-3">{subtitle}</p>
					<p className="font-bold mt-3 mb-6">{roles}</p>
					<CustomButton link={link} text="Ver caso de estudio" />
				</div>
				<div className="col-span-10 md:col-span-5 col-start-2 md:col-start-7 mt-16 w-full md:w-[96%] place-self-end">
					<Image src={src} quality={100} className="w-full" />
				</div>
			</>
		);
	} else {
		return (
			<>
				<div className="col-span-10 md:col-start-2 md:col-span-5 col-start-2 mt-16 w-full md:w-[96%] hidden md:block">
					<Image src={src} quality={100} className="w-full" />
				</div>
				<div className="col-span-10 md:col-span-5 col-start-2 md:col-start-7 mt-16 flex flex-col w-full md:w-[96%] items-start justify-center justify-self-end">
					<h1 className="font-bold text-morado">{title}</h1>
					<p className="font-light mt-3">{subtitle}</p>
					<p className="font-bold mt-3 mb-6">{roles}</p>
					<CustomButton link={link} text="Ver caso de estudio" />
				</div>
				<div className="col-span-10 md:col-span-5 col-start-2 mt-16 w-full md:w-[96%] block md:hidden">
					<Image src={src} quality={100} className="w-full" />
				</div>
			</>
		);
	}
};

export default ProjectCard;
