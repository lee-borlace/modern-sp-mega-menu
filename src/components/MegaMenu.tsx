import * as React from 'react';

import { MegaMenuTopLevel } from './MegaMenuTopLevel';
import { MegaMenuFlyout } from './MegaMenuFlyout';

import styles from './MegaMenu.module.scss';


export interface IMegaMenuProps {
}

export interface IMegaMenuState {
}

export class MegaMenu extends React.Component<IMegaMenuProps, IMegaMenuState> {

    public render(): React.ReactElement<IMegaMenuProps> {
        return (
            <div>
                <div className={
                    `ms-Grid 
                    ms-bgColor-themePrimary 
                    ms-fontColor-themeLighterAlt 
                    ms-fontSize-m 
                    ms-fadeIn100`}>
                    <div className="ms-Grid-row">
                        <MegaMenuTopLevel text="Departments"></MegaMenuTopLevel>
                        <MegaMenuTopLevel text="People"></MegaMenuTopLevel>
                        <MegaMenuTopLevel text="Projects"></MegaMenuTopLevel>
                        <MegaMenuTopLevel text="Help"></MegaMenuTopLevel>
                    </div>
                </div>
                <MegaMenuFlyout></MegaMenuFlyout>
            </div>
        );
    }

}
