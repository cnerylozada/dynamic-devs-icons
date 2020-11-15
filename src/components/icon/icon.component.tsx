import { Build, Component, getAssetPath, h, Host, Prop, State, Watch } from '@stencil/core';
import { IconSize } from '../../enums';
import { getSVGContent, ICONS_CONTENT } from '../../utils/load-svg.util';

@Component({
  tag: 'dd-icon',
  styleUrl: 'icon.component.scss',
  shadow: true
})
export class Icon {

  @Prop() name?: string;
  @Prop() src?: string;
  @Prop() size?: IconSize = IconSize.md;
  @State() private svgContent?: string;

  public connectedCallback() {
    this.loadIcon();
  }

  render() {
    return (
      <Host role="img" class={this.getClassList()}>
        {Build.isBrowser && this.svgContent ? (
          <div class="dd-Icon-content" innerHTML={this.svgContent}></div>
        ) : (
            <div class="dd-Icon-content"></div>
          )}
      </Host>
    );
  }

  @Watch('name')
  @Watch('src')
  private loadIcon(): void {
    console.log('hola');

    if (!Build.isBrowser) {
      return;
    }
    const url: string = !!this.name ? getAssetPath(`../assets/svg/${this.name}.svg`) : this.src;

    if (ICONS_CONTENT.has(url)) {
      this.svgContent = ICONS_CONTENT.get(url);
    } else {
      getSVGContent(url).then(() => (this.svgContent = ICONS_CONTENT.get(url)));
    }
  }

  private getClassList() {
    return {
      'dd-Icon': true,
      [`dd-Icon--${this.size}`]: true
    };
  }
}
