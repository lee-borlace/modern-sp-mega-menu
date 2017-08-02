import * as React from 'react';
import styles from './MobileMenu.module.scss';
import { withResponsiveMode, ResponsiveMode } from 'office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode';

export interface IMobileMenuProps {
    handleTouched: () => void;
    responsiveMode?: ResponsiveMode;
}

export interface IMobileMenuState {
}

@withResponsiveMode
export class MobileMenu extends React.Component<IMobileMenuProps, IMobileMenuState> {

    constructor(props) {
        super(props);
    }

    public render(): React.ReactElement<IMobileMenuProps> {

        return (
            <div
                className={`ms-Grid ms-bgColor-themePrimary ms-fontColor-themeLighter ${styles.container}`}
                onClick={this.props.handleTouched}
            >

                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm12">
                        <i className="ms-Icon ms-Icon--More" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        );
    }


}
