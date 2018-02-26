import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBuyComponent } from './user-buy.component';

describe('UserBuyComponent', () => {
  let component: UserBuyComponent;
  let fixture: ComponentFixture<UserBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
