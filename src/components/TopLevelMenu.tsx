import * as React from 'react';

import styles from './TopLevelMenu.module.scss';

import { TopLevelMenu as TopLevelMenuModel } from '../model/TopLevelMenu';
import { FlyoutColumn as FlyoutColumnModel } from '../model/FlyoutColumn';
import { Link as LinkModel } from '../model/Link';

export interface ITopLevelMenuProps {
    topLevelMenu: TopLevelMenuModel;
    handleFocused: (topLevelMenu: TopLevelMenuModel) => void;
    handleLostFocus: () => void;
    selectedTopLevelMenuId: number;
}

export interface ITopLevelMenuState {
}

export class TopLevelMenu extends React.Component<ITopLevelMenuProps, ITopLevelMenuState> {


    constructor(props) {
        super(props);

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
    }

    public render(): React.ReactElement<ITopLevelMenuProps> {

        return (
            <div
                className={`
                ms-Grid-col 
                ${this.props.selectedTopLevelMenuId == this.props.topLevelMenu.id ? "ms-bgColor-themeSecondary" : "ms-bgColor-themePrimary"}
                ms-lg2 
                ms-sm12 
                ms-textAlignCenter
                ms-fontSize-l
                 ms-fontColor-themeLighterAlt
                ${styles.container}
                `}

                onMouseEnter={this.handleMouseEnter}
                onClick={this.handleMouseEnter}
                onTouchStart={this.handleMouseEnter}
                onMouseLeave={this.props.handleLostFocus}
            >
                {this.props.topLevelMenu.text}
            </div>
        );
    }

    handleMouseEnter() {
        this.props.handleFocused(this.props.topLevelMenu);
    }

}
