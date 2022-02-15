import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaffoldRequestComponent } from './scaffold-request.component';

describe('ScaffoldRequestComponent', () => {
  let component: ScaffoldRequestComponent;
  let fixture: ComponentFixture<ScaffoldRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScaffoldRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaffoldRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
