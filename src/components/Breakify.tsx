'use client';

import { ChangeEvent, useState } from "react";

type BrakingTitleType = {
  firstName: string;
  lastName: string;
};

const ELEMENTS_SYMBOLS = [
  'H',
  'He',
  'Li',
  'Be',
  'B',
  'C',
  'N',
  'O',
  'F',
  'Ne',
  'Na',
  'Mg',
  'Al',
  'Si',
  'P',
  'S',
  'Cl',
  'Ar',
  'K',
  'Ca',
  'Sc',
  'Ti',
  'V',
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
  'Y',
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
  'I',
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
  'W',
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
  'U',
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
  'Uub',
  'Uut',
  'Uuq',
  'Uup',
  'Uuh',
  'Uus',
  'Uuo',
];

const Breakify = () => {
  const [title, setTitle] = useState<BrakingTitleType>({ firstName: 'Breaking', lastName: 'Bad' });
  const [breakifiedTitle, setBreakifiedTitle] = useState(`${title.firstName} ${title.lastName}`);

  const handleFirstNameChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setTitle({
      firstName: ev.target.value,
      lastName: title.lastName,
    });
  };

  const handleLastNameChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setTitle({
      firstName: title.firstName,
      lastName: ev.target.value,
    });
  };

  const handleBreakifyClick = () => {
    setBreakifiedTitle(`${breakify(title.firstName)} ${breakify(title.lastName)}`);
  };

  const breakify = (title: string) => {
    const elementRegExp = new RegExp(`(${ELEMENTS_SYMBOLS.join('|')})`, 'i');
    const match = title.match(elementRegExp)?.[0] || '';
    const elementSymbol = `${match.charAt(0).toUpperCase()}${match.slice(1)}`;
    return title.replace(match || '', `<strong>${elementSymbol}</strong>`)
  };
  
  return (
    <>
      <h1>{breakifiedTitle}</h1>
      <input type="text" name="firstName" onChange={handleFirstNameChange} />
      <input type="text" name="lastName" onChange={handleLastNameChange} />
      <button onClick={handleBreakifyClick}>Breakify</button>
    </>
  );
};

export default Breakify;
