import Image from 'next/future/image';
import Head from 'next/head';
import React from 'react';
import HomeProjects from '../../components/HomeProjects';
import Menu from '../../components/Menu';
import portadaFacultades from '../../public/images/portada-facultades.png';
import mapeoActoresFacultades from '../../public/images/mapeo-actores-facultades.png';
import resultadoUno from '../../public/images/resultados-facultades/resultadoUno.png';
import resultadoDos from '../../public/images/resultados-facultades/resultadoDos.png';
import resultadoTres from '../../public/images/resultados-facultades/resultadoTres.png';
import resultadoCuatro from '../../public/images/resultados-facultades/resultadoCuatro.png';
import resultadoCinco from '../../public/images/resultados-facultades/resultadoCinco.png';
import resultadoSeis from '../../public/images/resultados-facultades/resultadoSeis.png';
import ideacionFacultadesUno from '../../public/images/ideacion-facultades.png';
import ideacionFacultadesDos from '../../public/images/ideacion-facultades-2.png';
import arquitecturaSitioFacultades from '../../public/images/arquitecturaSitioFacultades.png';
import solucionUno from '../../public/images/soluciones-facultades/solucionUno.png';
import solucionDos from '../../public/images/soluciones-facultades/solucionDos.png';
import solucionTres from '../../public/images/soluciones-facultades/solucionTres.png';
import Link from 'next/link';

const index = () => {
	return (
		<div
			className="text-oscuro font-sofiaPro"
			style={{ letterSpacing: '0.5px', lineHeight: '1.8' }}>
			<Head>
				<title>Pamela Palomino</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="mb-12">
				<div className="container mx-auto px-8 text-oscuro font-medium font-sofiaPro text-base">
					<div className="grid grid-cols-12 gap-x-6">
						<Menu />
						<ul className="px-0 md:px-11 mt-16 gap-2 col-span-full md:flex hidden">
							<Link href="/">
								<a>
									<li className="text-morado">Inicio</li>
								</a>
							</Link>
							<span>&gt;</span>
							<li>
								Optimización de los sitios web de facultades de
								una universidad pública
							</li>
						</ul>
					</div>
				</div>
				<div className="container mx-auto px-8 text-oscuro font-medium font-sofiaPro text-base">
					<div className="grid grid-cols-12 gap-x-6">
						<div className="col-start-1 md:col-start-2 col-span-12 md:col-span-8 mt-20">
							<h1 className="mx-auto font-bold text-3xl">
								Optimización de los sitios web de facultades de
								una universidad pública
							</h1>
						</div>
					</div>
				</div>
				<Image
					src={portadaFacultades}
					className="w-full mt-14"
					quality={100}
					priority={true}
				/>
				<div className="container mx-auto px-8 text-oscuro font-medium font-sofiaPro text-base">
					<div className="grid grid-cols-12 gap-x-6">
						<div className="col-start-1 md:col-start-2 col-span-12 md:col-span-6 mt-20">
							<h1 className="font-extrabold mb-4">
								Proyect Vision
							</h1>
							<p>
								El proyecto de optimización de los sitios web de
								las facultades de la universidad busca que estas
								puedan responder a las necesidades de sus
								diversos tipos usuarios y promover sus
								actividades y logros.
							</p>
						</div>
						<div className="col-span-12 md:col-span-2 mt-5 md:mt-20">
							<h1 className="font-extrabold mb-4">Roles</h1>
							<ul>
								<li>Ux Lead</li>
								<li>Product Designer</li>
							</ul>
						</div>
						<div className="col-span-12 md:col-span-2 mt-5 md:mt-20">
							<h1 className="font-extrabold mb-4">
								Contribución
							</h1>
							<ul>
								<li>User interview</li>
								<li>Emphaty an affinity map</li>
								<li>Information architecture</li>
								<li>Low-fidelity prototype</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="bg-fondoClaro/20 mt-5 md:mt-20 w-full">
					<div className="container mx-auto px-8 text-oscuro font-medium font-sofiaPro text-base ">
						<div className="grid grid-cols-12 gap-x-6">
							<div className="col-start-1 md:col-start-2 col-span-12 md:col-span-10 my-20 flex flex-col md:px-40">
								<h1 className="font-extrabold mb-4">
									Desafíos
								</h1>
								<ul className="list-disc ml-4">
									<li className="mb-2">
										Los sitios web actuales requieren un
										rediseño que genere mayor confianza en
										sus usuarios, y una unidad visual a
										nivel de la universidad.
									</li>
									<li>
										Las facultades no sienten que los sitios
										web reflejen todo su potencial académico
										y de investigación; y reciben quejas
										constantes por información difícil de
										encontrar, faltante o erronea.
									</li>
								</ul>
								<h1 className="font-extrabold mb-4 mt-10">
									Metas
								</h1>
								<ul className="list-disc ml-4">
									<li className="mb-2">
										Mejorar los sitios web de facultades
										para generar una experiencia organizada,
										confiable y amigable.
									</li>
									<li className="mb-2">
										Generar una estructura sólida y
										customizable que permita a cada facultad
										reflejar lo mejor de ella sin perder la
										unidad de la institución.
									</li>
									<li className="mb-2">
										Orientar y trabajar conjuntamente con
										autoridades y administrativos para
										mantener sitios web actualizados y
										orientados a cubrir las necesidades de
										sus usuarios.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="container mx-auto px-8 text-oscuro font-medium font-sofiaPro text-base ">
					<div className="grid grid-cols-12 gap-x-6">
						<div className="col-start-1 md:col-start-2 col-span-12 md:col-span-10 mt-20 flex flex-col md:px-40">
							<h1 className="font-extrabold mb-11 text-center text-4xl">
								Research
							</h1>
							<h1 className="font-bold mb-11">
								Mapeo de actores
							</h1>
							<div className="flex gap-10">
								<p className="w-full md:w-1/2">
									Para iniciar el proceso de investigación
									trabajé en la{' '}
									<span className="font-bold">
										identificación de los principales
										usuarios de las páginas web de
										facultades así como sus posibles
										actividades
									</span>
									i. También consideré como actores a
									investigar a directivos y administrativos de
									las facultades, para poder identificar los
									objetivos a nivel institucional; y a
									organismos calificadores y reguladores de
									las actividades universitarias que son
									referente externo de la información que
									necesita ser visibilizada.
								</p>
								<Image
									src={mapeoActoresFacultades}
									quality={100}
									className="md:block hidden"
								/>
							</div>
							<div className="md:hidden mt-5 flex justify-center">
								<Image
									src={mapeoActoresFacultades}
									quality={100}
								/>
							</div>
							<h1 className="font-bold mb-11 mt-20">
								Análisis competitivo
							</h1>
							<p>
								La revisión de los sitios webs de otras
								instituciones también formó parte del trabajo de
								investigación, así como la recopilación de
								información secundaria &#40;Una fuente de gran
								valor fue el reporte de Nielsen Norman Group
								respecto a sitios web de universidades &#41;.
							</p>
							<h1 className="font-bold mb-11 mt-20">
								Enretvistas y pruebas de usabilidad
							</h1>
							<p className="mb-2">
								Junto a mi equipo realicé entrevistas a los
								diversos tipos de usuarios con una guía
								orientada a conocer su experiencia con los
								sitios webs actuales de las facultades y sus
								necesidades informativas.
							</p>
							<p className="font-bold">
								El resultado de esta información se organizó en
								emphaty y affinity maps y nos permitió concluir
								nuestros principales insigths.
							</p>
						</div>
					</div>
				</div>
				<div className="container mx-auto px-8 text-oscuro font-medium font-sofiaPro text-base ">
					<div className="grid grid-cols-12 gap-x-6">
						<div className="col-start-2 col-span-10">
							<div className="grid grid-cols-3 gap-3 grid-flow-row-dense mt-12 place-items-center">
								<div className="col-span-9 md:col-span-1 w-full">
									<Image
										src={resultadoUno}
										className="w-full"
										quality={100}
									/>
								</div>
								<div className="col-span-9 md:col-span-1 w-full">
									<Image
										src={resultadoDos}
										className="w-full"
									/>
								</div>
								<div className="col-span-9 md:col-span-1 w-full">
									<Image
										src={resultadoTres}
										className="w-full"
									/>
								</div>
								<div className="col-span-9 md:col-span-1 w-full">
									<Image
										src={resultadoCuatro}
										className="w-full"
									/>
								</div>
								<div className="col-span-9 md:col-span-1 w-full">
									<Image
										src={resultadoCinco}
										className="w-full"
									/>
								</div>
								<div className="col-span-9 md:col-span-1 w-full">
									<Image
										src={resultadoSeis}
										className="w-full"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container mx-auto px-8 text-oscuro font-medium font-sofiaPro text-base ">
					<div className="grid grid-cols-12 gap-x-6">
						<div className="col-start-1 md:col-start-2 col-span-12 md:col-span-10 mt-20 flex flex-col px-0 md:px-40">
							<h1 className="font-extrabold mb-11 text-center text-4xl">
								Ideación
							</h1>
							<p>
								<span className="font-bold">
									Organicé reuniones de diseño con el equipo
								</span>
								, con el principal objetivo de buscar soluciones
								a las necesidades más comunes de los usuarios
								entrevistados, sin olvidar la necesidad de la
								institución de comunicar su potencial académico
								y de investigación.{' '}
								<span className="font-bold">
									Mi principal objetivo era tener una
									arquitectura del sitio definida, y mapear
									los flujos principales que atrevesarían los
									usuarios para conseguir la información.
								</span>
								&nbsp;Durante el análisis de las secciones y los
								contenidos a incluirse mantuve el enfoque en
								poder generar estructuras visuales que sean
								amigables según el tipo de información sin
								perder la vista en un desarrollo sistémico.
							</p>
						</div>
					</div>
					<div className="grid grid-cols-12 grid-rows-1 mt-14 gap-x-6">
						<div className="col-start-1 md:col-start-3 col-span-12 md:col-span-4 ">
							<Image
								src={ideacionFacultadesUno}
								className="w-full object-cover object-center"
							/>
						</div>
						<div className="col-span-12 mt-2 md:mt-0 md:col-span-4">
							<Image
								src={ideacionFacultadesDos}
								className="w-full object-cover object-center"
							/>
						</div>
						<h1 className="font-bold mb-11 col-start-1 md:col-start-3 col-span-12 md:col-span-8 mt-12">
							Arquitectura del sitio
						</h1>
						<div className="font-bold mb-11 col-start-1 md:col-start-3 col-span-12 md:col-span-8 mt-10">
							<Image src={arquitecturaSitioFacultades} />
						</div>
					</div>
					<div className="grid grid-cols-12 gap-x-6">
						<div className="col-start-1 md:col-start-2 col-span-12 md:col-span-10 mt-20 flex flex-col px-0 md:px-40">
							<h1 className="font-extrabold mb-11 text-center text-4xl">
								Solución
							</h1>
							<p className="mb-2">
								Habiendo ya realizado bocetos iniciales de la
								página web,{' '}
								<span className="font-bold">
									traduje nuestro trabajo a wireframes y
									posteriormente a prototipos de baja
									fidelidad, lo que nos permitió realizar
									nuestras primeras validaciones mediante
									pruebas de usuario. Así mismo realicé una
									investigación con uso de la herramienta card
									sorting
								</span>{' '}
								para evaluar si las etiquetas y secciones
								utilizadas en nuestra arquitectura de sitio
								favorecian la usabilidad.
							</p>
							<p>
								Finalmente se realizó el diseño en alta
								fidelidad con las funcionalidades del que sería
								nuestro producto mínimo viable.
							</p>
							<div className="flex justify-center items-center flex-col">
								<Image src={solucionUno} className="mt-20" />
								<Image src={solucionDos} className="mt-12" />
								<Image src={solucionTres} className="mt-12" />
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default index;
