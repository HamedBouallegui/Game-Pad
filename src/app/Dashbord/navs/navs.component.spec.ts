import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavsComponent } from './navs.component';

describe('NavsComponent', () => {
  let component: NavsComponent;
  let fixture: ComponentFixture<NavsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavsComponent]
    });
    fixture = TestBed.createComponent(NavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
