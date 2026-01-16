import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display title when provided', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    const titleElement = fixture.nativeElement.querySelector('.card-title');
    expect(titleElement.textContent).toBe('Test Title');
  });

  it('should not display title section when title is not provided', () => {
    fixture.detectChanges();
    const headerElement = fixture.nativeElement.querySelector('.card-header');
    expect(headerElement).toBeNull();
  });

  it('should display footer when provided', () => {
    component.footer = 'Footer text';
    fixture.detectChanges();
    const footerElement = fixture.nativeElement.querySelector('.card-footer');
    expect(footerElement.textContent).toContain('Footer text');
  });

  it('should apply shadow class when shadow is true', () => {
    component.shadow = true;
    fixture.detectChanges();
    const cardElement = fixture.nativeElement.querySelector('.card');
    expect(cardElement.classList.contains('has-shadow')).toBe(true);
  });
});
