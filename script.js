                        //Intersection of two arrays
 
function intersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
  }
  
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 4, 5, 6, 7];
  const result = intersection(array1, array2);
  document.write("Intersecting two arrays : ",result,"<br>","<br>");   
  
  
                    //Difference of two arrays


  function difference(arr1, arr2) {
    return arr1.filter(value => !arr2.includes(value));
  }
  
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [3, 4, 5, 6, 7];
  const res1 = difference(arr1, arr2);
  
  
  document.write("Difference between two arrays : ",res1,"<br>","<br>")
 


                     //Comparing two arrays of equality

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

let a1 = [1, 2, 3];
let a2 = [1, 2, 3];
let a3 = [1, 2, 4];

document.write('Array1 equals Array2 :', arraysEqual(a1, a2),"<br>"); // true
document.write('Array1 equals Array3 :', arraysEqual(a1, a3),"<br>","<br>"); // false

                         //Converting array of objects

let arrayOfObjects = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Joe' }
];

let convertedArray = arrayOfObjects.map(obj => [obj.id, obj.name]);
document.write('Converted Array:', convertedArray,"<br>","<br>");
                                  


                //  Creating an Array of Arrays
let arrayOfArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
document.write('Array of Arrays : ', arrayOfArrays)