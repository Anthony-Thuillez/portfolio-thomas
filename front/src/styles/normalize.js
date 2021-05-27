import { createGlobalStyle } from 'styled-components'
import { Color, FontFamily } from './variables'

export default createGlobalStyle`
    * {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        box-sizing: border-box;
        background-clip: padding-box;
        margin: 0;
        outline: 0;
        padding: 0;
        word-break: break-word;
        &:before, &:after {
            box-sizing: border-box;
        }
    }

    html, body {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        font-family: sans-serif;
        overflow-x: hidden;
        position: relative;
    }

    html {
        font-size: 62.5%;
        height: 100%;
    }
    
    body {
        height: 100%;
        font-family: ${FontFamily.main}, sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        color: ${Color.textcolor};
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }
      
    img {
        max-width: 100%;
        user-select: none;
    }

    ol, ul {
        list-style: none;
    }

    h1, h2, h3, h4, h5, h6 {
        font-size: 100%;
        font-weight: 400;
    }

    a {
        background: transparent;
        color: inherit;
        text-decoration: none;
    }

    .font-secondary {
        font-family: ${FontFamily.secondary};
    }
`
