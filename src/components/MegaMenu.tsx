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
    megaMenuState: string;
}

export class MegaMenu extends React.Component<IMegaMenuProps, IMegaMenuState> {

    constructor(props) {
        super(props);

        this.state = { showFlyout: false, cursorInTopLevelMenu: false, cursorInFlyout: false, megaMenuState:"" };

        this.handleMouseEnterTopLevelMenu = this.handleMouseEnterTopLevelMenu.bind(this);
        this.handleMouseLeaveTopLevelMenu = this.handleMouseLeaveTopLevelMenu.bind(this);
        this.handleMouseEnterFlyout = this.handleMouseEnterFlyout.bind(this);
        this.handleMouseLeaveFlyout = this.handleMouseLeaveFlyout.bind(this);
    }


    public render(): React.ReactElement<IMegaMenuProps> {

        return (
            <div>
                <div className={
                    `ms-Grid 
                    ms-bgColor-themePrimary 
                    ms-fontColor-themeLighterAlt 
                    ms-fontSize-m`}>
                    <div className="ms-Grid-row">
                        <MegaMenuTopLevel text="Departments" handleMouseEnter={this.handleMouseEnterTopLevelMenu} handleMouseLeave={this.handleMouseLeaveTopLevelMenu}></MegaMenuTopLevel>
                        <MegaMenuTopLevel text="People" handleMouseEnter={this.handleMouseEnterTopLevelMenu} handleMouseLeave={this.handleMouseLeaveTopLevelMenu}></MegaMenuTopLevel>
                        <MegaMenuTopLevel text="Projects" handleMouseEnter={this.handleMouseEnterTopLevelMenu} handleMouseLeave={this.handleMouseLeaveTopLevelMenu}></MegaMenuTopLevel>
                        <MegaMenuTopLevel text="Help" handleMouseEnter={this.handleMouseEnterTopLevelMenu} handleMouseLeave={this.handleMouseLeaveTopLevelMenu}></MegaMenuTopLevel>
                    </div>
                </div>

                {this.state.showFlyout &&
                    <MegaMenuFlyout
                        handleMouseEnter={this.handleMouseEnterFlyout}
                        handleMouseLeave={this.handleMouseLeaveFlyout}
                        text={this.state.megaMenuState}
                    >
                    </MegaMenuFlyout>
                }

            </div>
        );
    }


    handleMouseEnterTopLevelMenu(text:string) {
        this.setState((prevState, props) => ({
            showFlyout: prevState.showFlyout,
            cursorInTopLevelMenu: true,
            cursorInFlyout: prevState.cursorInFlyout,
            megaMenuState: text
        }));

        this.checkFlyoutVisibility();
    }

    handleMouseLeaveTopLevelMenu() {
        this.setState((prevState, props) => ({
            showFlyout: prevState.showFlyout,
            cursorInTopLevelMenu: false,
            cursorInFlyout: prevState.cursorInFlyout,
            megaMenuState: prevState.megaMenuState
        }));

        this.checkFlyoutVisibility();
    }

    handleMouseEnterFlyout() {
        this.setState((prevState, props) => ({
            showFlyout: prevState.showFlyout,
            cursorInTopLevelMenu: prevState.cursorInTopLevelMenu,
            cursorInFlyout: true,
            megaMenuState: prevState.megaMenuState
        }));

        this.checkFlyoutVisibility();
    }

    handleMouseLeaveFlyout() {
        this.setState((prevState, props) => ({
            showFlyout: prevState.showFlyout,
            cursorInTopLevelMenu: prevState.cursorInTopLevelMenu,
            cursorInFlyout: false,
            megaMenuState: prevState.megaMenuState
        }));

        this.checkFlyoutVisibility();
    }


    checkFlyoutVisibility() {
        this.setState((prevState, props) => ({
            showFlyout: prevState.cursorInTopLevelMenu || prevState.cursorInFlyout,
            cursorInTopLevelMenu: prevState.cursorInTopLevelMenu,
            cursorInFlyout: prevState.cursorInFlyout,
            megaMenuState: prevState.megaMenuState
        }));
    }



}
