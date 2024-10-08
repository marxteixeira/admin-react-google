import Link from 'next/link'

//criar uma interface para definir o que deve ser passado para o componente
interface MenuItemProps {
    url?: string
    texto: string
    icone: any
    className?: string
    onClick?: (evento: any) => void
}

//essa interface acima será referenciada no objeto de parâmetro do método
export default function MenuItem(props: MenuItemProps) {
    function renderizarLink() {
        return (
            <a className={`
                flex flex-col justify-center items-center
                h-20 w-20 text-gray-600 
                ${props.className}
            `}>
                {props.icone}
                <span className={`
                    text-xs font-light 
                `}>
                    {props.texto}
                </span>
            </a>
        )
    }

    return (
        <li onClick={props.onClick} className={`
            hover:bg-gray-100
            cursor-pointer
        `}>
            {props.url ? (
                <Link href={props.url}>
                    {renderizarLink()}
                </Link>
            ) : (
                renderizarLink()
            )}


        </li>
    )
}