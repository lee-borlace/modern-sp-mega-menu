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
                className={`ms-Grid-col ms-lg12 ms-sm12 ms-bgColor-themeLighterAlt ${styles.container}`}
                onMouseEnter={this.props.handleMouseEnter}
                onMouseLeave={this.props.handleMouseLeave}
            >
                <div className="ms-Grid">
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-lg3 ms-sm12">
                            Showing flyout for {this.props.text} <br />
                            <strong>Heading 1</strong><br />
                            A<br />
                            B<br />
                            C<br />
                        </div>

                        <div className="ms-Grid-col ms-lg3 ms-sm12">
                            <strong>Heading 2</strong><br />
                            A<br />
                            B<br />
                            C<br />
                        </div>

                        <div className="ms-Grid-col ms-lg3 ms-sm12">
                            <strong>Heading 3</strong><br />
                            A<br />
                            B<br />
                            C<br />
                        </div>

                        <div className="ms-Grid-col ms-lg3 ms-sm12">
                            <strong>Heading 4</strong><br />
                            A<br />
                            B<br />
                            C<br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
