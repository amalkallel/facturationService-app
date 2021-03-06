import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFacturesComponent } from './liste-factures.component';

describe('ListeFacturesComponent', () => {
  let component: ListeFacturesComponent;
  let fixture: ComponentFixture<ListeFacturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeFacturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
