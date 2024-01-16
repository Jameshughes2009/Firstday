// TODO: What does 'this' refer to?
console.log(this); // gobal object -> 
//Browser log window and termial
// (->)log files (empty objects) 

// TODO: What does 'this' refer to?
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// TODO: What will this log? 
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 100); 
   }
   //helloThat(); this keyword is global/winow
};

// TODO: What will this log? 
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
