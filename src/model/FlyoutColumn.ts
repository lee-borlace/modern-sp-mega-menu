import {Link} from './Link';

// A column of links to show in the mega menu flyout. Each column has a header with optional link, and a number of links to show under it.
export class FlyoutColumn {
    public id:number;
    public level1ParentId: number;
    public heading?:Link;
    public links?:Link[];
}