import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupComponent } from './signup.component';
import { TokenService } from '../../service/token/token.service';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NewUser } from '../../model/new-user/new-user';
import { of, throwError } from 'rxjs';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let tokenServiceMock: jasmine.SpyObj<TokenService>;
  let authServiceMock: jasmine.SpyObj<AuthService>;
  let routerMock: jasmine.SpyObj<Router>;
  let toastrMock: jasmine.SpyObj<ToastrService>;

  beforeEach(() => {
    tokenServiceMock = jasmine.createSpyObj('TokenService', ['getToken']);
    authServiceMock = jasmine.createSpyObj('AuthService', ['nuevo']);
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    toastrMock = jasmine.createSpyObj('ToastrService', ['success', 'error']);

    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      providers: [
        { provide: TokenService, useValue: tokenServiceMock },
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: ToastrService, useValue: toastrMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isLogged to true if token is present', () => {
    tokenServiceMock.getToken.and.returnValue('fakeToken');

    component.ngOnInit();

    expect(component.isLogged).toBe(true);
  });

  it('should set isLogged to false if token is not present', () => {
    tokenServiceMock.getToken.and.returnValue(null);

    component.ngOnInit();

    expect(component.isLogged).toBe(false);
  });

  it('should register a new user successfully', () => {
    const newUser: NewUser = { name: 'Mullan', userName: 'mulan', email: 'mul@gmail.com', password: 'password', roles: [ 'admin']};

    authServiceMock.nuevo.and.returnValue(of('fakeData'));

    component.name = newUser.name;
    component.userName = newUser.userName;
    component.email = newUser.email;
    component.password = newUser.password;
    component.onRegister();

    expect(component.newUser).toEqual(newUser);
    expect(authServiceMock.nuevo).toHaveBeenCalledWith(newUser);
    expect(toastrMock.success).toHaveBeenCalledWith('Cuenta Creada', 'OK');
    expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should handle error when registering a new user', () => {
    const errorResponse = { error: { mensaje: 'Error message' } };

    authServiceMock.nuevo.and.returnValue(throwError(errorResponse));

    component.onRegister();

    expect(toastrMock.error).toHaveBeenCalledWith('fallo al crear la cuenta');
    expect(component.errMsj).toEqual(errorResponse.error.mensaje);
  });
});
