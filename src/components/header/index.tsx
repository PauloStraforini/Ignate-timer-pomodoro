import { HeaderContainer } from "./styles";
import LogoIgnite from '../../assets/logo-ignite.svg' 
import { History, Timer } from "lucide-react";
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <img src={LogoIgnite} alt="" />
            <nav>
                <NavLink to="/" title="Timer">
                    <Timer size={24}/>
                </NavLink>
                <NavLink to="/history" title="Histórico">
                    <History size={24}/>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}