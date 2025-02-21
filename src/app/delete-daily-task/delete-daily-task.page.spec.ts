import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteDailyTaskPage } from './delete-daily-task.page';

describe('DeleteDailyTaskPage', () => {
  let component: DeleteDailyTaskPage;
  let fixture: ComponentFixture<DeleteDailyTaskPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDailyTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
