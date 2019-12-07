import React from "react";
import "./Modal.css";
import { DoNothing } from "../../../hoc/DoNothing/DoNothing";
import { Backdrop } from "../Backdrop/Backdrop";

export class Modal extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate() {
        console.log("modal will update");
    }

    render() {
        return (
            <DoNothing>
                <div
                    style={{
                        transform: this.props.show
                            ? "translateY(0)"
                            : "translateY(-100vh)",
                        opacity: this.props.show ? "1" : "0"
                    }}
                    className={"Modal"}
                >
                    {this.props.children}
                </div>
                <Backdrop
                    clicked={this.props.modalClose}
                    show={this.props.show}
                />
            </DoNothing>
        );
    }
}
