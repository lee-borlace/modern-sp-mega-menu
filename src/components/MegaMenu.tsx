import * as React from 'react';

import styles from './MegaMenu.module.scss';

export interface IMegaMenuProps {
}

export interface IMegaMenuState {
}

export class MegaMenu extends React.Component<IMegaMenuProps, IMegaMenuState> {

    public render(): React.ReactElement<IMegaMenuProps> {
        return (
            <div className={`ms-Grid ms-bgColor-themePrimary ms-fontColor-themeLighterAlt ms-fontSize-l ms-fadeIn100 ${styles.container}`}>
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-lg3 ms-sm12 ms-textAlignCenter">Departments</div>
                    <div className="ms-Grid-col ms-lg3 ms-sm12 ms-textAlignCenter">Projects</div>
                    <div className="ms-Grid-col ms-lg3 ms-sm12 ms-textAlignCenter">Resources</div>
                    <div className="ms-Grid-col ms-lg3 ms-sm12 ms-textAlignCenter">About</div>
                </div>
            </div>
        );
    }

}
