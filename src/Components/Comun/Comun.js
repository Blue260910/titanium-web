import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Titulo01 = styled.h1`
    color: #F5F5F4;
    font-family: "Poppins", sans-serif;
    font-size: clamp(0.938rem, 0.075rem + 3.945vw, 3.625rem);
    font-style: normal;
    font-weight: 700;
    line-height: 94.455%; /* 47.227px */
    letter-spacing: -0.5px;
`;

export const Subtitulo01 = styled.h1`
    color: #F5F5F4;
    font-family: "Poppins", sans-serif;
    font-size: clamp(0.625rem, 0.224rem + 1.835vw, 1.875rem);
    font-style: normal;
    font-weight: 500;
    line-height: 94.455%; /* 28.336px */
    letter-spacing: -2.1px;
`;




export const Titulo02 = styled.h2`
    color: #F5F5F4;

    font-family: "Poppins", sans-serif;
    font-size: clamp(1.25rem, 0.688rem + 2.569vw, 3rem);
    font-style: normal;
    font-weight: 600;
    line-height: 94.455%; /* 45.338px */

    
`;

export const Subtitulo02 = styled.h2`
    color: #F5F5F4;

    font-family: "Poppins", sans-serif;
    font-size: clamp(0.938rem, 0.737rem + 0.917vw, 1.563rem);
    font-style: normal;
    font-weight: 500;
    line-height: 94.455%; /* 23.614px */
`;

export const ListaItens1 = styled.h2`
    color: #F5F5F4;
    font-family: "Poppins", sans-serif;
    font-size: clamp(0.375rem, 0.054rem + 1.468vw, 1.375rem);
    font-style: normal;
    font-weight: 500;
    line-height: 94.455%; /* 20.78px */
`;







export const Texto01 = styled.h2`
    color: #FFF;
    font-family: "Poppins", sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 37.5px */
    letter-spacing: 0.25px;
`;

export const Paragrafo01 = styled.p`
    color: #fff;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: DM Sans;
    font-size: clamp(0.938rem, 0.764rem + 0.926vw, 1.875rem);
    font-style: normal;
    font-weight: 400;
`;

export const BotaoPrimario01 = styled(Link)`
    color: #fff;
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: DM Sans;
    font-size: clamp(0.625rem, 0.509rem + 0.617vw, 1.25rem);
    font-style: normal;
    font-weight: 700;
    border-radius: 9px;
    display: flex;
    padding: 2% 3%;
    align-items: center;
    gap: 8px;
    background-color: #238ca4;
    border: none;
    transition: all 0.2s ease-in-out;

    &:hover {
    color: #fff;
    background-color: #403e61;
    }

    @media (max-width: 600px) {
        width: 40%;
        padding: 3% 3%;
        
    }
`

export const BotaoPrimario02 = styled.button`
    color: #fff;
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: DM Sans;
    font-size: clamp(0.625rem, 0.509rem + 0.617vw, 1.25rem);
    font-style: normal;
    font-weight: 700;
    border-radius: 9px;
    display: flex;
    padding: 2% 3%;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #5D5A88;
    border: none;
    width: 100%;
    transition: all 0.2s ease-in-out;

    &:hover {
    color: #fff;
    background-color: #201C4B;
    }
`

export const BotaoSecundario01 = styled(Link)`
    color: #5d5a88;
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: DM Sans;
    font-size: clamp(0.625rem, 0.509rem + 0.617vw, 1.25rem);
    font-style: normal;
    font-weight: 700;
    border-radius: 9px;
    display: flex;
    padding: 2% 3%;
    align-items: center;
    gap: 8px;
    background-color: #fff;
    border: 1px solid #d4d2e3;
    transition: all 0.2s ease-in-out;

    &:hover {
    color: #fff;
    background-color: #403e61;
    }

    @media (max-width: 600px) {
        width: 40%;
        padding: 3% 3%;
        
    }
`