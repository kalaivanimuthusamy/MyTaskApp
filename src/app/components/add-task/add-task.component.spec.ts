import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTask } from './add-task.component';

describe('AddTasksComponent', () => {
  let component: AddTask;
  let fixture: ComponentFixture<AddTask>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTask ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
