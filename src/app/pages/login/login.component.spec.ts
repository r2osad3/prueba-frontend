import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { LoginUser } from 'src/app/model/login-user/login-user';
import { NewUser } from 'src/app/model/new-user/new-user';
import { Vacancy } from 'src/app/model/vacancy/vacancy';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('LoginUser', () => {
  it('should create', () => {
    expect(new LoginUser('username', 'password')).toBeTruthy();
  });
});

describe('NewUser', () => {
  it('should create', () => {
    expect(new NewUser('name', 'username', 'email', 'password')).toBeTruthy();
  });
});

describe('Vacancy', () => {
  it('should create', () => {
    expect(new Vacancy('jobName', 'company', 'modality', 'jobDescription', 'location')).toBeTruthy();
  });
});
