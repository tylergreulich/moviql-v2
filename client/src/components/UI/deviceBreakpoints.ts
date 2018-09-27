const size = {
  mobileS: '32rem',
  mobileM: '37.5rem',
  mobileL: '42.5rem',
  tablet: '76.8rem',
  laptop: '102.4rem',
  laptopL: '144rem',
  desktop: '256rem'
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
