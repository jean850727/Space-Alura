import styled from "styled-components"
import GlobalStyles from "/src/Components/GlobalStyles"
import Cabecera from "./Components/Cabecera";
import BarraLateral from "./Components/BarraLateral";
import Banner from "./Components/Banner";
import banner from "./assets/banner.png";
import Galeria from "./Components/Galeria";
import fotos from "./fotos.json";
import { useState } from "react";
import ModalZoom from "./Components/ModalZoom";


const FondoGradiente = styled.div`
background: linear-gradient(175deg, #041833 4.16%, #04244F 48%,
 #154580 96.76%);
 width: 100%;
 min-height:100vh;
 .logo{
  width:212px;
 }
`

const AppContainer = styled.div`
width:1280px;
max-width:100%;
margin:0 auto;
`

const MainCcontainer = styled.main`
display:flex;
gap:24px;

`
const ContenidoGaleria = styled.section`
display:flex;
flex-direction:column;
flex-grow:1;
`

const App = () => {
  const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos)
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null)




  return (
    <>
      <FondoGradiente>
        <GlobalStyles />

        <AppContainer>
          <Cabecera />
          <MainCcontainer>
            <BarraLateral />

            <ContenidoGaleria>
              <Banner texto="La galeria más completa de fotos del espacio"
                backgroundImage={banner} />
              <Galeria alSeleccionarFoto={foto=>setFotoSeleccionada(foto)} fotos={fotosDeGaleria}  />
            </ContenidoGaleria>

          </MainCcontainer>

        </AppContainer>
        <ModalZoom foto={fotoSeleccionada} /> 
      </FondoGradiente>
    </>
  )
}

export default App
