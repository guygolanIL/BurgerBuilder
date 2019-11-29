import React from 'react';
import './Layout.css';
import { DoNothing } from '../../hoc/DoNothing';
import Toolbar from "./../Navigation/Toolbar/Toolbar";
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => {
    return(
        <DoNothing>
            <SideDrawer/>
            <Toolbar/>
            <main className={'Content'}>
                {props.children}
            </main>
        </DoNothing>
    );
};
export default layout;