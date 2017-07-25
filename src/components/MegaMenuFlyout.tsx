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
                className={`ms-Grid-col ms-lg12 ms-sm12 ms-bgColor-themeLighterAlt ms-slideDownIn10 ${styles.container}`}
                onMouseEnter={this.props.handleMouseEnter}
                onMouseLeave={this.props.handleMouseLeave}
            >
                <div className="ms-Grid">
                    <div className="ms-Grid-row">

                        <div className="ms-Grid-col ms-lg2 ms-hiddenSm">
                        </div>

                        <div className="ms-Grid-col ms-lg2 ms-sm12 ms-fontSize-mp">
                            <div className={`${styles.heading} ms-fontWeight-semibold`}>{this.props.text}</div>
                            <div className={`${styles.item}`}>Lorem ipsum dolor</div>
                            <div className={`${styles.item}`}>sit amet consectetur</div>
                            <div className={`${styles.item}`}>adipiscing elit</div>
                            <div className={`${styles.item}`}>Fusce tincidunt</div>
                        </div>

                        <div className="ms-Grid-col ms-lg2 ms-sm12 ms-fontSize-mp">
                            <div className={`${styles.heading} ms-fontWeight-semibold`}>{this.props.text}</div>
                            <div className={`${styles.item}`}>Lorem ipsum dolor</div>
                            <div className={`${styles.item}`}>sit amet consectetur</div>
                            <div className={`${styles.item}`}>adipiscing elit</div>
                            <div className={`${styles.item}`}>Fusce tincidunt</div>
                        </div>

                        <div className="ms-Grid-col ms-lg2 ms-sm12 ms-fontSize-mp">
                            <div className={`${styles.heading} ms-fontWeight-semibold`}>{this.props.text}</div>
                            <div className={`${styles.item}`}>Lorem ipsum dolor</div>
                            <div className={`${styles.item}`}>sit amet consectetur</div>
                            <div className={`${styles.item}`}>adipiscing elit</div>
                            <div className={`${styles.item}`}>Fusce tincidunt</div>
                        </div>

                        <div className="ms-Grid-col ms-lg2 ms-sm12 ms-fontSize-mp">
                            <div className={`${styles.heading} ms-fontWeight-semibold`}>{this.props.text}</div>
                            <div className={`${styles.item}`}>Lorem ipsum dolor</div>
                            <div className={`${styles.item}`}>sit amet consectetur</div>
                            <div className={`${styles.item}`}>adipiscing elit</div>
                            <div className={`${styles.item}`}>Fusce tincidunt</div>
                        </div>


                        <div className="ms-Grid-col ms-lg2 ms-hiddenSm">
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
