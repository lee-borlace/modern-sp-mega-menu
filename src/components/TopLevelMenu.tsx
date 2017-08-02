import * as React from 'react';
import { withResponsiveMode, ResponsiveMode } from 'office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode';

import styles from './TopLevelMenu.module.scss';

import { TopLevelMenu as TopLevelMenuModel } from '../model/TopLevelMenu';
import { FlyoutColumn as FlyoutColumnModel } from '../model/FlyoutColumn';
import { Link as LinkModel } from '../model/Link';

export interface ITopLevelMenuProps {
    topLevelMenu: TopLevelMenuModel;
    handleFocused: (topLevelMenu: TopLevelMenuModel) => void;
    handleTouched: (topLevelMenu: TopLevelMenuModel) => void;
    handleLostFocus: () => void;
    selectedTopLevelMenuId: number;
    responsiveMode?: ResponsiveMode;
    widthPercent: number;
}

export interface ITopLevelMenuState {
}

@withResponsiveMode
export class TopLevelMenu extends React.Component<ITopLevelMenuProps, ITopLevelMenuState> {


    constructor(props) {
        super(props);

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleTouched = this.handleTouched.bind(this);
    }

    public render(): React.ReactElement<ITopLevelMenuProps> {

        var responsiveMode = this.props.responsiveMode;
        if (responsiveMode === undefined) {
            responsiveMode = ResponsiveMode.large;
        }
        var mobileMode = responsiveMode < ResponsiveMode.large;

        return (
            <div
                className={`
                ms-Grid-col
                ${this.props.selectedTopLevelMenuId == this.props.topLevelMenu.id ? "ms-bgColor-themeLighterAlt" : "ms-bgColor-themeSecondary"}
                ${mobileMode ? "ms-sm12" : ""}
                ms-textAlignCenter
                ms-fontSize-l
                ${this.props.selectedTopLevelMenuId == this.props.topLevelMenu.id ? "ms-fontColor-neutralPrimary" : "ms-fontColor-neutralPrimaryAlt"}
                ${styles.container}
                `}

                style={!mobileMode ? {
                    width: this.props.widthPercent + "%"
                } : {}}

                onMouseEnter={this.handleMouseEnter}
                onClick={this.handleTouched}
                onMouseLeave={this.handleMouseLeave}
            >
                {this.props.topLevelMenu.text}
            </div>
        );
    }

    handleMouseEnter() {

        var responsiveMode = this.props.responsiveMode;
        if (responsiveMode === undefined) {
            responsiveMode = ResponsiveMode.large;
        }
        var mobileMode = responsiveMode < ResponsiveMode.large;

        // Only respond to on mouse enter if we're not in mobile mode.
        if (!mobileMode) {
            this.props.handleFocused(this.props.topLevelMenu);
        }
    }


    handleTouched() {
        this.props.handleTouched(this.props.topLevelMenu);
    }


    handleMouseLeave() {

        var responsiveMode = this.props.responsiveMode;
        if (responsiveMode === undefined) {
            responsiveMode = ResponsiveMode.large;
        }
        var mobileMode = responsiveMode < ResponsiveMode.large;

        // Only handle mouse leave if not in mobile mode.
        if (!mobileMode) {
            this.props.handleLostFocus();
        }
    }


}
