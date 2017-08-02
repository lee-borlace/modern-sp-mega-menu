import * as React from 'react';
import { Layer, LayerHost } from 'office-ui-fabric-react/lib/Layer';
import { withResponsiveMode, ResponsiveMode } from 'office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode';

import { TopLevelMenu } from './TopLevelMenu';
import { Flyout } from './Flyout';
import { MobileMenu } from './MobileMenu';

import styles from './MegaMenu.module.scss';

import { TopLevelMenu as TopLevelMenuModel } from '../model/TopLevelMenu';
import { FlyoutColumn as FlyoutColumnModel } from '../model/FlyoutColumn';
import { Link as LinkModel } from '../model/Link';

export interface IMegaMenuProps {
    topLevelMenuItems: TopLevelMenuModel[];
    responsiveMode?: ResponsiveMode;
}

export interface IMegaMenuState {
    showFlyout: boolean;
    cursorInTopLevelMenu: boolean;
    cursorInFlyout: boolean;
    selectedTopLevelItem: TopLevelMenuModel;
    showTopLevelMenuItemsWhenMobile: boolean; //For mobile mode only, this determines whether or not to show top level menu items.
}

@withResponsiveMode
export class MegaMenu extends React.Component<IMegaMenuProps, IMegaMenuState> {

    constructor(props) {
        super(props);

        this.state = {
            showFlyout: false,
            cursorInTopLevelMenu: false,
            cursorInFlyout: false,
            selectedTopLevelItem: null,
            showTopLevelMenuItemsWhenMobile: false
        };

        // These are needed to ensure "this" resolves in the functions.
        this.handleFocusedTopLevelMenu = this.handleFocusedTopLevelMenu.bind(this);
        this.handleLostFocusTopLevelMenu = this.handleLostFocusTopLevelMenu.bind(this);
        this.handleFocusedFlyout = this.handleFocusedFlyout.bind(this);
        this.handleLostFocusFlyout = this.handleLostFocusFlyout.bind(this);
        this.handleMobileMenuTouched = this.handleMobileMenuTouched.bind(this);
    }


    public render(): React.ReactElement<IMegaMenuProps> {

        var responsiveMode = this.props.responsiveMode;
        if (responsiveMode === undefined) {
            responsiveMode = ResponsiveMode.large;
        }

        var mobileMode = responsiveMode < ResponsiveMode.large;

        const topLevelItems = this.props.topLevelMenuItems.map((item: TopLevelMenuModel) =>
            <TopLevelMenu
                key={item.id.toString()}
                topLevelMenu={item}
                handleFocused={this.handleFocusedTopLevelMenu}
                handleTouched={this.handleFocusedTopLevelMenu}
                handleLostFocus={this.handleLostFocusTopLevelMenu}
                selectedTopLevelMenuId={this.state.selectedTopLevelItem ? this.state.selectedTopLevelItem.id : 0}
                widthPercent={100 / this.props.topLevelMenuItems.length}>
            </TopLevelMenu>
        );

        return (
            <div>

                {mobileMode && (
                    <MobileMenu
                        handleTouched={this.handleMobileMenuTouched}
                    ></MobileMenu>
                )}

                {(!mobileMode || (mobileMode && this.state.showTopLevelMenuItemsWhenMobile)) && (
                    <div className={
                        `ms-Grid 
                         ms-bgColor-themeSecondary 
                         ms-slideDownIn10
                         ${mobileMode ? "ms-slideDownIn10" : ""}
                    `}>
                        <div className="ms-Grid-row">

                            {topLevelItems}

                        </div>
                    </div>
                )}

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



    handleFocusedTopLevelMenu(selectedTopLevelItem: TopLevelMenuModel) {
        
        this.setState((prevState, props) => ({
            showFlyout: prevState.showFlyout,
            cursorInTopLevelMenu: true,
            cursorInFlyout: prevState.cursorInFlyout,
            selectedTopLevelItem: selectedTopLevelItem,
            showTopLevelMenuItemsWhenMobile: prevState.showTopLevelMenuItemsWhenMobile,
        }));

        this.checkFlyoutVisibility();
    }

    handleLostFocusTopLevelMenu() {
        this.setState((prevState, props) => ({
            showFlyout: prevState.showFlyout,
            cursorInTopLevelMenu: false,
            cursorInFlyout: prevState.cursorInFlyout,
            selectedTopLevelItem: prevState.selectedTopLevelItem,
            showTopLevelMenuItemsWhenMobile: prevState.showTopLevelMenuItemsWhenMobile,
        }));

        this.checkFlyoutVisibility();
    }

    handleFocusedFlyout(selectedTopLevelItem: TopLevelMenuModel) {
        this.setState((prevState, props) => ({
            showFlyout: prevState.showFlyout,
            cursorInTopLevelMenu: prevState.cursorInTopLevelMenu,
            cursorInFlyout: true,
            selectedTopLevelItem: selectedTopLevelItem,
            showTopLevelMenuItemsWhenMobile: prevState.showTopLevelMenuItemsWhenMobile,
        }));

        this.checkFlyoutVisibility();
    }

    handleLostFocusFlyout() {
        this.setState((prevState, props) => ({
            showFlyout: prevState.showFlyout,
            cursorInTopLevelMenu: prevState.cursorInTopLevelMenu,
            cursorInFlyout: false,
            selectedTopLevelItem: prevState.selectedTopLevelItem,
            showTopLevelMenuItemsWhenMobile: prevState.showTopLevelMenuItemsWhenMobile,
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
                selectedTopLevelItem: showFlyout ? prevState.selectedTopLevelItem : null,
                showTopLevelMenuItemsWhenMobile: prevState.showTopLevelMenuItemsWhenMobile,
            }
        });
    }

    handleMobileMenuTouched() {
        this.setState((prevState, props) => {

            console.log("toggle");

            var showTopLevelMenuItemsWhenMobile = !prevState.showTopLevelMenuItemsWhenMobile;

            var showFlyout = prevState.showFlyout && showTopLevelMenuItemsWhenMobile;

            return {
                showFlyout: showFlyout,
                cursorInTopLevelMenu: prevState.cursorInTopLevelMenu,
                cursorInFlyout: prevState.cursorInFlyout,
                selectedTopLevelItem: prevState.selectedTopLevelItem,
                showTopLevelMenuItemsWhenMobile: showTopLevelMenuItemsWhenMobile
            }
        });
    }



}
