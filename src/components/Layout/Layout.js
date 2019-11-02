import React from 'react';
import './Layout.css';
import { DoNothing } from '../../hoc/DoNothing';

const layout = (props) => {
    return(
        <DoNothing>
            <div>Toolbar, sideDrawer, Backdrop</div>
            <main className={'Content'}>
                {props.children}
            </main>
        </DoNothing>
    );
};
export default layout;