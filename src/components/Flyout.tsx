import * as React from 'react';

import styles from './Flyout.module.scss';

import { FlyoutColumn } from './FlyoutColumn';

import { TopLevelMenu as TopLevelMenuModel } from '../model/TopLevelMenu';
import { FlyoutColumn as FlyoutColumnModel } from '../model/FlyoutColumn';
import { Link as LinkModel } from '../model/Link';

export interface IFlyoutProps {
    topLevelItem: TopLevelMenuModel;
    handleFocused: (topLevelItem:TopLevelMenuModel) => void;
    handleLostFocus: () => void;

}

export interface IFlyoutState {
}

export class Flyout extends React.Component<IFlyoutProps, IFlyoutState> {

    constructor(props) {
        super(props);
        this.handleFocused = this.handleFocused.bind(this);
    }

    public render(): React.ReactElement<IFlyoutProps> {

         const columns = this.props.topLevelItem.columns.map((column:FlyoutColumnModel) => 
            <FlyoutColumn
                header={column.heading}
                links={column.links}
            >
            </FlyoutColumn>
        );

        return (
            <div
                className={`ms-Grid-col ms-lg12 ms-sm12 ms-bgColor-themeLighterAlt ms-slideDownIn10 ${styles.container}`}
                onMouseEnter={this.handleFocused}
                onClick={this.handleFocused}
                onTouchStart={this.handleFocused}
                onMouseLeave={this.props.handleLostFocus}
            >
                <div className="ms-Grid">
                    <div className="ms-Grid-row">

                        <div className="ms-Grid-col ms-lg2 ms-hiddenSm">
                        </div>

                        {columns}

                        <div className="ms-Grid-col ms-lg2 ms-hiddenSm">
                        </div>
                    </div>
                </div>
            </div>
        );
    }

     handleFocused() {
        this.props.handleFocused(this.props.topLevelItem);
    }

}
