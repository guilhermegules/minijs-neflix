import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  const testUsers = [
    {
      id: 1,
      name: 'Guilherme Gules Moreira',
      email: 'guilhermegules@gmail.com',
      favFilms: [
        'Fight Club',
        'The irish man',
        'Bird Box',
        'El Camino: A Breaking Bad Movie',
        'The Platform'
      ],
    },
    {
      id: 2,
      name: 'Caroline Steffen Vieira',
      email: 'caroline@gmail.com',
      favFilms: ['Uncut Gems', 'Klaus', 'Bird Box', '1922', 'I Am Mother'],
    },
    {
      id: 3,
      name: 'Ricardo Garcia',
      email: 'ricardg@gmail.com',
      favFilms: [
        '13th',
        'First They Killed my Father',
        'The Perfection',
        'El Camino: A Breaking Bad Movie',
        'Velvet Buzzsaw'
      ],
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('signIn() should return data', () => {
    service.signIn().subscribe(res => {
      expect(res.length).toEqual(3);
      expect(res[0].name).toEqual('Guilherme Gules Moreira');
      expect(res[0].email).toEqual('guilhermegules@gmail.com');
      expect(res[0].favFilms).toEqual([
        'Fight Club',
        'The irish man',
        'Bird Box',
        'El Camino: A Breaking Bad Movie',
        'The Platform'
      ]);
    });
    const req = httpMock.expectOne('http://localhost:3333/users');
    expect(req.request.method).toEqual('GET');

    req.flush(testUsers);
  });

  it('expected be undefined', () => {
    service.signIn().subscribe(res => {
      expect(res.length).toEqual(3);
      expect(res[4].name).toBeUndefined();
      expect(res[4].email).toBeUndefined();
      expect(res[4].favFilms).toBeUndefined();
    });
    const req = httpMock.expectOne('http://localhost:3333/users');
    expect(req.request.method).toEqual('GET');
  });
});
