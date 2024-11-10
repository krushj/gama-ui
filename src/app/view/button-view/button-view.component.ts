import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ButtonComponent, IconComponent, ToggleComponent } from '@gama-ui/components';
import { KeyValue, Snippet } from '@gama-ui/interface';
import { CopySnippetService } from '@gama-ui/services';

@Component({
  selector: 'button-view',
  standalone: true,
  imports: [ButtonComponent, IconComponent,ToggleComponent],
  templateUrl: './button-view.component.html',
})
export class ButtonViewComponent {
  themes: any[] = [null, 'info', 'success', 'warn', 'alert', 'disabled'];
  types: any[] = ['primary', 'secondary', 'tertiary'];
  sizes: any[] = ['small', 'medium', 'large'];
  disableStatus : boolean[] = [false, true];
  isPrimaryBorderType : boolean = false;


  constructor(private cdr: ChangeDetectorRef, private copySnippetService: CopySnippetService) {
  }

  copySnippet(event: Event, params: KeyValue) {
    const target = event.target as HTMLElement;
    if (target.innerText !== 'check_circle') {
      const tagSnippet = this._generateOnTheFlySnippet(params['size'] as string, params['theme'] as string, params['type'] as string, params['icon'] as boolean);
      this.copySnippetService.copyContent(tagSnippet, params);
      target.innerText = 'check_circle';
      target.style.color = '#00A699';
      setTimeout(() => {
        target.innerText = 'content_copy';
        target.style.color = ''
      }, 2000);
      this.cdr.detectChanges();
    }
  }
  _generateOnTheFlySnippet (size: string, theme: string, type: string, icon: boolean) :string {
    let tag = `<GButton size=":size" type=":type" border="${this.isPrimaryBorderType?'primary':'secondary'}"${theme !=='disabled' && theme !== null ? ` theme=":theme"`: ''}${icon ? ' [iconButton]="true"':''}${theme==='disabled' ? ` [disabled]="true"`: ''}/>`
    return tag;
  }
  
}
