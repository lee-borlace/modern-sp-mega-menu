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

const LOG_SOURCE: string = 'ModernSpMegaMenuApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IModernSpMegaMenuApplicationCustomizerProperties {
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class ModernSpMegaMenuApplicationCustomizer
  extends BaseApplicationCustomizer<IModernSpMegaMenuApplicationCustomizerProperties> {

  private _headerPlaceholder: Placeholder;

  @override
  public onInit(): Promise<void> {
    return Promise.resolve<void>();
  }

  @override
  public onRender(): void {
    
    if (!this._headerPlaceholder) {
      this._headerPlaceholder = this.context.placeholders.tryAttach(
        'PageHeader',
        {
          onDispose: this._onDispose
        });

      if (this._headerPlaceholder) {
        if (this._headerPlaceholder.domElement) {

          console.log("PageHeader placeholder is OK.")

          const element: React.ReactElement<IMegaMenuProps> = React.createElement(
            MegaMenu,
            {}
          );
          ReactDom.render(element, this._headerPlaceholder.domElement);

          

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
