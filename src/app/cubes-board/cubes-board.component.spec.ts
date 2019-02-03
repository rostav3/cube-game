import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubesBoardComponent } from './cubes-board.component';

describe('CubesBoardComponent', () => {
  let component: CubesBoardComponent;
  let fixture: ComponentFixture<CubesBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubesBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubesBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
