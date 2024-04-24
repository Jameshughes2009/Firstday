const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];

// TODO: Complete the linearSearch function below.
const linearSearch = (array, element) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            results.push(i);
        }
    } if (results.length === 0) {
        results.push(-1);
    }

    return results;
};

console.log(linearSearch(arr,7));
