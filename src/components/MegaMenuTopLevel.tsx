import * as React from 'react';

import styles from './MegaMenuTopLevel.module.scss';

export interface IMegaMenuTopLevelProps {
    id: number;
    text: string;
    handleFocused: (id: number) => void;
    handleLostFocus: () => void;
    selectedTopLevelMenuId: number;
}

export interface IMegaMenuTopLevelState {
}

export class MegaMenuTopLevel extends React.Component<IMegaMenuTopLevelProps, IMegaMenuTopLevelState> {


    constructor(props) {
        super(props);

        this.handleFocused = this.handleFocused.bind(this);
    }

    public render(): React.ReactElement<IMegaMenuTopLevelProps> {

        return (
            <div
                className={`
                ms-Grid-col 
                ${this.props.selectedTopLevelMenuId == this.props.id ? "ms-bgColor-themeSecondary" : "ms-bgColor-themePrimary"}
                ms-lg2 
                ms-sm12 
                ms-textAlignCenter
                ms-fontSize-l
                ${styles.container}
                `}

                onMouseEnter={this.handleFocused}
                onClick={this.handleFocused}
                onTouchStart={this.handleFocused}
                onMouseLeave={this.props.handleLostFocus}
            >
                {this.props.text}
            </div>
        );
    }

    handleFocused() {
        this.props.handleFocused(this.props.id);
    }

}
