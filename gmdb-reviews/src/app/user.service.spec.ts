import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

let service;
describe('UserService', () => {
  beforeEach(() =>{ TestBed.configureTestingModule({})
  service = TestBed.get(UserService);
  
});

  it('should be created', () => {
    
    expect(service).toBeTruthy();
  });
  it('signup should store user', () => {
    let credentialStored;
   service.signUp('email','password')
    
    service.login('email','password').subscribe(a=>credentialStored=a);

    expect(credentialStored).toBeTruthy();
  });
  
});
