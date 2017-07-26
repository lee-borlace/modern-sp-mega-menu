import * as React from 'react';
import { Layer, LayerHost } from 'office-ui-fabric-react/lib/Layer';

import { TopLevelMenu } from './TopLevelMenu';
import { Flyout } from './Flyout';

import styles from './MegaMenu.module.scss';

import { TopLevelMenu as TopLevelMenuModel } from '../model/TopLevelMenu';
import { FlyoutColumn as FlyoutColumnModel } from '../model/FlyoutColumn';
import { Link as LinkModel } from '../model/Link';

export interface IMegaMenuProps {
    topLevelMenuItems:TopLevelMenuModel[];
}

export interface IMegaMenuState {
    showFlyout: boolean;
    cursorInTopLevelMenu: boolean;
    cursorInFlyout: boolean;
    selectedTopLevelItem: TopLevelMenuModel;
}

export class MegaMenu extends React.Component<IMegaMenuProps, IMegaMenuState> {

    constructor(props) {
        super(props);

        this.state = { 
            showFlyout: false, 
            cursorInTopLevelMenu: false, 
            cursorInFlyout: false, 
            selectedTopLevelItem: null,
        };

        // These are needed to ensure "this" resolves in the functions.
        this.handleFocusedTopLevelMenu = this.handleFocusedTopLevelMenu.bind(this);
        this.handleLostFocusTopLevelMenu = this.handleLostFocusTopLevelMenu.bind(this);
        this.handleFocusedFlyout = this.handleFocusedFlyout.bind(this);
        this.handleLostFocusFlyout = this.handleLostFocusFlyout.bind(this);
    }


    public render(): React.ReactElement<IMegaMenuProps> {

        const topLevelItems = this.props.topLevelMenuItems.map((item:TopLevelMenuModel) => 
            <TopLevelMenu 
                key={item.id.toString()}
                topLevelMenu={item}
                handleFocused={this.handleFocusedTopLevelMenu} 
                handleLostFocus={this.handleLostFocusTopLevelMenu} 
                selectedTopLevelMenuId={this.state.selectedTopLevelItem ? this.state.selectedTopLevelItem.id : 0}>
            </TopLevelMenu>
        );

        return (
            <div>
                <div className={
                    `ms-Grid 
                    ms-bgColor-themePrimary`}>
                    <div className="ms-Grid-row">
                        
                        <div className="ms-Grid-col ms-lg2 ms-hiddenSm">
                        </div>

                        {topLevelItems}
                     
                        <div className="ms-Grid-col ms-lg2 ms-hiddenSm">
                        </div>

                    </div>
                </div>

                {this.state.showFlyout &&
                    <Flyout
                        handleFocused={this.handleFocusedFlyout}
                        handleLostFocus={this.handleLostFocusFlyout}
                        topLevelItem={this.state.selectedTopLevelItem}
                    >
                    </Flyout>
                }

            </div>
        );
    }


    handleFocusedTopLevelMenu(selectedTopLevelItem:TopLevelMenuModel) {
        this.setState((prevState, props) => ({
            showFlyout: prevState.showFlyout,
            cursorInTopLevelMenu: true,
            cursorInFlyout: prevState.cursorInFlyout,
            selectedTopLevelItem: selectedTopLevelItem
        }));

        this.checkFlyoutVisibility();
    }

    handleLostFocusTopLevelMenu() {
        this.setState((prevState, props) => ({
            showFlyout: prevState.showFlyout,
            cursorInTopLevelMenu: false,
            cursorInFlyout: prevState.cursorInFlyout,
            selectedTopLevelItem: prevState.selectedTopLevelItem
        }));

        this.checkFlyoutVisibility();
    }

    handleFocusedFlyout(selectedTopLevelItem:TopLevelMenuModel) {
        this.setState((prevState, props) => ({
            showFlyout: prevState.showFlyout,
            cursorInTopLevelMenu: prevState.cursorInTopLevelMenu,
            cursorInFlyout: true,
            selectedTopLevelItem: selectedTopLevelItem
        }));

        this.checkFlyoutVisibility();
    }

    handleLostFocusFlyout() {
        this.setState((prevState, props) => ({
            showFlyout: prevState.showFlyout,
            cursorInTopLevelMenu: prevState.cursorInTopLevelMenu,
            cursorInFlyout: false,
            selectedTopLevelItem: prevState.selectedTopLevelItem
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
                selectedTopLevelItem: showFlyout ? prevState.selectedTopLevelItem : null
        }});
    }



}
