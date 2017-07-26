import * as React from 'react';

import styles from './TopLevelMenu.module.scss';

export interface ITopLevelMenuProps {
    id: number;
    text: string;
    handleFocused: (id: number) => void;
    handleLostFocus: () => void;
    selectedTopLevelMenuId: number;
}

export interface ITopLevelMenuState {
}

export class TopLevelMenu extends React.Component<ITopLevelMenuProps, ITopLevelMenuState> {


    constructor(props) {
        super(props);

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
    }

    public render(): React.ReactElement<ITopLevelMenuProps> {

        return (
            <div
                className={`
                ms-Grid-col 
                ${this.props.selectedTopLevelMenuId == this.props.id ? "ms-bgColor-themeSecondary" : "ms-bgColor-themePrimary"}
                ms-lg2 
                ms-sm12 
                ms-textAlignCenter
                ms-fontSize-l
                 ms-fontColor-themeLighterAlt
                ${styles.container}
                `}

                onMouseEnter={this.handleMouseEnter}
                onClick={this.handleMouseEnter}
                onTouchStart={this.handleMouseEnter}
                onMouseLeave={this.props.handleLostFocus}
            >
                {this.props.text}
            </div>
        );
    }

    handleMouseEnter() {
        this.props.handleFocused(this.props.id);
    }

}
