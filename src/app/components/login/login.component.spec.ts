import {
  RouterTestingModule
} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { provideRoutes, Routes, RouterModule } from '@angular/router';

import { async, ComponentFixture, TestBed, } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { environment } from 'src/environments/environment'

import { StoreModule } from '@ngrx/store';
import { reducer as showLoading } from '../../reducers/utilities'

@Component({})
class TestRouterComponent {
}
let config: Routes = [
  {
      path: '', component: TestRouterComponent
  }
];

describe('LoginComponent', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestRouterComponent,
        LoginComponent 
      ],
      imports: [ RouterTestingModule, RouterModule, HttpClientTestingModule,
        StoreModule.forRoot({
          showLoading
        }) ],
      providers: [ provideRoutes(config),
        { provide: 'API_URL', useValue: environment.apiUrl } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have login method', () => {
    expect(component.login).toBeTruthy();
  });

  it('should have title', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.system-title').innerHTML).toMatch('Procedimentos médicos');
  });

  it('should have username input', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.input.login').placeholder).toMatch('Login');
  });

  it('should have password input', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.input.password').placeholder).toMatch('Senha');
  });

  it('should have login button', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.btn-login').innerHTML).toMatch('Entrar');
  });
});
