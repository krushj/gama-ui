import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ButtonComponent, IconComponent } from '@gama/components';
import { Snippet } from '@gama/interface';
import { CopySnippetService } from '@gama/services';

@Component({
  selector: 'button-view',
  standalone: true,
  imports: [ButtonComponent, IconComponent],
  templateUrl: './button-view.component.html',
})
export class ButtonViewComponent {
  themes: any[] = ['info', 'success', 'warn', 'alert'];
  types: any[] = ['primary', 'secondary', 'tertiary'];
  sizes: any[] = ['small', 'medium', 'large'];
  disableStatus : boolean[] = [false, true];


  constructor(private cdr: ChangeDetectorRef, private copySnippetService: CopySnippetService) {
  }

  copySnippet(event: Event, snippet: Snippet) {
    const target = event.target as HTMLElement;
    if (target.innerText !== 'check_circle') {
      this.copySnippetService.copyContent(this.defaultSnippetTemplate[snippet.key], snippet.params);
      target.innerText = 'check_circle';
      target.style.color = '#00A699';
      setTimeout(() => {
        target.innerText = 'content_copy';
        target.style.color = ''
      }, 2000);
      this.cdr.detectChanges();
    }
  }

  defaultSnippetTemplate: { [key: string]: string } = {
    defaultButton: `<GButton title="Click Me" [size]=":size" [disabled]=":disabled"/>`,
    defaultIconButton: `<GButton iconName="search" [iconButton]="true" [size]=":size" [disabled]=":disabled" />`,
    themeButton: `<GButton title="Click Me" [size]=":size" [theme]=":theme" [type]=":type" />`,
    themeIconButton: `<GButton iconName="search" [iconButton]="true" [size]=":size" [theme]=":theme" [type]=":type" />`,
  }
}
