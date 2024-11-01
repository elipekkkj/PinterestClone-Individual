import {
    TelaFundo, SombreamentoFundo, ContainerLogin, CartaoLogin, ImagemPint, CartaoInput,
    TituloLogin, TextoEsqueciASenha, CartaoButton,
    ImagemFacebook, ImagemGoogle, TextoButton, CartaoTermos, StyleA, BarraTermos, CartaoCriarConta
} from "./style"
import imagemX from "../../assets/LogoPinterest.png"
import imagemFace from "../../assets/LogoFacebook2.png"
import imagemGoogle from "../../assets/google.png"
import { InputPages } from "../../components/ComponentInput"
import { BotaoEntrar, BotaoFacebook, BotaoGoogle, BotaoCriarConta } from "../../components/ComponentButton/style"

export const PaginaLogin = () => {

    return (
        <div>
            <TelaFundo>
                <SombreamentoFundo />

                <ContainerLogin>
                    <BotaoCriarConta>
                        <h3>Criar conta</h3>
                    </BotaoCriarConta>

                    <CartaoLogin>
                        <ImagemPint src={imagemX} alt="imagem do pinterest"></ImagemPint>

                        <TituloLogin>
                            <p>Faça o login para ver mais</p>
                        </TituloLogin>

                        <CartaoInput>
                            <InputPages propsname='Email' propsplaceholder='Email' propstype='text' />
                            <InputPages propsname='Senha' propsplaceholder='Senha' propstype='password' />
                        </CartaoInput>

                        <TextoEsqueciASenha>
                            <a>Esqueceu sua senha?</a>
                        </TextoEsqueciASenha>

                        <CartaoButton>
                            <BotaoEntrar>
                                <h2>Entrar</h2>
                            </BotaoEntrar>

                            <TextoButton>
                                <p>OU</p>
                            </TextoButton>

                            <BotaoFacebook>
                                <ImagemFacebook src={imagemFace} alt="Imagem do Facebook"></ImagemFacebook>
                                <h2>Continuar com o Facebook</h2>
                            </BotaoFacebook>

                            <BotaoGoogle>
                                <ImagemGoogle src={imagemGoogle} alt="Imagem do Google"></ImagemGoogle>
                                <h2>Continuar com o Google</h2>
                            </BotaoGoogle>
                        </CartaoButton>

                        <CartaoTermos>
                            <span>Ao continuar, você concorda com os
                                <StyleA> Termos de serviço</StyleA>
                                do Pinterest e confirma que leu nossa
                                <StyleA> Política de privacidade</StyleA>
                            </span>
                            <StyleA> Aviso na coleta de informações</StyleA>
                        </CartaoTermos>

                        <BarraTermos></BarraTermos>

                        <CartaoCriarConta>
                            <span>
                                Ainda não está no Pinterest?
                                <StyleA>Crie uma conta.</StyleA>
                            </span>

                            <span>
                                Você é uma empresa?
                                <StyleA>Comece aqui!</StyleA>
                            </span>
                        </CartaoCriarConta>

                    </CartaoLogin>
                </ContainerLogin>
            </TelaFundo>
        </div>
    )
}