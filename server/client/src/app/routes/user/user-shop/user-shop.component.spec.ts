import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShopComponent } from './user-shop.component';

describe('UserShopComponent', () => {
  let component: UserShopComponent;
  let fixture: ComponentFixture<UserShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
