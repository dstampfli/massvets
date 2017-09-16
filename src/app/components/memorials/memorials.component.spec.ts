import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorialsComponent } from './memorials.component';

describe('MemorialsComponent', () => {
  let component: MemorialsComponent;
  let fixture: ComponentFixture<MemorialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemorialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
