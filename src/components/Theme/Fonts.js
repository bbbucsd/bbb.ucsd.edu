import { injectGlobal } from 'styled-components';

injectGlobal`
  //noinspection CssUnknownTarget
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/lato/Lato-Regular.eot'); /* IE9 Compat Modes */
    src: url('/fonts/lato/Lato-Regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('/fonts/lato/Lato-Regular.woff2') format('woff2'), /* Modern Browsers */
    url('/fonts/lato/Lato-Regular.woff') format('woff'), /* Modern Browsers */
    url('/fonts/lato/Lato-Regular.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }
  
  //noinspection CssUnknownTarget
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/lato/Lato-Thin.eot'); /* IE9 Compat Modes */
    src: url('/fonts/lato/Lato-Thin.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('/fonts/lato/Lato-Thin.woff2') format('woff2'), /* Modern Browsers */
         url('/fonts/lato/Lato-Thin.woff') format('woff'), /* Modern Browsers */
         url('/fonts/lato/Lato-Thin.ttf') format('truetype');
    font-style: normal;
    font-weight: 200;
    text-rendering: optimizeLegibility;
  }
  
  //noinspection CssUnknownTarget
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/lato/Lato-Light.eot'); /* IE9 Compat Modes */
    src: url('/fonts/lato/Lato-Light.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('/fonts/lato/Lato-Light.woff2') format('woff2'), /* Modern Browsers */
         url('/fonts/lato/Lato-Light.woff') format('woff'), /* Modern Browsers */
         url('/fonts/lato/Lato-Light.ttf') format('truetype');
    font-style: normal;
    font-weight: 300;
    text-rendering: optimizeLegibility;
  }
  
  //noinspection CssUnknownTarget
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/lato/Lato-Bold.eot'); /* IE9 Compat Modes */
    src: url('/fonts/lato/Lato-Bold.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('/fonts/lato/Lato-Bold.woff2') format('woff2'), /* Modern Browsers */
         url('/fonts/lato/Lato-Bold.woff') format('woff'), /* Modern Browsers */
         url('/fonts/lato/Lato-Bold.ttf') format('truetype');
    font-style: normal;
    font-weight: bold;
    text-rendering: optimizeLegibility;
  }
  
  //noinspection CssUnknownTarget
  @font-face {
    font-family: 'Termina';
    src: url('/fonts/termina/Termina-Demi.woff2') format('woff2'), /* Modern Browsers */
         url('/fonts/termina/Termina-Demi.woff') format('woff'), /* Modern Browsers */
         url('/fonts/termina/Termina-Demi.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }
`
