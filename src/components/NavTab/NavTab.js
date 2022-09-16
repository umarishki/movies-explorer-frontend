import Navigation from '../Navigation/Navigation';
import './NavTab.css';

function NavTab() {
    
    const navigationList = [{
        content: 'О проекте',
        to: '/sign-up',
        linkClass: 'navigation__link_type_underlined'
    },
    {
        content: 'Технологии',
        to: '/sign-in',
        linkClass: 'navigation__link_type_underlined'
    },
    {
        content: 'Студент',
        to: '/sign-in',
        linkClass: 'navigation__link_type_underlined'
    }];

    return (
        <section className="navtab">
            <Navigation navigationClass={ null } navigationList={ navigationList } />
        </section>
    );
}

export default NavTab;