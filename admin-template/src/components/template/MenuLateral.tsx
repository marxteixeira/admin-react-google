import { IconeAjustes, IconeCasa, IconeSino } from "../icons"; //icone = vai buscar de dentro da pasta icons 
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
    return (
        <aside>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-20   
            `}>
                <Logo></Logo>
            </div>
            <ul>
                <MenuItem url="/" texto="Início" icone={IconeCasa}></MenuItem>
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes}></MenuItem>
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino}></MenuItem>
            </ul>
        </aside>
    )
}