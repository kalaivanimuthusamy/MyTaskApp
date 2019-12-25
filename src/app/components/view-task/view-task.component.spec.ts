import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTask } from './view-task.component';

describe('ViewTasksComponent', () => {
  let component: ViewTask;
  let fixture: ComponentFixture<ViewTask>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTask ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
