import * as React from 'react';
import { withResponsiveMode, ResponsiveMode } from 'office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode';

import styles from './FlyoutColumn.module.scss';
import { FlyoutColumnHeading } from './FlyoutColumnHeading';
import { MenuLink } from './MenuLink';

import { TopLevelMenu as TopLevelMenuModel } from '../model/TopLevelMenu';
import { FlyoutColumn as FlyoutColumnModel } from '../model/FlyoutColumn';
import { Link as LinkModel } from '../model/Link';

export interface IFlyoutColumnProps {
    header: LinkModel;
    links: LinkModel[];
    responsiveMode?: ResponsiveMode;
    widthPercent: number;
}

export interface IFlyoutColumnState {
    showLinksWhenMobile: boolean;
}

@withResponsiveMode
export class FlyoutColumn extends React.Component<IFlyoutColumnProps, IFlyoutColumnState> {

    constructor(props) {
        super(props);

        this.handleHeadingTouched = this.handleHeadingTouched.bind(this);

        this.state = {
            showLinksWhenMobile: false
        };
    }

    public render(): React.ReactElement<IFlyoutColumnProps> {

        var responsiveMode = this.props.responsiveMode;
        if (responsiveMode === undefined) {
            responsiveMode = ResponsiveMode.large;
        }
        var mobileMode = responsiveMode < ResponsiveMode.large;

        const links = !mobileMode || (mobileMode && this.state.showLinksWhenMobile) ? this.props.links.map((item: LinkModel) =>
            <MenuLink
                item={item}
                mobileMode={mobileMode}
            >
            </MenuLink>
        ) : null;

        return (
            <div
                className={`ms-Grid-col ms-sm12 ms-fontColor-neutralPrimary ${mobileMode ? "ms-slideDownIn10 ms-textAlignCenter" : ""}`}
                style={!mobileMode ? {
                    width: this.props.widthPercent + "%"
                } : {}}
            >
                <FlyoutColumnHeading
                    item={this.props.header}
                    mobileMode={mobileMode}
                    headingTouched={this.handleHeadingTouched}
                ></FlyoutColumnHeading>
                {links}
            </div>
        );
    }

    handleHeadingTouched() {
        this.setState((prevState, props) => {
            return {
                showLinksWhenMobile: !prevState.showLinksWhenMobile
            }
        });
    }



}
