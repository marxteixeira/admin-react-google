//criar uma interface para definir o que deve ser passado para o componente
interface TituloProps {
    titulo: string
    subtitulo: string
}

//essa interface acima será referenciada no objeto de parâmetro do método
export default function Titulo(props: TituloProps) {
    return (
        <div>
            <h1 className={`
	            font-black text-3xl
                text-gray-900
	          `}>
                {props.titulo}
            </h1>

            <h2 className={`
	            font-light text-sm text-gray-600
	          `}>
                {props.subtitulo}
            </h2>
        </div>
    )
}