import styled from "styled-components";
import { Titulo01, Subtitulo01, Subtitulo02, Paragrafo01, BotaoPrimario01 } from "./Comun/Comun";

const SectionApresentacao = styled.section`
    display: Grid;
    grid-template-columns: 1fr 1fr;
    height: clamp(9.688rem, -2.956rem + 57.798vw, 49.063rem);  
    max-height: 65vh;
    
    background-size: fill;
    background-position: left;
    background-repeat: no-repeat;
    align-items: center;
    padding: 0 4.86vw clamp(0rem, -40.441rem + 58.824vw, 12.5rem) 4.86vw;
`

function Apresentacao() {
    return (
        <>
            <SectionApresentacao>
                <div>
                    <Titulo01>UMA  <br />PLATAFORMA  DE <br />APRENDIZADO <br /> MOTOR</Titulo01>
                    <Subtitulo01>Prática motora | Realidade Virtual</Subtitulo01>
                </div>
            </SectionApresentacao>
        </>
    );
} 

export default Apresentacao;
