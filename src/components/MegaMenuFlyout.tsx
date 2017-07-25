import * as React from 'react';

import styles from './MegaMenuFlyout.module.scss';

export interface IMegaMenuFlyoutProps {
}

export interface IMegaMenuFlyoutState {
}

export class MegaMenuFlyout extends React.Component<IMegaMenuFlyoutProps, IMegaMenuFlyoutState> {

    public render(): React.ReactElement<IMegaMenuFlyoutProps> {
        return (
            <div className={
                `ms-Grid-col 
                ms-lg12
                ms-bgColor-themeLighterAlt`}>
                This is the flyout!<br /><br /><br /><br />
                Blah!
            </div>
        );
    }

}
