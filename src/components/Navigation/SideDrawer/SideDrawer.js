import React from "react";
import "./SideDrawer.css";
import { Backdrop } from "../../UI/Backdrop/Backdrop";
import { DoNothing } from "../../../hoc/DoNothing/DoNothing";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const SideDrawer = props => {

	let attachedClasses = ["SideDrawer", "Close"];

	if(props.open){
		attachedClasses = ["SideDrawer", "Open"];
	}

    return (
        <DoNothing>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(" ")}>
                <div className="SideDrawerLogo">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </DoNothing>
    );
};

export default SideDrawer;
