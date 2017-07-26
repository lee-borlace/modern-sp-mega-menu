import pnp from 'sp-pnp-js';

import { TopLevelMenu } from '../model/TopLevelMenu'
import { FlyoutColumn } from '../model/FlyoutColumn'
import { Link } from '../model/Link'

export class MegaMenuService {

    // Get items for the menu.
    public static getMenuItems(megaMenuListName: string): Promise<TopLevelMenu[]> {

        return new Promise<TopLevelMenu[]>((resolve, reject) => {
            resolve(MegaMenuService.getSampleData());
        });

    }

    private static getSampleData(): TopLevelMenu[] {
        return [
            {
                id: 1,
                text: "Organisation",
                columns: [
                    {
                        heading: { text: "Corporate", url:"/", openInNewTab:false },
                        links: [
                            { text: "Finance", url: "/", openInNewTab: false },
                            { text: "Information Services", url: "/", openInNewTab: false },
                            { text: "HSE", url: "/", openInNewTab: false },
                            { text: "Human Resources", url: "/", openInNewTab: false }
                        ]
                    },
                    {
                        heading: { text: "R & D" },
                        links: [
                            { text: "Atomic Energy", url: "/", openInNewTab: false },
                            { text: "Black Hole Generation", url: "/", openInNewTab: false },
                            { text: "Time Travel", url: "/", openInNewTab: false },
                            { text: "Weaponry", url: "/", openInNewTab: false }
                        ]
                    },
                    {
                        heading: { text: "Projects" },
                        links: [
                            { text: "Terrestrial", url: "/", openInNewTab: false },
                            { text: "Deep Space", url: "/", openInNewTab: false },
                            { text: "Underwater", url: "/", openInNewTab: false },
                            { text: "Dimension X", url: "/", openInNewTab: false }
                        ]
                    },
                    {
                        heading: { text: "Production" },
                        links: [
                            { text: "Moon Dust Extraction", url: "/", openInNewTab: false },
                            { text: "Dark Matter Mining", url: "/", openInNewTab: false },
                            { text: "Earth Core Leeching", url: "/", openInNewTab: false }
                        ]
                    }
                ]
            },
            {
                id: 2,
                text: "The Management Team",
                columns: [
                    {
                        heading: { text: "The Board" },
                        links: [
                            { text: "Jack Jackson", url: "/", openInNewTab: false },
                            { text: "Jane Janeson", url: "/", openInNewTab: false },
                            { text: "Bob Bobson", url: "/", openInNewTab: false },
                            { text: "Michelle Michelleson", url: "/", openInNewTab: false }
                        ]
                    },
                    {
                        heading: { text: "Executive" },
                        links: [
                            { text: "Michael Michaelson", url: "/", openInNewTab: false },
                            { text: "Lee Leeson", url: "/", openInNewTab: false },
                            { text: "Clare Clareson", url: "/", openInNewTab: false },
                            { text: "Mathew Mathewson", url: "/", openInNewTab: false }
                        ]
                    }
                ]
            },
            {
                id: 3,
                text: "Resources",
                columns: [
                    {
                        heading: { text: "Search Engines" },
                        links: [
                            { text: "Google", url: "/", openInNewTab: false },
                            { text: "Bing", url: "/", openInNewTab: false },
                            { text: "Gargle", url: "/", openInNewTab: false },
                            { text: "Thingo", url: "/", openInNewTab: false }
                        ]
                    },
                    {
                        heading: { text: "Policies" },
                        links: [
                            { text: "Political", url: "/", openInNewTab: false },
                            { text: "Ethical", url: "/", openInNewTab: false }
                        ]
                    },
                    {
                        heading: { text: "Procedures" },
                        links: [
                            { text: "Alien Lifeforms", url: "/", openInNewTab: false },
                            { text: "Rifts in Spacetime", url: "/", openInNewTab: false },
                            { text: "Changed the Past", url: "/", openInNewTab: false },
                            { text: "Earth Core Issues", url: "/", openInNewTab: false },
                            { text: "Lost in Space", url: "/", openInNewTab: false },
                        ]
                    },
                ]
            },
            {
                id: 4,
                text: "News and Events",
                columns: [
                    {
                        heading: { text: "News" },
                        links: [
                            { text: "Earth", url: "/", openInNewTab: false },
                            { text: "Mars", url: "/", openInNewTab: false },
                            { text: "Dimension X", url: "/", openInNewTab: false }
                        ]
                    },
                    {
                        heading: { text: "Events" },
                        links: [
                            { text: "Mars Family Days", url: "/", openInNewTab: false },
                            { text: "Earth", url: "/", openInNewTab: false },
                            { text: "Dimension X", url: "/", openInNewTab: false },
                            { text: "Bottom of the Ocean", url: "/", openInNewTab: false }
                        ]
                    }
                ]
            }
        ];

    }

}