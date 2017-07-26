import * as React from 'react';
import { Link } from 'office-ui-fabric-react/lib/Link';

import styles from './MenuLink.module.scss';

export interface IMenuLinkProps {
    text: string;
    url: string;
    openInNewTab: boolean
}

export interface IMenuLinkState {
}

export class MenuLink extends React.Component<IMenuLinkProps, IMenuLinkState> {

    constructor(props) {
        super(props);
    }

    public render(): React.ReactElement<IMenuLinkProps> {

       return (
            <Link  
                className={`${styles.link} ms-fontColor-neutralPrimary ms-fontSize-mp`}
                href={this.props.url}
                target={this.props.openInNewTab ? "_blank" : ""}
            >
                {this.props.text}
            </Link>
            );
    }
}
