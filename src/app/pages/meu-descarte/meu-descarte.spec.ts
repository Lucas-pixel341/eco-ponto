import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeuDescarte } from './meu-descarte';

describe('MeuDescarte', () => {
  let component: MeuDescarte;
  let fixture: ComponentFixture<MeuDescarte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuDescarte],
    }).compileComponents();

    fixture = TestBed.createComponent(MeuDescarte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
