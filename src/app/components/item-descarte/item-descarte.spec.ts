import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemDescarte } from './item-descarte';

describe('ItemDescarte', () => {
  let component: ItemDescarte;
  let fixture: ComponentFixture<ItemDescarte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemDescarte],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemDescarte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
