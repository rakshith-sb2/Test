import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdalleVarComponent } from './cdalle-var.component';

describe('CdalleVarComponent', () => {
  let component: CdalleVarComponent;
  let fixture: ComponentFixture<CdalleVarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdalleVarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdalleVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
