import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerticularsComponent } from './perticulars.component';

describe('PerticularsComponent', () => {
  let component: PerticularsComponent;
  let fixture: ComponentFixture<PerticularsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerticularsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerticularsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
