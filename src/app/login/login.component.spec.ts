import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatIconModule, MatFormFieldModule, MatDialogModule } from '@angular/material'
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing'
import { UserserviceService } from '../service/userservice.service'
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule, MatFormFieldModule, MatIconModule,
        MatButtonModule, MatInputModule, BrowserAnimationsModule,
        RouterTestingModule, MatDialogModule],
      declarations: [LoginComponent],
      providers: [
        HttpClient, HttpHandler,
      ]
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
});
