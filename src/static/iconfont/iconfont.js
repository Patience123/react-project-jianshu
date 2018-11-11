import { createGlobalStyle  } from 'styled-components';

const GlobalIconFont = createGlobalStyle`
   @font-face {
        font-family: "iconfont";
        src: url('./iconfont.eot?t=1541946234444'); /* IE9*/
        src: url('./iconfont.eot?t=1541946234444#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
        url('./iconfont.ttf?t=1541946234444') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        url('./iconfont.svg?t=1541946234444#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
        font-family:"iconfont" !important;
        font-size:16px;
        font-style:normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`

export default GlobalIconFont;
