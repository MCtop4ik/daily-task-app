import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateDailyTaskPage } from './create-daily-task.page';

describe('CreateDailyTaskPage', () => {
  let component: CreateDailyTaskPage;
  let fixture: ComponentFixture<CreateDailyTaskPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDailyTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
