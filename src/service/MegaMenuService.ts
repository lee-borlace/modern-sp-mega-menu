import pnp from 'sp-pnp-js';
import { Web }  from 'sp-pnp-js/lib/sharepoint/webs';

import { TopLevelMenu } from '../model/TopLevelMenu'
import { FlyoutColumn } from '../model/FlyoutColumn'
import { Link } from '../model/Link'

import { sampleData } from './MegaMenuSampleData'

export class MegaMenuService {

    static readonly useSampleData: boolean = false;

    static readonly level1ListName: string = "Mega Menu - Level 1";
    static readonly level2ListName: string = "Mega Menu - Level 2";
    static readonly level3ListName: string = "Mega Menu - Level 3";

    static readonly cacheKey: string = "MegaMenuTopLevelItems";

    // Get items for the menu and cache the result in session cache.
    public static getMenuItems(siteCollectionUrl:string): Promise<TopLevelMenu[]> {

        if (!MegaMenuService.useSampleData) {

            return new Promise<TopLevelMenu[]>((resolve, reject) => {

                // See if we've cached the result previously.
                var topLevelItems: TopLevelMenu[] = pnp.storage.session.get(MegaMenuService.cacheKey);

                if (topLevelItems) {
                    console.log("Found mega menu items in cache.");
                    resolve(topLevelItems);
                }
                else {

                    console.log("Didn't find mega menu items in cache, getting from list.");

                    var level1ItemsPromise = MegaMenuService.getMenuItemsFromSp(MegaMenuService.level1ListName, siteCollectionUrl);
                    var level2ItemsPromise = MegaMenuService.getMenuItemsFromSp(MegaMenuService.level2ListName, siteCollectionUrl);
                    var level3ItemsPromise = MegaMenuService.getMenuItemsFromSp(MegaMenuService.level3ListName, siteCollectionUrl);

                    Promise.all([level1ItemsPromise, level2ItemsPromise, level3ItemsPromise])
                        .then((results: any[][]) => {

                            topLevelItems = MegaMenuService.convertItemsFromSp(results[0], results[1], results[2]);

                            // Store in session cache.
                            pnp.storage.session.put(MegaMenuService.cacheKey, topLevelItems);

                            resolve(topLevelItems);
                        });
                }
            });
        }
        else {
            return new Promise<TopLevelMenu[]>((resolve, reject) => {
                resolve(sampleData);
            });
        }

    }

    // Get raw results from SP.
    private static getMenuItemsFromSp(listName: string, siteCollectionUrl:string): Promise<any[]> {

        return new Promise<TopLevelMenu[]>((resolve, reject) => {
            
            let web = new Web(siteCollectionUrl);
            
            // TODO : Note that passing in url and using this approach is a workaround. I would have liked to just
            // call pnp.sp.site.rootWeb.lists, however when running this code on SPO modern pages, the REST call ended
            // up with a corrupt URL. However it was OK on View All Site content pages, etc.
            web.lists
                .getByTitle(listName)
                .items
                .orderBy("SortOrder")
                .get()
                .then((items: any[]) => {
                    resolve(items);
                })
                .catch((error: any) => {
                    reject(error);
                });
        });

    }


    // Convert results from SP into actual entities with correct relationships.
    private static convertItemsFromSp(level1: any[], level2: any[], level3: any[]): TopLevelMenu[] {

        var level1Dictionary: { [id: number]: TopLevelMenu; } = {};
        var level2Dictionary: { [id: number]: FlyoutColumn; } = {};

        // Convert level 1 items and store in dictionary.
        var level1Items: TopLevelMenu[] = level1.map((item: any) => {
            var newItem = {
                id: item.Id,
                text: item.Title,
                columns: []
            };

            level1Dictionary[newItem.id] = newItem;

            return newItem;
        });

        // Convert level 2 items and store in dictionary.
        var level2Items: FlyoutColumn[] = level2.map((item: any) => {
            var newItem = {
                id: item.Id,
                heading: {
                    text: item.Title,
                    url: item.Url ? item.Url.Url : "",
                    openInNewTab: item.OpenInNewTab
                },
                links: [],
                level1ParentId: item.Level1ItemId
            };

            level2Dictionary[newItem.id] = newItem;

            return newItem;
        });

        // Convert level 3 items and store in dictionary.
        var level3Items: Link[] = level3.map((item: any) => {
            return {
                level2ParentId: item.Level2ItemId,
                text: item.Title,
                url: item.Url.Url,
                openInNewTab: item.OpenInNewTab
            };
        });

        // Now link the entities into the desired structure.
        for (let l3 of level3Items) {
            level2Dictionary[l3.level2ParentId].links.push(l3);
        }

        for (let l2 of level2Items) {
            level1Dictionary[l2.level1ParentId].columns.push(l2);
        }

        var retVal: TopLevelMenu[] = [];

        for (let l1 of level1Items) {
            retVal.push(l1);
        }

        return retVal;

    }







}