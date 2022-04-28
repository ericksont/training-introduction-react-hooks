import { createGlobalStyle } from 'styled-components';
import bgImg from '../../images/bg.jpg';

export const GlobalStyle = createGlobalStyle`
  body {
    background: url(${bgImg}) center no-repeat;  
    background-size: cover;
    color: #fff;
    padding: 0;
    margin: 0;
    text-shadow: 5px 5px #050A3B;
    font-family: 'New Tegomin', serif;
  }
`;
