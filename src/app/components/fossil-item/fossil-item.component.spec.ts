import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FossilItemComponent } from './fossil-item.component';

describe('FossilItemComponent', () => {
  let component: FossilItemComponent;
  let fixture: ComponentFixture<FossilItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FossilItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FossilItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
