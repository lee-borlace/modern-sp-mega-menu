import * as React from 'react';

import styles from './FlyoutColumn.module.scss';
import { FlyoutColumnHeading } from './FlyoutColumnHeading';
import { FlyoutColumnLink } from './FlyoutColumnLink';

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
            <div className="ms-Grid-col ms-lg2 ms-sm12 ms-fontSize-mp">
                <FlyoutColumnHeading
                    text="Google"
                    url="http://www.google.com.au"
                    openInNewTab={false}
                ></FlyoutColumnHeading>

                <FlyoutColumnLink
                    text="Google"
                    url="http://www.google.com.au"
                    openInNewTab={false}
                ></FlyoutColumnLink>

                <FlyoutColumnLink
                    text="Microsoft"
                    url="http://www.google.com.au"
                    openInNewTab={false}
                ></FlyoutColumnLink>

                <FlyoutColumnLink
                    text="Azure"
                    url="http://www.google.com.au"
                    openInNewTab={false}
                ></FlyoutColumnLink>

                <FlyoutColumnLink
                    text="Amazon"
                    url="http://www.google.com.au"
                    openInNewTab={false}
                ></FlyoutColumnLink>

            </div>
        );
    }
}
