import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CategoryApiService {
  categorize(description: string): string {
    const desc = description.toLowerCase();
    if (desc.includes('hotel') || desc.includes('restaurant')) return 'Food';
    if (desc.includes('movie')) return 'Entertainment';
    if (desc.includes('flight') || desc.includes('taxi')) return 'Travel';
    if (desc.includes('grocery') || desc.includes('store')) return 'Grocery';
    return 'Uncategorized';
  }
}
