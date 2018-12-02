import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemListByNameComponent } from './problem-list-by-name.component';

describe('ProblemListByNameComponent', () => {
  let component: ProblemListByNameComponent;
  let fixture: ComponentFixture<ProblemListByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemListByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemListByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
