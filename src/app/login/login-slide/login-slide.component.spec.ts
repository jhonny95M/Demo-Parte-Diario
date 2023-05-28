import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSlideComponent } from './login-slide.component';

describe('LoginSlideComponent', () => {
  let component: LoginSlideComponent;
  let fixture: ComponentFixture<LoginSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSlideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
