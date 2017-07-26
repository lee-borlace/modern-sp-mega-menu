import * as React from 'react';
import { Link } from 'office-ui-fabric-react/lib/Link';

import styles from './FlyoutColumnHeading.module.scss';

export interface IFlyoutColumnHeadingProps {
    text: string;
    url?: string;
    openInNewTab?: boolean
}

export interface IFlyoutColumnHeadingState {
}

export class FlyoutColumnHeading extends React.Component<IFlyoutColumnHeadingProps, IFlyoutColumnHeadingState> {

    constructor(props) {
        super(props);
    }

    public render(): React.ReactElement<IFlyoutColumnHeadingProps> {

        // Heading has a link.
        if (this.props.url) {
            return (
                <Link
                    className={`${styles.headingLink} ms-fontWeight-semibold ms-fontSize-l`}
                    href={this.props.url}
                    target={this.props.openInNewTab ? "_blank" : ""}
                >
                    {this.props.text}
                </Link>
            );
        }
        // Heading is just text.
        else {
            return (
                <div
                    className={`${styles.headingNoLink} ms-fontWeight-semibold ms-fontSize-l`}
                >
                    {this.props.text}
                </div>
            );
        }
      
    }
}
