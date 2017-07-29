/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminPostService } from './admin-post.service';

describe('BusinessPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminPostService]
    });
  });

  it('should ...', inject([AdminPostService], (service: AdminPostService) => {
    expect(service).toBeTruthy();
  }));
});
