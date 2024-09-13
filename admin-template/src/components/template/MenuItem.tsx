//criar uma interface para definir o que deve ser passado para o componente
interface MenuItemProps {
    url: string
    texto: string
    icone: any
}

//essa interface acima será referenciada no objeto de parâmetro do método
export default function MenuItem(props: MenuItemProps) {
    return (
        <li className={``}>
            {props.icone}
        </li>
    )
}