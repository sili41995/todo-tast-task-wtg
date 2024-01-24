declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: { [key: string]: string };
  shadows: { [key: string]: string };
  fontWeight: { [key: string]: number };
  fontSize: { [key: string]: number };
  padding: { [key: string]: number };
  deskContainerWidth: number;
  borderRadius: { [key: string]: number };
  primaryGap: number;
  transitionDurationAndFunc: string;
  spacing: (value?: number) => string;
}

const theme: ITheme = {
  colors: {
    primaryColor: '#3456FF',
    otherColor: '#38b6ff',
    otherLinkColor: '#44de6f',
    primaryFontColor: '#000000',
    btnBackgroundColor: 'rgba(217, 217, 217, 0.58)',
    whiteColor: '#fff',
    redBtnColor: '#ff9192',
    greenBtnColor: '#89f2a6',
    lightgreyBtnColor: '#d9d9d9',
    redIconColor: '#d3232f',
    greenIconColor: '#00c938',
    lightgreyIconColor: '#555555',
    borderColor: 'rgba(137, 137, 137, 0.43)',
    backdropColor: 'rgba(18, 20, 23, 0.50)',
  },
  shadows: {
    primaryShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  },
  fontWeight: {
    primaryFontWeight: 500,
    secondaryFontWeight: 600,
    otherFontWeight: 400,
  },
  fontSize: {
    primaryFontSize: 16,
    secondaryFontSize: 18,
    otherFontSize: 20,
  },
  padding: {
    paddingContainer: 16,
    sectionPadding: 20,
  },
  borderRadius: {
    primaryBorderRadius: 4,
    secondaryBorderRadius: 8,
  },
  deskContainerWidth: 1200,
  primaryGap: 20,
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
};

export default theme;
