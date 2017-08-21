import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieFactureComponent } from './saisie-facture.component';

describe('SaisieFactureComponent', () => {
  let component: SaisieFactureComponent;
  let fixture: ComponentFixture<SaisieFactureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaisieFactureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
