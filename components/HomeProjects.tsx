import React from 'react';
import explorandoEmociones from '../public/images/explorando-emociones.png';
import proyectoFacultades from '../public/images/proyecto-facultades.png';
import proyectoEmpy from '../public/images/proyecto-empy.png';
import ProjectCard from './ProjectCard';

const HomeProjects = () => {
	return (
		<>
			<div className="col-span-12 justify-center items-center">
				<h1 className="text-center w-1/2 mx-auto mt-12 uppercase font-extrabold text-xl">
					Proyectos
				</h1>
			</div>
			<ProjectCard
				layout={0}
				src={proyectoFacultades}
				title="Optimizando los sitios web de facultades de una universidad pública"
				subtitle="¿Cómo incrementar valor en la visibilidad de instituciones educativas?"
				link="/sitios-web-facultades-universidad"
				roles="Roles: UX Lead | Product Designer"
			/>
			<ProjectCard
				layout={1}
				src={explorandoEmociones}
				title="Explorando emociones"
				subtitle="¿Cómo mejorar la salud mental de los adolescentes?"
				link="/explorando-emociones"
				roles="Roles: UX Designer | Visual Designer"
			/>
			<ProjectCard
				layout={0}
				src={proyectoEmpy}
				title="Empy"
				subtitle="¿Cómo brindar herramientas a consultantes y terapeutas psicológicos?"
				link="/empy"
				roles="Roles: Interaction Designer | Visual
                Designer"
			/>
			{/* <ProjectCard
				layout={1}
				src={explorandoEmociones}
				title="Explorando emociones"
				subtitle="¿Cómo mejorar la salud mental de los adolescentes?"
				link="/explorando-emociones"
				roles="Roles: UX Researcher | Interaction Designer | Visual
                Designer"
			/> */}
		</>
	);
};

export default HomeProjects;
