import { CartaoInput, InputPesquisar, IconeLupa, DivUsuario, IconeUsuario, DivSeta, IconeSeta } from "./style"

export const NavBar = () => {

    return (
        <div>
            <CartaoInput>
                <InputPesquisar placeholder="Pesquisar" type="text" />
                <IconeLupa />
                <DivUsuario>
                    <IconeUsuario />
                </DivUsuario>
                <DivSeta>
                    <IconeSeta />
                </DivSeta>
            </CartaoInput>
        </div>
    )
}