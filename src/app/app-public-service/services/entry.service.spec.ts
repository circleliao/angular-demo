import { TestBed } from '@angular/core/testing';

import { EntryService } from './entry.service';

describe('EntryService', () => {
  let service: EntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('获取服务列表测试： ', function () {
    let list = service.getList();
    expect(list.length).toBeGreaterThan(0)
    console.log(list)
  });
});
