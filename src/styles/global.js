import "react-toastify/dist/ReactToastify.css";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline:0; 
        font-family: 'Noto Serif', serif;
    } 

    html{
        scroll-behavior: smooth;
    }

    :root {
        --primary-color: #21262D;
        --primary-color-50: #485D5E;
        --secondary-color: #DDBC8B;
        --secondary-color-50: #B89664;
        --terciary-color: #FFFFFF;
        --terciary-color-50: #E5E5E5;

        --positive-color:#87B6A1;
        --negative-color:#E4A2B0;
        --alert-color:#EBBB49;
        --error-color:#D93025;
    }

    body {
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }

    button, a, input {
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        border: none;
    }

    .App{
        min-height: 100vh;
        
        position: relative;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`;