const customViewports = {
  Pixel5: {
    name: 'Pixel5',
    styles: {
      width: '393px',
      height: '851px',
    },
  },
  iPhone13: {
    name: 'iPhone13',
    styles: {
      width: '390px',
      height: '844px',
    },
  },
  iPadPro12_2021: {
    name: 'iPad Pro 12 (2021)',
    styles: {
      width: '1024px',
      height: '1366px',
    },
  },
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
  backgrounds: {
    default: 'white',
    values: [
    { name: 'white', value: '#ffffff'},
    { name: 'black', value: '#333333' },
    { name: 'gray', value: '#F3F5FB' },
    { name: 'facebook', value: '#3b5998' },
    { name: 'twitter', value: '#00aced' },
  ]},
  // darkMode: {
  //   dark: { ...themes.dark, appBg: 'black' },
  //   light: { ...themes.normal, appBg: 'white' }
  // }
}