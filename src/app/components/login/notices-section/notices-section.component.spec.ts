import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticesSectionComponent } from './notices-section.component';

describe('NoticesSectionComponent', () => {
  let component: NoticesSectionComponent;
  let fixture: ComponentFixture<NoticesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
