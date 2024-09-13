import Cabecalho from "./Cabecalho"
import Conteudo from "./Conteudo"
import MenuLateral from "./MenuLateral"

//criar uma interface para definir o que deve ser passado para o componente
interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

//essa interface acima será referenciada no objeto de parâmetro do método
export default function Layout(props: LayoutProps) {
    return (
        <div className={`dark flex h-screen w-screen`}>
            <MenuLateral />
            <div className={`
                flex flex-col w-full p-7 
                bg-gray-300 dark:bg-gray-800
            `}>
                <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
                <Conteudo >
                    {props.children}
                </Conteudo >
            </div>
        </div>
    )
}