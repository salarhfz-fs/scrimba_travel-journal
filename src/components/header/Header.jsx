import world from '../../assets/world.svg';

import './Header.css'

export default function Header() {
    return (
        <header>
            <img alt='world map' src={world} />
            <span>My Travel Journal</span>
        </header>
    )
}