import * as React from 'react';
import { Link } from 'office-ui-fabric-react/lib/Link';

import styles from './FlyoutColumnLink.module.scss';

export interface IFlyoutColumnLinkProps {
    text: string;
    url: string;
    openInNewTab: boolean
}

export interface IFlyoutColumnLinkState {
}

export class FlyoutColumnLink extends React.Component<IFlyoutColumnLinkProps, IFlyoutColumnLinkState> {

    constructor(props) {
        super(props);
    }

    public render(): React.ReactElement<IFlyoutColumnLinkProps> {

       return (
            <Link  
                className={`${styles.link} ms-fontWeight-semibold`}
                href={this.props.url}
                target={this.props.openInNewTab ? "_blank" : ""}
            >
                {this.props.text}
            </Link>
            );
    }
}
