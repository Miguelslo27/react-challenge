'use client';

import { useEffect, useState } from "react";

const ELEMENTS_SYMBOLS = [
  'Uub',
  'Uut',
  'Uuq',
  'Uup',
  'Uuh',
  'Uus',
  'Uuo',
  'He',
  'Li',
  'Be',
  'Ne',
  'Na',
  'Mg',
  'Al',
  'Si',
  'Cl',
  'Ar',
  'Ca',
  'Sc',
  'Ti',
  'Cr',
  'Mn',
  'Fe',
  'Co',
  'Ni',
  'Cu',
  'Zn',
  'Ga',
  'Ge',
  'As',
  'Se',
  'Br',
  'Kr',
  'Rb',
  'Sr',
  'Zr',
  'Nb',
  'Mo',
  'Tc',
  'Ru',
  'Rh',
  'Pd',
  'Ag',
  'Cd',
  'In',
  'Sn',
  'Sb',
  'Te',
  'Xe',
  'Cs',
  'Ba',
  'La',
  'Ce',
  'Pr',
  'Nd',
  'Pm',
  'Sm',
  'Eu',
  'Gd',
  'Tb',
  'Dy',
  'Ho',
  'Er',
  'Tm',
  'Yb',
  'Lu',
  'Hf',
  'Ta',
  'Re',
  'Os',
  'Ir',
  'Pt',
  'Au',
  'Hg',
  'Tl',
  'Pb',
  'Bi',
  'Po',
  'At',
  'Rn',
  'Fr',
  'Ra',
  'Ac',
  'Th',
  'Pa',
  'Np',
  'Pu',
  'Am',
  'Cm',
  'Bk',
  'Cf',
  'Es',
  'Fm',
  'Md',
  'No',
  'Lr',
  'Rf',
  'Db',
  'Sg',
  'Bh',
  'Hs',
  'Mt',
  'Ds',
  'Rg',
  'H',
  'B',
  'C',
  'N',
  'O',
  'F',
  'P',
  'S',
  'K',
  'V',
  'Y',
  'I',
  'W',
  'U',
];

export type BrakingTitleType = {
  firstName?: string;
  lastName?: string;
};

type BreakifyProps = {
  title?: BrakingTitleType;
};

const Breakify: React.FC<BreakifyProps> = ({ title = { firstName: 'Breaking', lastName: 'Bad' } }) => {
  const [breakifiedTitle, setBreakifiedTitle] = useState(`${title.firstName} ${title.lastName}`);

  useEffect(() => {
    setBreakifiedTitle(`${breakify(title.firstName || '')} ${breakify(title.lastName || '')}`);
  }, [title]);

  const breakify = (title: string) => {
    const elementRegExp = new RegExp(`(${ELEMENTS_SYMBOLS.join('|')})`, 'i');
    const match = title.match(elementRegExp)?.[0] || '';
    const elementSymbol = `${match.charAt(0).toUpperCase()}${match.slice(1)}`;
    return title.replace(match || '', `<strong>${elementSymbol}</strong>`)
  };

  return (
    <h1 dangerouslySetInnerHTML={{ __html: breakifiedTitle }}></h1>
  );
};

export default Breakify;
