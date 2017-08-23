// Mr. Richman has a sum of money, 'P', that he wants to invest, and he wants to know how many years, 'Y', this sum needs to accrue interest, 'I' in order to  get to the desired amount, 'D'. Every year, the new sum is re-invested yearly after paying tax at a specific rate on the accrued interest.

// Write a function that tells Mr. Richman how many years he'll need to keep his money in the bank to get to the desired amount.
// function calculateYears(principal, interestRate, taxRate, desiredAmount){}

// For example:
// calculateYears(1000, 0.05, 0.18, 1100) ==> 3

// After 1yr, P = 1041.00
// After 2yr, P = 1083.86
// After 3yr, P = 1128.30


/*
year 1 principal *interest = 1050
//new interest = interest - interest*tax;
principal * (newint^y) = amount;
newint^y = amount/principal

y*log(newint) = log(

newint = .041

.04139
.017




 */
function calculateYears(principal, interest, tax, desired) {
 return Math.ceil(
     Math.log(desired/principal)/Math.log( 1 + interest - interest*tax)

 );
}

var ans = calculateYears(1000,0.05,0.18,1100);
console.log(ans);