import Navigation from '../Navigation/Navigation';
import './NavTab.css';

function NavTab() {
    
    const navigationList = [{
        content: 'О проекте',
        to: '#project',
        linkClass: 'navigation__link_type_underlined'
    },
    {
        content: 'Технологии',
        to: '#technologies',
        linkClass: 'navigation__link_type_underlined'
    },
    {
        content: 'Студент',
        to: '#student',
        linkClass: 'navigation__link_type_underlined'
    }];

    return (
        <section className="navtab">
            <Navigation navigationClass={ null } navigationList={ navigationList } isRoute={false} targetType={"_self"} onClose={null}/>
        </section>
    );
}

export default NavTab;