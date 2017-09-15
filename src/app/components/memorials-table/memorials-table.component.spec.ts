import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorialsTableComponent } from './memorials-table.component';

describe('MemorialsTableComponent', () => {
  let component: MemorialsTableComponent;
  let fixture: ComponentFixture<MemorialsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemorialsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemorialsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
