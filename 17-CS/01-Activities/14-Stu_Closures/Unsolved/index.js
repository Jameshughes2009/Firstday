// TODO: Complete the 'counter' function below.
function counter() {

    // let money = 9000;
    // let gold = 100000;

    // return{
    //     displayMoney: function() {
    //         console.log(`you have this much $${money} and this much $${gold}`);
    //     },
    //     addToMoney: function(amount) {
    //         money += amount
    //     }
    // }
    let count = 0;

    return {
        increment: function() {
            return ++count;
        }
    }
}

// const myBank = counter();

// myBank.displayMoney();
console.log(counter)
module.exports = counter;

