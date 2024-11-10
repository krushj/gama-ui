import { TestBed } from '@angular/core/testing';

import { CopySnippetService } from './copy-snippet.service';

describe('CopySnippetService', () => {
  let service: CopySnippetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CopySnippetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
