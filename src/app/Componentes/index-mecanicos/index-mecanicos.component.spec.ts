import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMecanicosComponent } from './index-mecanicos.component';

describe('IndexMecanicosComponent', () => {
  let component: IndexMecanicosComponent;
  let fixture: ComponentFixture<IndexMecanicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexMecanicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexMecanicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
