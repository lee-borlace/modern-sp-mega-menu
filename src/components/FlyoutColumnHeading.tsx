import * as React from 'react';
import { Link } from 'office-ui-fabric-react/lib/Link';

import styles from './FlyoutColumnHeading.module.scss';

import { TopLevelMenu as TopLevelMenuModel } from '../model/TopLevelMenu';
import { FlyoutColumn as FlyoutColumnModel } from '../model/FlyoutColumn';
import { Link as LinkModel } from '../model/Link';

export interface IFlyoutColumnHeadingProps {
    item:LinkModel;
}

export interface IFlyoutColumnHeadingState {
}

export class FlyoutColumnHeading extends React.Component<IFlyoutColumnHeadingProps, IFlyoutColumnHeadingState> {

    constructor(props) {
        super(props);
    }

    public render(): React.ReactElement<IFlyoutColumnHeadingProps> {

        // Heading has a link.
        if (this.props.item.url) {
            return (
                <Link
                    className={`${styles.headingLink} ms-fontWeight-semibold ms-fontSize-m-plus`}
                    href={this.props.item.url}
                    target={this.props.item.openInNewTab ? "_blank" : ""}
                >
                    {this.props.item.text}
                </Link>
            );
        }
        // Heading is just text.
        else {
            return (
                <div
                    className={`${styles.headingNoLink} ms-fontWeight-semibold ms-fontSize-l`}
                >
                    {this.props.item.text}
                </div>
            );
        }
      
    }
}
