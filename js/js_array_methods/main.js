const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for loop
for (let i = 0; i < companies.length; i++) {
  //   console.log(companies[i]);
}

// forEach
companies.forEach(function (company) {
  //   console.log(company);
});

companies.forEach((company) => {
  //   console.log(company.name);
});

// FILTER with for loop
let canDrink1 = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    // console.log(ages[i]);
    canDrink1.push(ages[i]);
  }
}

// console.log(canDrink);

// FILTER with filter()
const canDrink2 = ages.filter(function (age) {
  if (age >= 21) {
    return true;
  }
});

// console.log(canDrink2);

const canDrink3 = ages.filter((age) => age >= 21);

// console.log(canDrink3);

// Filter retial companies
// ES5:
const retailCompanies1 = companies.filter(function (company) {
  if (company.category === 'Retail') {
    return true;
  }
});

// console.log(retailCompanies1);

// ES6:
const retailCompanies2 = companies.filter(
  (company) => company.category === 'Retail'
);

// console.log(retailCompanies2);

// Get 80s companies
const eightiesCompanies = companies.filter(
  (company) => company.start >= 1980 && company.start < 1990
);

// console.log(eightiesCompanies);

// Get companies that lasted 10 years or more
const lastedTenYears = companies.filter(
  (company) => company.end - company.start >= 10
);

// console.log(lastedTenYears);

// MAP
// Create array of company names
const companyNames1 = companies.map(function (company) {
  return company.name;
});

// console.log(companyNames);

// const testMap = companies.map(function (company) {
//   //   return 1;
//   return `${company.name} [${company.start} - ${company.end}]`;
// });

const testMap = companies.map(
  (company) => `${company.name} [${company.start} - ${company.end}]`
);

console.log(testMap);

// square ages
// const agesSquare = ages.map((age) => Math.sqrt(age));
// const agesTimesTwo = ages.map((age) => age * 2);

// console.log(agesSquare);
// console.log(agesTimesTwo);

const ageMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);

// console.log(ageMap);

// SORT
// Sort companies by start year
const sortedCompanies1 = companies.sort(function (company1, company2) {
  if (company1.start > company2.start) {
    return 1;
  } else {
    return -1;
  }
});

// console.log(sortedCompanies1);

const sortedCompanies2 = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// console.log(sortedCompanies2);

// Sort ages
const sortAges1 = ages.sort((a, b) => a - b);

// console.log(sortAges1);

const sortAges2 = ages.sort((a, b) => b - a);

// console.log(sortAges2);

// REDUCE
// with for loop

// let agesSum1 = 0;

// for (let i = 0; i < ages.length; i++) {
//   agesSum += ages[i];
// }

// console.log(agesSum);

// with reduce()

// const agesSum2 = ages.reduce(function (total, age) {
//   return total + age;
// }, 0);

const agesSum2 = ages.reduce((total, age) => total + age, 0);

// console.log(agesSum2);

// Get total years for all companies
// const totalYears = companies.reduce(function (total, company) {
//   return total + (company.end - company.start);
// }, 0);

// const totalYears = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0
// );

// console.log(totalYears);

// Combine Methods

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
