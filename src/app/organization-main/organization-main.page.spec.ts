import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrganizationMainPage } from './organization-main.page';

describe('OrganizationMainPage', () => {
  let component: OrganizationMainPage;
  let fixture: ComponentFixture<OrganizationMainPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
