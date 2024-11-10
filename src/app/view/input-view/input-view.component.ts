
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent, IconComponent, InputComponent } from '@gama-ui/components';
import { KeyValue, Snippet } from '@gama-ui/interface';
import { CopySnippetService } from '@gama-ui/services';

@Component({
  selector: 'input-view',
  standalone: true,
  imports: [InputComponent, ButtonComponent, FormsModule, IconComponent],
  templateUrl: './input-view.component.html',
})
export class InputViewComponent {
  themes: any[] = ['', 'info', 'success', 'warn', 'alert', 'disabled'];
  borders: any[] = ['primary', 'secondary'];
  appearances: any[] = ['outline', 'fill'];
  labels : boolean[] = [false, true];

  constructor(private cdr: ChangeDetectorRef, private copySnippetService: CopySnippetService) {
  }
  copySnippet(event: Event, params: KeyValue) {
    const target = event.target as HTMLElement;
    if (target.innerText !== 'check_circle') {
      const tagSnippet = this._generateOnTheFlySnippet(params['label'] as boolean, params['theme'] as string);
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

  _generateOnTheFlySnippet (label: boolean, theme: string) :string {
    let tag = `<GInput${label ? ` label="Label" `: ''} appearance=":appearance" placeholder="placeholder" border=":border"${(theme !== '' && theme !== 'disabled') ? ` theme=":theme"`: ''}${theme === 'disabled' ? ` [disabled]=[true]`: ''}><GButton [style]="{background : 'transparent'; border: 'none'}" iconButton size="small" iconName="search" ${label ? 'suffix': 'prefix'}/><span ${label ? 'error': 'hint'}>${label ? 'error': 'hint'}</span></GInput>`
    return tag;
  }
}
