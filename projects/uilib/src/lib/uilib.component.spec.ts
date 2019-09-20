import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UilibComponent } from './uilib.component';

describe('UilibComponent', () => {
  let component: UilibComponent;
  let fixture: ComponentFixture<UilibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UilibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UilibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
