import { TopLevelMenu } from '../model/TopLevelMenu'
import { FlyoutColumn } from '../model/FlyoutColumn'
import { Link } from '../model/Link'

export const sampleData: TopLevelMenu[] = [
    {
        id: 1,
        text: "Organisation",
        columns: [
            {
                level1ParentId:-1,
                id:-1,
                heading: { text: "Corporate", url: "/", openInNewTab: false, level2ParentId:-1 },
                links: [
                    { text: "Finance", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "Information Services", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "HSE", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "Human Resources", url: "/", openInNewTab: false, level2ParentId:-1 }
                ]
            },
            {
                level1ParentId:-1,
                id:-1,
                heading: { text: "R & D", level2ParentId:-1 },
                links: [
                    { text: "Atomic Energy", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "Black Hole Generation", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "Time Travel", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "Weaponry", url: "/", openInNewTab: false, level2ParentId:-1 }
                ]
            },
            {
                level1ParentId:-1,
                id:-1,
                heading: { text: "Projects" , level2ParentId:-1},
                links: [
                    { text: "Terrestrial", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "Deep Space", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "Underwater", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "Dimension X", url: "/", openInNewTab: false, level2ParentId:-1 }
                ]
            },
            {
                level1ParentId:-1,
                id:-1,
                heading: { text: "Production", level2ParentId:-1 },
                links: [
                    { text: "Moon Dust Extraction", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "Dark Matter Mining", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "Earth Core Leeching", url: "/", openInNewTab: false, level2ParentId:-1 }
                ]
            }
        ]
    },
    {
        id: 2,
        text: "The Management Team",
        columns: [
            {
                level1ParentId:-1,
                id:-1,
                heading: { text: "The Board", level2ParentId:-1 },
                links: [
                    { text: "Jack Jackson", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "Jane Janeson", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "Bob Bobson", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "Michelle Michelleson", url: "/", openInNewTab: false, level2ParentId:-1 }
                ]
            },
            {
                level1ParentId:-1,
                id:-1,
                heading: { text: "Executive", level2ParentId:-1 },
                links: [
                    { text: "Michael Michaelson", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "Lee Leeson", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "Clare Clareson", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "Mathew Mathewson", url: "/", openInNewTab: false, level2ParentId:-1 }
                ]
            }
        ]
    },
    {
        id: 3,
        text: "Resources",
        columns: [
            {
                level1ParentId:-1,
                id:-1,
                heading: { text: "Search Engines", level2ParentId:-1 },
                links: [
                    { text: "Google", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "Bing", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "Gargle", url: "/", openInNewTab: false , level2ParentId:-1},
                    { text: "Thingo", url: "/", openInNewTab: false , level2ParentId:-1}
                ]
            },
            {
                level1ParentId:-1,
                id:-1,
                heading: { text: "Policies" , level2ParentId:-1},
                links: [
                    { text: "Political", url: "/", openInNewTab: false , level2ParentId:-1},
                    { text: "Ethical", url: "/", openInNewTab: false, level2ParentId:-1 }
                ]
            },
            {
                level1ParentId:-1,
                id:-1,
                heading: { text: "Procedures", level2ParentId:-1 },
                links: [
                    { text: "Alien Lifeforms", url: "/", openInNewTab: false, level2ParentId:-1},
                    { text: "Rifts in Spacetime", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "Changed the Past", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "Earth Core Issues", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "Lost in Space", url: "/", openInNewTab: false, level2ParentId:-1 },
                ]
            },
        ]
    },
    {
        id: 4,
        text: "News and Events",
        columns: [
            {
                level1ParentId:-1,
                id:-1,
                heading: { text: "News", level2ParentId:-1 },
                links: [
                    { text: "Earth", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "Mars", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "Dimension X", url: "/", openInNewTab: false, level2ParentId:-1 }
                ]
            },
            {
                level1ParentId:-1,
                id:-1,
                heading: { text: "Events", level2ParentId:-1 },
                links: [
                    { text: "Mars Family Days", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "Earth", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "Dimension X", url: "/", openInNewTab: false, level2ParentId:-1 },
                    { text: "Bottom of the Ocean", url: "/", openInNewTab: false , level2ParentId:-1}
                ]
            }
        ]
    }
]