import styled from "styled-components";
import ItemNavegacion from "./ItemNavegacion";

const ListaEstilizada = styled.ul`
    margin:0;
    padding:0;
    list-style:none;

`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacion iconoActivo ="iconos/home-activo.png"
                     iconoInactivo= "iconos/home-inactivo.png" activo={true}>
                    inicio
                    </ItemNavegacion>
                    <ItemNavegacion iconoActivo ="iconos/mas visitado-activo.png"
                     iconoInactivo= "iconos/mas-vistas-inactivo.png" activo={false}>
                    Más vistas
                    </ItemNavegacion>
                    <ItemNavegacion iconoActivo ="iconos/me-gusta-activo.png"
                     iconoInactivo= "iconos/me-gusta-inactivo.png" activo={false}>
                    Más Me Gusta
                    </ItemNavegacion>
                    <ItemNavegacion iconoActivo ="iconos/nuevas-activo.png"
                     iconoInactivo= "iconos/nuevas-inactivo.png" activo={false}>
                    Nuevas
                    </ItemNavegacion>
                    <ItemNavegacion iconoActivo ="iconos/sorprendeme-activo.png"
                     iconoInactivo= "iconos/sorprendeme-inactivo.png" activo={false}>
                    Sorpréndeme
                    </ItemNavegacion>

                </ListaEstilizada>
            </nav>
        </aside>)
}

export default BarraLateral;