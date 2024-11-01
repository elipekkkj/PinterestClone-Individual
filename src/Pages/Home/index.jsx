import {
    ContainerHome, DivPerfil, ImagemPerfil, NomePerfil, TagPint, IconePint,
    Seguidores, DivMensagemSeguir, DivIconesBotoes, DivExport, IconeExport, BotaoMensagem,
    BotaoSeguir, DivOption, IconeOption, DivCriadoSalvo, DivCriados, TextoCriados, DivSalvos,
    TextoSalvos
} from "./style"
import { MenuLateral } from "../../components/ComponentSideBar"
import { NavBar } from "../../components/ComponentNavBar"
import { GaleriaImagem } from "../../components/ComponentImages"
import React, { useState } from "react";
import imagemPerfil from "../../assets/UserLuisF.gif"

export const PaginaHome = () => {
    
    const [estadoInicial, setEstadoInicial] = useState(0);
    const aumentarEstadoInicial = () => setEstadoInicial(estadoInicial + 1);

    return (
        <div>
            <ContainerHome>

                <MenuLateral />

                <NavBar />

                <DivPerfil>
                    <ImagemPerfil src={imagemPerfil} alt="Imagem do Perfil"></ImagemPerfil>
                    <NomePerfil>Luis Filipe Ctn</NomePerfil>
                    <TagPint>
                        <IconePint />
                        <span>elipekkkkj</span>
                    </TagPint>
                    <Seguidores>
                        <span>{estadoInicial} seguidores .
                            <span> 0 seguindo</span>
                        </span>
                    </Seguidores>
                </DivPerfil>

                <DivMensagemSeguir>
                    <DivIconesBotoes>
                        <DivExport>
                            <IconeExport />
                        </DivExport>
                        <BotaoMensagem>Mensagem</BotaoMensagem>
                        <BotaoSeguir onClick={aumentarEstadoInicial}>Seguir</BotaoSeguir>
                        <DivOption>
                            <IconeOption />
                        </DivOption>
                    </DivIconesBotoes>
                </DivMensagemSeguir>

                <DivCriadoSalvo>
                    <DivCriados>
                        <TextoCriados>Criados</TextoCriados>
                    </DivCriados>
                    <DivSalvos>
                        <TextoSalvos>Salvos</TextoSalvos>
                    </DivSalvos>
                </DivCriadoSalvo>

                <GaleriaImagem />

            </ContainerHome>
        </div>
    )
}

