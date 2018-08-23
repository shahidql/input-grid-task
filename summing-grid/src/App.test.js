import calculate from './calculate';

it('calculates the sum of 3 numbers less than 100000', () => {
  let digits = [30760,10000,50500];
  let total = 0;
  digits.map((d)=>{
    total += d;
  });
  expect(calculate(total)).toBe('91260');
});

it('calculates the sum of 3 numbers less than a Million', () => {
  let digits = [198760,100000,150500];
  let total = 0;
  digits.map((d)=>{
    total += d;
  });
  expect(calculate(total)).toBe('449K');
});

it('calculates the sum of 3 numbers greater than a Million', () => {
  let digits = [5598760,1550000,1250500];
  let total = 0;
  digits.map((d)=>{
    total += d;
  });
  expect(calculate(total)).toBe('8.40M');
});
