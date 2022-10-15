import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import * as NextImage from 'next/image';
import global from "../src/themes/global";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
//theme
export const decorators = [
    (Story) => {
      return (
        <ThemeProvider theme={global}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      )
    },
]

//next/imageの差し替え 
const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => typeof props.src === 'string' ? (
    <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
  ) : (
    <OriginalNextImage {...props} unoptimized />
  )
})
