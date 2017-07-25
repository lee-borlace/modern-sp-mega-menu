import * as React from 'react';

import styles from './MegaMenuTopLevel.module.scss';

export interface IMegaMenuTopLevelProps {
    text:string;
}

export interface IMegaMenuTopLevelState {
}

export class MegaMenuTopLevel extends React.Component<IMegaMenuTopLevelProps, IMegaMenuTopLevelState> {

    public render(): React.ReactElement<IMegaMenuTopLevelProps> {
        return (
            <div className={`
                ms-Grid-col 
                ms-bgColor-themeSecondary--hover
                ms-lg3 
                ms-sm12 
                ms-textAlignCenter
                ${styles.container}
                `}>
                {this.props.text}
            </div>
        );
    }

}
