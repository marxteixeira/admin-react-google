import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from "../icons"; //icone = vai buscar de dentro da pasta icons 
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
    return (
        <aside className="flex flex-col">
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-20   
            `}>
                <Logo></Logo>
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Início" icone={IconeCasa}></MenuItem>
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes}></MenuItem>
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino}></MenuItem>
            </ul>
            {/* //essa ul será o ícone de sair */}
            <ul >
                <MenuItem texto="Sair" icone={IconeSair}
                    onClick={() => console.log('logout')}
                    className={`
                        text-red-600  
                        hover:bg-red-400 hover:text-white
                    `}
                />
            </ul>
        </aside>
    )
}