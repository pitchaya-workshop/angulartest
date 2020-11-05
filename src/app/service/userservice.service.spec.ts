import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { UserserviceService } from './userservice.service';
import { RouterTestingModule } from '@angular/router/testing'
import { MatDialogModule } from '@angular/material';

describe('UserserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule,MatDialogModule],
    providers: []
  }));

  it('should be created', () => {
    const service: UserserviceService = TestBed.get(UserserviceService);
    expect(service).toBeTruthy();
  });
});
