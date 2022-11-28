import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }
    
    body {
        background: #F5F5FA;
        font-family: 'Poppins';
    }
`;
