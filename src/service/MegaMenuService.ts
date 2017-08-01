import pnp from 'sp-pnp-js';

import { TopLevelMenu } from '../model/TopLevelMenu'
import { FlyoutColumn } from '../model/FlyoutColumn'
import { Link } from '../model/Link'

import { sampleData } from './MegaMenuSampleData'

export class MegaMenuService {

    static readonly useSampleData: boolean = false;

    static readonly level1ListName = "Mega Menu - Level 1";
    static readonly level2ListName = "Mega Menu - Level 2";
    static readonly level3ListName = "Mega Menu - Level 3";

    // Get items for the menu.
    public static getMenuItems(): Promise<TopLevelMenu[]> {

        if (!MegaMenuService.useSampleData) {

            return new Promise<TopLevelMenu[]>((resolve, reject) => {

                var level1ItemsPromise = MegaMenuService.getMenuItemsFromSp(MegaMenuService.level1ListName);
                var level2ItemsPromise = MegaMenuService.getMenuItemsFromSp(MegaMenuService.level2ListName);
                var level3ItemsPromise = MegaMenuService.getMenuItemsFromSp(MegaMenuService.level3ListName);

                Promise.all([level1ItemsPromise, level2ItemsPromise, level3ItemsPromise])
                    .then((results: any[][]) => {
                        resolve(MegaMenuService.convertItemsFromSp(results[0], results[1], results[2]));
                    });
            });
        }
        else {
            return new Promise<TopLevelMenu[]>((resolve, reject) => {
                resolve(sampleData);
            });
        }

    }

    // Get raw results from SP.
    private static getMenuItemsFromSp(listName: string): Promise<any[]> {

        return new Promise<TopLevelMenu[]>((resolve, reject) => {
            pnp.sp.site.rootWeb.lists
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
                    text:item.Title,
                    url:item.Url.Url,
                    openInNewTab:item.OpenInNewTab
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
        for(let l3 of level3Items){
            level2Dictionary[l3.level2ParentId].links.push(l3);
        }

        for(let l2 of level2Items){
            level1Dictionary[l2.level1ParentId].columns.push(l2);
        }

        var retVal:TopLevelMenu[] = [];

        for(let l1 of level1Items){
            retVal.push(l1);
        }

        return retVal;

    }





}