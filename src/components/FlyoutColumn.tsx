import * as React from 'react';

import styles from './FlyoutColumn.module.scss';
import { FlyoutColumnHeading } from './FlyoutColumnHeading';
import { MenuLink } from './MenuLink';

export interface IFlyoutColumnProps {
}

export interface IFlyoutColumnState {
}

export class FlyoutColumn extends React.Component<IFlyoutColumnProps, IFlyoutColumnState> {

    constructor(props) {
        super(props);
    }

    public render(): React.ReactElement<IFlyoutColumnProps> {

        return (
            <div className="ms-Grid-col ms-lg2 ms-sm12 ms-fontColor-neutralPrimary">
                <FlyoutColumnHeading
                    text="Google"
                    url="http://www.google.com.au"
                    openInNewTab={false}
                ></FlyoutColumnHeading>

                <MenuLink
                    text="Google"
                    url="http://www.google.com.au"
                    openInNewTab={false}
                ></MenuLink>

                <MenuLink
                    text="Microsoft"
                    url="http://www.google.com.au"
                    openInNewTab={false}
                ></MenuLink>

                <MenuLink
                    text="Azure"
                    url="http://www.google.com.au"
                    openInNewTab={false}
                ></MenuLink>

                <MenuLink
                    text="Amazon"
                    url="http://www.google.com.au"
                    openInNewTab={false}
                ></MenuLink>

            </div>
        );
    }
}
