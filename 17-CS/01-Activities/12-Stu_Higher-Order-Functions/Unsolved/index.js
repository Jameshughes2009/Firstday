const grades = [56, 78, 99, 85];

// TODO: Complete the 'findAverage' function below.
function findAverage(accumulator, currentValue, index, array) {
    if (index === array.length -1){
        // dividing by how many elements are in the give arrey = 4
        return (accumulator + currentValue) / array.length;
    }
    return accumulator + currentValue;
    //add the current value to our total 
}

// TODO: Pass the 'findAverage' into the reduce method.
let gradeAverage = grades.reduce(findAverage);

//see results with a consle log
console.log(gradeAverage);
