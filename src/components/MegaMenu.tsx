import * as React from 'react';
import { Layer, LayerHost } from 'office-ui-fabric-react/lib/Layer';

import { MegaMenuTopLevel } from './MegaMenuTopLevel';
import { MegaMenuFlyout } from './MegaMenuFlyout';

import styles from './MegaMenu.module.scss';


export interface IMegaMenuProps {
}

export interface IMegaMenuState {
    showFlyout: boolean;
    cursorInTopLevelMenu: boolean;
    cursorInFlyout: boolean;
    selectedTopLevelMenuId: number;
}

export class MegaMenu extends React.Component<IMegaMenuProps, IMegaMenuState> {

    constructor(props) {
        super(props);

        this.state = { 
            showFlyout: false, 
            cursorInTopLevelMenu: false, 
            cursorInFlyout: false, 
            selectedTopLevelMenuId: 0,
        };

        // These are needed to ensure "this" resolves in the functions.
        this.handleFocusedTopLevelMenu = this.handleFocusedTopLevelMenu.bind(this);
        this.handleLostFocusTopLevelMenu = this.handleLostFocusTopLevelMenu.bind(this);
        this.handleFocusedFlyout = this.handleFocusedFlyout.bind(this);
        this.handleLostFocusFlyout = this.handleLostFocusFlyout.bind(this);
    }


    public render(): React.ReactElement<IMegaMenuProps> {

        return (
            <div>
                <div className={
                    `ms-Grid 
                    ms-bgColor-themePrimary 
                    ms-fontColor-themeLighterAlt`}>
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-lg2 ms-hiddenSm">
                        </div>

                        <MegaMenuTopLevel text="Departments" id={1} handleFocused={this.handleFocusedTopLevelMenu} handleLostFocus={this.handleLostFocusTopLevelMenu} selectedTopLevelMenuId={this.state.selectedTopLevelMenuId}></MegaMenuTopLevel>
                        <MegaMenuTopLevel text="People" id={2} handleFocused={this.handleFocusedTopLevelMenu} handleLostFocus={this.handleLostFocusTopLevelMenu} selectedTopLevelMenuId={this.state.selectedTopLevelMenuId}></MegaMenuTopLevel>
                        <MegaMenuTopLevel text="Projects" id={3} handleFocused={this.handleFocusedTopLevelMenu} handleLostFocus={this.handleLostFocusTopLevelMenu} selectedTopLevelMenuId={this.state.selectedTopLevelMenuId}></MegaMenuTopLevel>
                        <MegaMenuTopLevel text="Help" id={4} handleFocused={this.handleFocusedTopLevelMenu} handleLostFocus={this.handleLostFocusTopLevelMenu} selectedTopLevelMenuId={this.state.selectedTopLevelMenuId}></MegaMenuTopLevel>

                        <div className="ms-Grid-col ms-lg2 ms-hiddenSm">
                        </div>

                    </div>
                </div>

                {this.state.showFlyout &&
                    <MegaMenuFlyout
                        handleFocused={this.handleFocusedFlyout}
                        handleLostFocus={this.handleLostFocusFlyout}
                        id={this.state.selectedTopLevelMenuId}
                    >
                    </MegaMenuFlyout>
                }

            </div>
        );
    }


    handleFocusedTopLevelMenu(id:number) {
        this.setState((prevState, props) => ({
            showFlyout: prevState.showFlyout,
            cursorInTopLevelMenu: true,
            cursorInFlyout: prevState.cursorInFlyout,
            selectedTopLevelMenuId: id
        }));

        this.checkFlyoutVisibility();
    }

    handleLostFocusTopLevelMenu() {
        this.setState((prevState, props) => ({
            showFlyout: prevState.showFlyout,
            cursorInTopLevelMenu: false,
            cursorInFlyout: prevState.cursorInFlyout,
            selectedTopLevelMenuId: prevState.selectedTopLevelMenuId
        }));

        this.checkFlyoutVisibility();
    }

    handleFocusedFlyout(id:number) {
        this.setState((prevState, props) => ({
            showFlyout: prevState.showFlyout,
            cursorInTopLevelMenu: prevState.cursorInTopLevelMenu,
            cursorInFlyout: true,
            selectedTopLevelMenuId: id
        }));

        this.checkFlyoutVisibility();
    }

    handleLostFocusFlyout() {
        this.setState((prevState, props) => ({
            showFlyout: prevState.showFlyout,
            cursorInTopLevelMenu: prevState.cursorInTopLevelMenu,
            cursorInFlyout: false,
            selectedTopLevelMenuId: prevState.selectedTopLevelMenuId
        }));

        this.checkFlyoutVisibility();
    }

    // Set visibility of flyout menu. Only visible if mouse is in a top-level menu or in the flyout itself.
    checkFlyoutVisibility() {
        this.setState((prevState, props) => {

            var showFlyout = prevState.cursorInTopLevelMenu || prevState.cursorInFlyout; 

            return {
                showFlyout: showFlyout,
                cursorInTopLevelMenu: prevState.cursorInTopLevelMenu,
                cursorInFlyout: prevState.cursorInFlyout,
                selectedTopLevelMenuId: showFlyout ? prevState.selectedTopLevelMenuId : 0
        }});
    }



}
