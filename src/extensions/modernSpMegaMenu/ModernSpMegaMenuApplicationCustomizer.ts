import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer,
  Placeholder
} from '@microsoft/sp-application-base';
import * as React from 'react';
import * as ReactDom from 'react-dom';

import * as strings from 'modernSpMegaMenuStrings';
import { MegaMenu, IMegaMenuProps } from '../../components/MegaMenu';
import { MegaMenuService } from '../../service/MegaMenuService';
import { TopLevelMenu } from '../../model/TopLevelMenu';

export interface IModernSpMegaMenuApplicationCustomizerProperties {
}

export default class ModernSpMegaMenuApplicationCustomizer
  extends BaseApplicationCustomizer<IModernSpMegaMenuApplicationCustomizerProperties> {

  private headerPlaceholder: Placeholder;

  @override
  public onInit(): Promise<void> {
    return Promise.resolve<void>();
  }

  @override
  public onRender(): void {

    if (!this.headerPlaceholder) {
      this.headerPlaceholder = this.context.placeholders.tryAttach(
        'PageHeader',
        {
          onDispose: this._onDispose
        });

      if (this.headerPlaceholder) {
        if (this.headerPlaceholder.domElement) {

          console.log("PageHeader placeholder is OK.")


          MegaMenuService.getMenuItems(this.context.pageContext.site.absoluteUrl)
            .then((topLevelMenus: TopLevelMenu[]) => {

              const element: React.ReactElement<IMegaMenuProps> = React.createElement(
                MegaMenu,
                {
                  topLevelMenuItems: topLevelMenus
                });

              ReactDom.render(element, this.headerPlaceholder.domElement);

            })
            .catch((error: any) => {
              console.error(`Error trying to read menu items or render component : ${error.message}`);
            });

        } else {
          console.error('PageHeader placeholder has no DOM element.');
        }
      }
      else {
        console.error('PageHeader placeholder not found.');
      }

    }


  }

  // dispose code would go here
  private _onDispose(): void {
  }


}
