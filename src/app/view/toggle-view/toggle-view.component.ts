import { ChangeDetectorRef, Component } from '@angular/core';
import { IconComponent, ToggleComponent } from '@gama-ui/components';
import { KeyValue } from '@gama-ui/interface';
import { CopySnippetService } from '@gama-ui/services';

@Component({
  selector: 'toggle-view',
  standalone: true,
  imports: [ToggleComponent, IconComponent],
  templateUrl: './toggle-view.component.html',
})
export class ToggleViewComponent {
  sizes : any = ['small', 'medium', 'large'];
  themes : any = [ null, 'info', 'success', 'warn', 'alert', 'disabled'];
  
  constructor(private cdr: ChangeDetectorRef, private copySnippetService: CopySnippetService) {
  }
  copySnippet(event: Event, params: KeyValue) {
    const target = event.target as HTMLElement;
    if (target.innerText !== 'check_circle') {
      const tagSnippet = this._generateOnTheFlySnippet(params['size'] as string, params['theme'] as string, params['idx'] as number);
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

  _generateOnTheFlySnippet (size: string, theme: string, idx: number) :string {
    let tag = `<GToggle size=":size"${theme !=='disabled' && theme !== null ? ` theme=":theme"`: ''}${size ==='large' ? (idx === 0 || idx === 3) ? ' beforeLabel="before"': (idx === 1 || idx === 4) ? ' afterLabel="After"': ' beforeLabel="Before" afterLabel="After"': ''}${theme==='disabled' ? ` [disabled]="true"`: ''}/>`
    return tag;
  }

  
}
