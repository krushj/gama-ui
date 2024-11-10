import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CopySnippetService {

  constructor() { }

  copyContent(tagSnippet: any, params: { [key: string]: string | number | boolean } ) {
    const code = this._generateTag(tagSnippet, params);
    navigator.clipboard.writeText(code)
      .then(() => {
        return true;
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
      return false;
  }

  private _generateTag(template: string, params: { [key: string]: string | number | boolean }): string {
    return template.replace(/:([a-zA-Z0-9_]+)/g, (_, key) => {
      return key in params ? String(params[key]) : '';
    });
  }
}
