import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
    padding:60px 0px;
    display: flex;
    justify-content: space-between;
`

const Cabecera = () => {
    return <HeaderEstilizado>
        <img src="img/Logo.png" alt="Logo de Space App" className="logo"/>
        <CampoTexto />
    </HeaderEstilizado>
}

export default Cabecera