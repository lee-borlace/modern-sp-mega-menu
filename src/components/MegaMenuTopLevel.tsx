import * as React from 'react';

import styles from './MegaMenuTopLevel.module.scss';

export interface IMegaMenuTopLevelProps {
    text: string;
    handleMouseEnter: (text: string) => void;
    handleMouseLeave: () => void;
}

export interface IMegaMenuTopLevelState {
}

export class MegaMenuTopLevel extends React.Component<IMegaMenuTopLevelProps, IMegaMenuTopLevelState> {


    constructor(props) {
        super(props);

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
    }

    public render(): React.ReactElement<IMegaMenuTopLevelProps> {

        return (
            <div
                className={`
                ms-Grid-col 
                ms-bgColor-themeSecondary--hover
                ms-lg3 
                ms-sm12 
                ms-textAlignCenter
                ${styles.container}
                `}

                onMouseEnter={this.handleMouseEnter}
                onClick={this.handleMouseEnter}
                onTouchStart={this.handleMouseEnter}
                onMouseLeave={this.props.handleMouseLeave}
            >
                {this.props.text}
            </div>
        );
    }

    handleMouseEnter() {
        this.props.handleMouseEnter(this.props.text);
    }

}
