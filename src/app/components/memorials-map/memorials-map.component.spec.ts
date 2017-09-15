import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorialsMapComponent } from './memorials-map.component';

describe('MemorialsMapComponent', () => {
  let component: MemorialsMapComponent;
  let fixture: ComponentFixture<MemorialsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemorialsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemorialsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
