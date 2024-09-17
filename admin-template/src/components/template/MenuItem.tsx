import Link from 'next/link'

//criar uma interface para definir o que deve ser passado para o componente
interface MenuItemProps {
    url: string
    texto: string
    icone: any
}

//essa interface acima será referenciada no objeto de parâmetro do método
export default function MenuItem(props: MenuItemProps) {
    return (
        <li className={`hover:bg-gray-100`}>

            <Link href={props.url}>

                <a className={`
                    flex flex-col justify-center items-center
                    h-20 w-20
                `}>
                    {props.icone}
                    <span className={`
                        text-xs font-light text-gray-600
                    `}>
                        {props.texto}
                    </span>
                </a>

            </Link>

        </li>
    )
}