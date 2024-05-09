import styled from "styled-components";
import { Titulo02, Subtitulo02, ListaItens1, Texto01 } from "./Comun/Comun";
import Estrelas from "../Assets/Estrelas.svg";
import Iten from "../Assets/Ellipse.svg";

const SectionApresentacao = styled.section`
  display: Grid;
  grid-template-columns: 1fr 1fr;
  width: 80%;
  margin-left: auto;
  padding: 0 4.86vw clamp(0rem, -40.441rem + 58.824vw, 12.5rem) 4.86vw 0px;

  @media (max-width: 600px) {
    width: 90%;
  }

`;

function Sessao2() {
  return (
    <>
      <SectionApresentacao>
        <div
          style={{
            padding: "clamp(0.563rem, 0.141rem + 1.927vw, 1.875rem)",
            borderRadius: "20px 0px 0px 20px",
            background: "rgba(107, 103, 103, 0.36)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backdropFilter: "blur(16.649999618530273px)",
              zIndex: -1,
            }}
          ></div>
          <ListaItens1>
            <img src={Iten} alt="Iten" style={{ marginRight: "10px", height:"clamp(0.75rem, 0.509rem + 1.101vw, 1.5rem)" }} />
            Pratique suas habilidades de forma interativa
          </ListaItens1>
          <ListaItens1>
            <img src={Iten} alt="Iten" style={{ marginRight: "10px", height:"clamp(0.75rem, 0.509rem + 1.101vw, 1.5rem)"  }} />
            Aprenda a usabilidade no mundo real
          </ListaItens1>
          <ListaItens1>
            <img src={Iten} alt="Iten" style={{ marginRight: "10px", height:"clamp(0.75rem, 0.509rem + 1.101vw, 1.5rem)"  }} />
            Rastreie seu progresso de forma gameficada
          </ListaItens1>
          <ListaItens1>
            <img src={Iten} alt="Iten" style={{ marginRight: "10px", height:"clamp(0.75rem, 0.509rem + 1.101vw, 1.5rem)"  }} />
            Veja o progresso de seus colegas
          </ListaItens1>
          <ListaItens1>
            <img src={Iten} alt="Iten" style={{ marginRight: "10px", height:"clamp(0.75rem, 0.509rem + 1.101vw, 1.5rem)"  }} />
            Aprimore-se
          </ListaItens1>
          <ListaItens1>
            <img src={Iten} alt="Iten" style={{ marginRight: "10px", height:"clamp(0.75rem, 0.509rem + 1.101vw, 1.5rem)"  }} />
            Pratique
          </ListaItens1>
        </div>
        <div
          style={{
            paddingTop: "clamp(0.563rem, 0.141rem + 1.927vw, 1.875rem)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backdropFilter: "blur(11.399999618530273px)",
              zIndex: -1,
            }}
          ></div>
          <Titulo02 style={{ margin: "10px" }}>Aprendizado prático</Titulo02>
          <Subtitulo02 style={{ margin: "10px" }}>
            Em realidade virtual e aumentada
          </Subtitulo02>
          <img
            src={Estrelas}
            alt="Estrelas"
            style={{ margin: "10px", height: "clamp(0.75rem, 0.188rem + 2.569vw, 2.5rem)" }}
          />
        </div>
      </SectionApresentacao>
    </>
  );
}

export default Sessao2;
