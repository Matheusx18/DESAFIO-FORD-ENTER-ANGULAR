import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatheusFerreiraProject } from './matheus-ferreira-project';

describe('MatheusFerreiraProject', () => {
  let component: MatheusFerreiraProject;
  let fixture: ComponentFixture<MatheusFerreiraProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatheusFerreiraProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatheusFerreiraProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
