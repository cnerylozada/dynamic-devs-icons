import { Component, getAssetPath, h, Host, State } from '@stencil/core';
import { IconSize } from '../../enums';
import { getIconList } from '../../utils';

@Component({
  tag: 'dd-data-table',
  styleUrl: 'data-table.component.scss',
  shadow: true
})
export class Icon {

  @State() private icons: any = [];

  public connectedCallback() {
    const url: string = getAssetPath(`../assets/data/icons.json`);
    getIconList(url).then(icons => (this.icons = icons));
  }

  render() {
    return (
      <Host role="img" class={this.getClassList()}>
        {this.icons.map(icon => (
          <section class="dd-DataTable-row">
            <div class="dd-DataTable-label">{icon.name}</div>
            <div class="dd-DataTable-icon">
              <dd-icon name={icon.name} size={IconSize.lg}></dd-icon>
            </div>
          </section>
        ))}
      </Host>
    );
  }

  private getClassList() {
    return {
      'dd-DataTable': true
    };
  }
}
