import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemListByDifficultyComponent } from './problem-list-by-difficulty.component';

describe('ProblemListByDifficultyComponent', () => {
  let component: ProblemListByDifficultyComponent;
  let fixture: ComponentFixture<ProblemListByDifficultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemListByDifficultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemListByDifficultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
