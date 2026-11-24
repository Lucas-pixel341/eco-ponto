import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PontosColeta } from './pontos-coleta';

describe('PontosColeta', () => {
  let component: PontosColeta;
  let fixture: ComponentFixture<PontosColeta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PontosColeta],
    }).compileComponents();

    fixture = TestBed.createComponent(PontosColeta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
