import Link from 'next/link';
import React from 'react';

const buttonClasses =
  'inline-flex rounded-lg border-2 border-morado px-3 py-1 font-bold text-morado transition-colors hover:bg-morado/5';

const CustomButton = ({ text = '', link = '', enlace = '' }) => {
  if (enlace !== '') {
    return (
      <a href={enlace} target="_blank" rel="noreferrer" className={buttonClasses}>
        {text}
      </a>
    );
  }

  return (
    <Link legacyBehavior href={link}>
      <a className={buttonClasses}>{text}</a>
    </Link>
  );
};

export default CustomButton;
