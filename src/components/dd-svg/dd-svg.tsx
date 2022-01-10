import { Build, Component, getAssetPath, h, Host, Prop, State, Watch } from '@stencil/core';
import { getSVGContent, ICONS_CONTENT } from '../../utils/load-svg.util';

@Component({
  tag: 'dd-svg',
  styleUrl: 'dd-svg.scss',
  shadow: true,
})
export class DdSvg {
  @Prop() name?: string;
  @Prop() type: string = 'illustration';
  @Prop() size?: 'normal' | 'small' = 'normal';
  @Prop() src?: string;
  @State() private svgContent?: string;

  public connectedCallback() {
    this.loadIcon();
  }

  render() {
    return (
      <Host role="img" class={this.getClassList()}>
        {Build.isBrowser && this.svgContent ? <div innerHTML={this.svgContent}></div> : <div></div>}
      </Host>
    );
  }

  @Watch('name')
  @Watch('src')
  private loadIcon(): void {
    if (!Build.isBrowser) {
      return;
    }
    const url: string = !!this.name ? getAssetPath(`../assets/svg/logos/${this.name}.svg`) : this.src;

    if (ICONS_CONTENT.has(url)) {
      this.svgContent = ICONS_CONTENT.get(url);
    } else {
      getSVGContent(url).then(() => (this.svgContent = ICONS_CONTENT.get(url)));
    }
  }

  private getClassList() {
    return {
      [`dd-svg--${this.type}-${this.size}`]: true,
    };
  }
}
