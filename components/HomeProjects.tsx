import React from 'react';
import explorandoEmociones from '../public/images/explorando-emociones.png';
import ProjectCard from './ProjectCard';

const HomeProjects = () => {
	return (
		<>
			<div className="col-span-12 justify-center items-center">
				<h1 className="text-center w-1/2 mx-auto mt-12 uppercase font-extrabold text-xl">
					Projects
				</h1>
			</div>
			<ProjectCard
				layout={0}
				src={explorandoEmociones}
				title="Explorando emociones"
				subtitle="¿Cómo mejorar la salud mental de los adolescentes?"
				link="/explorando-emociones"
				roles="Roles: UX Researcher | Interaction Designer | Visual
                Designer"
			/>
			<ProjectCard
				layout={1}
				src={explorandoEmociones}
				title="Explorando emociones"
				subtitle="¿Cómo mejorar la salud mental de los adolescentes?"
				link="/explorando-emociones"
				roles="Roles: UX Researcher | Interaction Designer | Visual
                Designer"
			/>
			<ProjectCard
				layout={0}
				src={explorandoEmociones}
				title="Explorando emociones"
				subtitle="¿Cómo mejorar la salud mental de los adolescentes?"
				link="/explorando-emociones"
				roles="Roles: UX Researcher | Interaction Designer | Visual
                Designer"
			/>
			<ProjectCard
				layout={1}
				src={explorandoEmociones}
				title="Explorando emociones"
				subtitle="¿Cómo mejorar la salud mental de los adolescentes?"
				link="/explorando-emociones"
				roles="Roles: UX Researcher | Interaction Designer | Visual
                Designer"
			/>
		</>
	);
};

export default HomeProjects;
