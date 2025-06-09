import { CategoryApiService } from './category-api.service';

describe('CategoryApiService', () => {
  let service: CategoryApiService;

  beforeEach(() => {
    service = new CategoryApiService();
  });

  it('should categorize as Food', () => {
    expect(service.categorize('Dinner at hotel')).toBe('Food');
  });

  it('should categorize as Entertainment', () => {
    expect(service.categorize('watched a movie')).toBe('Entertainment');
  });

  it('should categorize as Travel', () => {
    expect(service.categorize('Flight ticket')).toBe('Travel');
  });

  it('should categorize as Grocery', () => {
    expect(service.categorize('grocery store')).toBe('Grocery');
  });

  it('should categorize as Uncategorized', () => {
    expect(service.categorize('Random thing')).toBe('Uncategorized');
  });
});
