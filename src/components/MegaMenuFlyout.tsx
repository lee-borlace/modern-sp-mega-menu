import * as React from 'react';

import styles from './MegaMenuFlyout.module.scss';

import { FlyoutColumn } from './FlyoutColumn';

export interface IMegaMenuFlyoutProps {
    id: number;
    handleFocused: (id:number) => void;
    handleLostFocus: () => void;
}

export interface IMegaMenuFlyoutState {
}

export class MegaMenuFlyout extends React.Component<IMegaMenuFlyoutProps, IMegaMenuFlyoutState> {

    constructor(props) {
        super(props);
        this.handleFocused = this.handleFocused.bind(this);
    }

    public render(): React.ReactElement<IMegaMenuFlyoutProps> {

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

                        <FlyoutColumn></FlyoutColumn>
                        <FlyoutColumn></FlyoutColumn>
                        <FlyoutColumn></FlyoutColumn>
                        <FlyoutColumn></FlyoutColumn>

                        <div className="ms-Grid-col ms-lg2 ms-hiddenSm">
                        </div>
                    </div>
                </div>
            </div>
        );
    }

     handleFocused() {
        this.props.handleFocused(this.props.id);
    }

}
