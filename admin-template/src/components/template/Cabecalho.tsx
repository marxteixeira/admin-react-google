import Titulo from "./Titulo"

//criar uma interface para definir o que deve ser passado para o componente - teste
interface CabecalhoProps {
    titulo: string
    subtitulo: string
}

//essa interface acima será referenciada no objeto de parâmetro do método
export default function Cabecalho(props: CabecalhoProps) {
    return (
        <div>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
        </div>
    )
}