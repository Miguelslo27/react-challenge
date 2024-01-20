import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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

const breakify = (title: string) => {
  const elementRegExp = new RegExp(`(${ELEMENTS_SYMBOLS.join('|')})`, 'i');
  const match = title.match(elementRegExp)?.[0] || '';
  const elementSymbol = `${match.charAt(0).toUpperCase()}${match.slice(1)}`;
  return title.replace(match || '', `<strong>${elementSymbol}</strong>`)
};

interface BreakingTitleSlice {
  firstName: string;
  lastName: string;
  breakified: string;
};

const firstName = 'Breaking';
const lastName = 'Bad';
const initialState: BreakingTitleSlice = {
  firstName,
  lastName,
  breakified: `${breakify(firstName)} ${breakify(lastName)}`,
};

const breakingTitleSlice = createSlice({
  name: "breakingTitle",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<{ firstName: string; lastName: string; }>) => {
      return { ...state, ...action.payload };
    },
    breakifyTitle: (state) => {
      return { ...state, breakified: `${breakify(state.firstName)} ${breakify(state.lastName)}` };
    },
  },
});

export default breakingTitleSlice.reducer;
export const { setTitle, breakifyTitle } = breakingTitleSlice.actions;
