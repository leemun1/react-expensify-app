import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should add up to 0 if no expenses', () => {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
});

test('should correctly add up single expense', () => {
    const result = selectExpensesTotal([ expenses[0] ]);
    expect(result).toBe(195);
});

test('should correctly add up multiple expenses', () => {
    const result = selectExpensesTotal([ expenses[0], expenses[1] ]);
    expect(result).toBe(109695);
});