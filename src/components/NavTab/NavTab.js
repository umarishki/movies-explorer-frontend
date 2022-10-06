import Navigation from '../Navigation/Navigation';
import './NavTab.css';
import { navigationListMenu } from '../../utils/utils';

function NavTab() {

    return (
        <section className="navtab">
            <Navigation
                navigationClass={null}
                navigationList={navigationListMenu}
                isRoute={false}
                targetType={"_self"}
                onClose={null}
            />
        </section>
    );
}

export default NavTab;