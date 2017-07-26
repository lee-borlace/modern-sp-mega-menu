import * as React from 'react';

import styles from './Flyout.module.scss';

import { FlyoutColumn } from './FlyoutColumn';

export interface IFlyoutProps {
    id: number;
    handleFocused: (id:number) => void;
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
