module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontWeight: {
      light: 300,
      normal: 400,
      bold: 600,
      extrabold: 700,
    },
    colors: {
      primary: {
        50: '#FEF8F2',
        100: '#FDEAD9',
        200: '#FCDABC',
        500: '#F99C4D',
        600: '#F77A23',
        700: '#D6681C',
        800: '#A95213',
        900: '#643007',
      },
      pink: {
        50: '#FCF8FA',
        600: '#CC8DAD',
        700: '#BF7098',
        800: '#AD487B',
      },
      gray: {
        50: '#FAF9F8',
        100: '#EFEDEB',
        700: '#948779',
        800: '#746A60',
        900: '#443E37',
      },
      red:{
        50:"#FEF8F7",
        600:"#F04B33",
        700:"#C72D1B",
        800:"#771A0F",
      },
      yellow: {
        50:'#F2C94C',
        600:"#FEED56",
        700:"#FFCC4C",},
      orange: '#F2994A',
      black: '#344242',
      white: '#FFFFFF',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.5rem',
      xl: '1.875rem',
      '2xl': '2.25rem',
    },
    extend: {},
  },
  plugins: [],
};
