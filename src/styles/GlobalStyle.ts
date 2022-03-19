import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root{
    --white-300: #e5e5e5e7;
    --blue-400: rgb(32, 15, 86);;
    --blue-600: #13132b;
    --black-900: #040517;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;

    ::-webkit-scrollbar{
        height:0.7rem;
        background:var(--blue-400);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb{
        background: orange;
        border-radius: 20px;
    }
}

body, input, textarea, button {
    font-family: 'Montserrat', sans-serif; 
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
}

html {
    @media (max-width: 1080px){
        font-size: 93.75%;
    }
    
    @media (max-width: 720px){
            font-size: 87.5%;
    }
}

button, a {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

`;
