import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POC2Component } from './poc2.component';

describe('POC2Component', () => {
  let component: POC2Component;
  let fixture: ComponentFixture<POC2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ POC2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(POC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
