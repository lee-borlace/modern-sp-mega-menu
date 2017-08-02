import * as React from 'react';
import { Link } from 'office-ui-fabric-react/lib/Link';

import styles from './FlyoutColumnHeading.module.scss';

import { TopLevelMenu as TopLevelMenuModel } from '../model/TopLevelMenu';
import { FlyoutColumn as FlyoutColumnModel } from '../model/FlyoutColumn';
import { Link as LinkModel } from '../model/Link';

export interface IFlyoutColumnHeadingProps {
    item: LinkModel;
    mobileMode: boolean;
    headingTouched: () => void;
}

export interface IFlyoutColumnHeadingState {
}

export class FlyoutColumnHeading extends React.Component<IFlyoutColumnHeadingProps, IFlyoutColumnHeadingState> {

    constructor(props) {
        super(props);
    }

    public render(): React.ReactElement<IFlyoutColumnHeadingProps> {

        // Heading has a link, and we're not in mobile mode.
        if (this.props.item.url && !this.props.mobileMode) {
            return (
                <Link
                    className={`${styles.headingLink} ${!this.props.mobileMode ? "ms-fontWeight-semibold" : ""} ms-fontSize-m-plus`}
                    href={this.props.item.url}
                    target={this.props.item.openInNewTab ? "_blank" : ""}
                    onClick={this.props.headingTouched}
                >
                    {this.props.item.text}
                </Link>
            );
        }
        // Heading is just text, or we're in mobile mode. In mobile mode we render as just a heading so it can be clicked to expand
        // and view level 3 items instead of navigating to item. TODO : better approach which allows link to be navigated
        // and also to expand the sub-items.
        else {
            return (
                <div
                    className={`${styles.headingNoLink} ${!this.props.mobileMode ? "ms-fontWeight-semibold" : ""} ms-fontSize-m-plus`}
                    onClick={this.props.headingTouched}
                >
                    {this.props.item.text}
                </div>
            );
        }

    }


}
