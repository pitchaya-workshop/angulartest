import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PreviewComponent } from './preview.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule, MatDialogModule } from '@angular/material';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PreviewComponent', () => {
  let component: PreviewComponent;
  let fixture: ComponentFixture<PreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewComponent, HeaderComponent, SidebarComponent],
      imports: [RouterTestingModule, MatIconModule,MatDialogModule,BrowserAnimationsModule],
      providers: [HttpClient, HttpHandler]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
