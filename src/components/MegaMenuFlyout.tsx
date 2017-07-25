import * as React from 'react';

import styles from './MegaMenuFlyout.module.scss';

export interface IMegaMenuFlyoutProps {
    text: string;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
}

export interface IMegaMenuFlyoutState {
}

export class MegaMenuFlyout extends React.Component<IMegaMenuFlyoutProps, IMegaMenuFlyoutState> {

    constructor(props) {
        super(props);
    }

    public render(): React.ReactElement<IMegaMenuFlyoutProps> {

        return (
            <div
                className={`ms-Grid-col ms-lg12 ms-bgColor-themeLighterAlt ${styles.container}`}
                onMouseEnter={this.props.handleMouseEnter}
                onMouseLeave={this.props.handleMouseLeave}
            >
                This is the flyout!<br /><br /><br /><br />
                {this.props.text}
            </div>
        );
    }

}
