import { DivImagens1, Imagem1, Imagem2, Imagem3, Imagem4, DivImagens2, Imagem5, Imagem6, Imagem7, Imagem8, 
        DivImagens3, Imagem9, Imagem10, Imagem11, Imagem12
} from "./style"
import imagemp1 from "../../assets/Imagem1.gif"
import imagemp2 from "../../assets/Imagem2.gif"
import imagemp3 from "../../assets/Imagem3.jpg"
import imagemp4 from "../../assets/Imagem4.jpg"
import imagemp5 from "../../assets/Imagem5.jpg"
import imagemp6 from "../../assets/Imagem6.jpg"
import imagemp7 from "../../assets/Imagem7.jpg"
import imagemp8 from "../../assets/Imagem8.jpg"
import imagemp9 from "../../assets/Imagem9.gif"
import imagemp10 from "../../assets/Imagem10.jpg"
import imagemp11 from "../../assets/Imagem11.gif"
import imagemp12 from "../../assets/Imagem12.jpg"


export const GaleriaImagem = () => {

    return (
        <div>
            <DivImagens1>
                <Imagem1 src={imagemp1} alt="Gif 1"></Imagem1>
                <Imagem2 src={imagemp2} alt="Gif 2"></Imagem2>
                <Imagem3 src={imagemp3} alt="Imagem 3"></Imagem3>
                <Imagem4 src={imagemp4} alt="Imagem 4"></Imagem4>
            </DivImagens1>

            <DivImagens2>
                <Imagem5 src={imagemp5} alt="Gif 5"></Imagem5>
                <Imagem6 src={imagemp6} alt="Gif 6"></Imagem6>
                <Imagem7 src={imagemp7} alt="Imagem 7"></Imagem7>
                <Imagem8 src={imagemp8} alt="Imagem 8"></Imagem8>
            </DivImagens2>

            <DivImagens3>
                <Imagem9 src={imagemp9} alt="Gif 9"></Imagem9>
                <Imagem10 src={imagemp10} alt="Imagem 10"></Imagem10>
                <Imagem11 src={imagemp11} alt="Imagem Gif11"></Imagem11>
                <Imagem12 src={imagemp12} alt="Imagem 12"></Imagem12>
            </DivImagens3>
        </div>
    )
}