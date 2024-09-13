//criar uma interface para definir o que deve ser passado para o componente
interface ConteudoProps {
    children?: any //esperamos receber os filhos
}

//essa interface acima será referenciada no objeto de parâmetro do método
export default function Conteudo(props: ConteudoProps) {
    return (
        <div className={`
	        flex flex-col mt-7
        `}>
            {props.children}
        </div>
    )
}