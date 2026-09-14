import Link from 'next/link';
import React from 'react';

const Menu = () => {
  return (
    <nav className="col-span-12 flex items-center justify-between py-7 md:py-9" aria-label="Navegación principal">
      <Link legacyBehavior href="/">
        <a className="text-morado text-lg font-black leading-[1.05] tracking-[-0.02em]">
          Liliana
          <br />
          Palomino
        </a>
      </Link>

      <div className="flex items-center gap-5 text-sm font-bold md:gap-10">
        <Link legacyBehavior href="/#proyectos">
          <a className="transition-colors hover:text-morado">Proyectos</a>
        </Link>
        <Link legacyBehavior href="/sobre-mi">
          <a className="transition-colors hover:text-morado">Sobre mí</a>
        </Link>
        <a
          href="mailto:lilyevantter@gmail.com"
          className="hidden rounded-full border border-oscuro/20 px-4 py-2 transition-colors hover:border-morado hover:text-morado sm:inline-flex"
        >
          Contacto
        </a>
      </div>
    </nav>
  );
};

export default Menu;
