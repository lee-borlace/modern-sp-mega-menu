import { FlyoutColumn } from './FlyoutColumn';

// Top-level mega menu item.
export class TopLevelMenu {
    public id: number;
    public text: string;
    public columns?: FlyoutColumn[];
}