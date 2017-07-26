import * as React from 'react';

import styles from './FlyoutColumn.module.scss';
import { FlyoutColumnHeading } from './FlyoutColumnHeading';
import { MenuLink } from './MenuLink';

import { TopLevelMenu as TopLevelMenuModel } from '../model/TopLevelMenu';
import { FlyoutColumn as FlyoutColumnModel } from '../model/FlyoutColumn';
import { Link as LinkModel } from '../model/Link';

export interface IFlyoutColumnProps {
    header:LinkModel;
    links:LinkModel[];
}

export interface IFlyoutColumnState {
}

export class FlyoutColumn extends React.Component<IFlyoutColumnProps, IFlyoutColumnState> {

    constructor(props) {
        super(props);
    }

    public render(): React.ReactElement<IFlyoutColumnProps> {

         const links = this.props.links.map((item:LinkModel) => 
            <MenuLink
                item={item}
            >
            </MenuLink>
        );

        return (
            <div className="ms-Grid-col ms-lg2 ms-sm12 ms-fontColor-neutralPrimary">
                <FlyoutColumnHeading
                    item={this.props.header}
                ></FlyoutColumnHeading>

                {links}
               
            </div>
        );
    }
}
