import styled from "styled-components"
import GlobalStyles from "/src/Components/GlobalStyles"
import Cabecera from "./Components/Cabecera";
import BarraLateral from "./Components/BarraLateral";
import Banner from "./Components/Banner";
import banner from "./assets/banner.png";
import Galeria from "./Components/Galeria";
import fotos from "./fotos.json";
import { useState, useEffect } from "react";
import ModalZoom from "./Components/ModalZoom";
import Pie from "./Components/Pie";



const FondoGradiente = styled.div`
background: linear-gradient(175deg, #041833 4.16%, #04244F 48%,#154580 96.76%);
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
  const [filtro, setFiltro] = useState('')
  const [tag, setTag] = useState(0)
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null)

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotosDeGaleria(fotosFiltradas)
  }, [filtro, tag])

  const alAlternarFavorito = (foto) => {

    if (foto.id === fotoSeleccionada?.id) {
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita: !foto.favorita
      })
    }

    setFotosDeGaleria(fotosDeGaleria.map(fotosDeGaleria => {
      return {
        ...fotosDeGaleria,
        favorita: fotosDeGaleria.id === foto.id ? !foto.favorita :
          fotosDeGaleria.favorita
      }
    }))
  }


  return (
    <>
      <FondoGradiente>
        <GlobalStyles />

        <AppContainer>
          <Cabecera
           fitro={filtro} 
           setFiltro={setFiltro} />
          <MainCcontainer>
            <BarraLateral />

            <ContenidoGaleria>
              <Banner texto="La galeria más completa de fotos del espacio"
                backgroundImage={banner} />
              <Galeria fotos={fotosDeGaleria} 
                alSeleccionarFoto={foto => setFotoSeleccionada(foto)}
                alAlternarFavorito={alAlternarFavorito}
                setTag={setTag} />
            </ContenidoGaleria>

          </MainCcontainer>

        </AppContainer>
        <ModalZoom foto={fotoSeleccionada}
          alCerrar={() => setFotoSeleccionada(null)}
          alAlternarFavorito={alAlternarFavorito}
        />
        <Pie />
      </FondoGradiente>
    </>
  )
}

export default App
