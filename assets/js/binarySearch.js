function binarySearchFunction(arr, x) { 
   
    let start=0, end=arr.length-1; 
          
    while (start<=end){ 
        
        let mid=Math.floor((start + end)/2); 
   
        if (arr[mid]===x) {
            return mid; 
        }
        
        else if (arr[mid] < x)  
             start = mid + 1; 
        else
             end = mid - 1; 
    } 
   
    return "Element not found!"; 
} 

let arr = [1, 3, 5, 7, 8, 9]; 
let x = 8; 

let result = binarySearchFunction(arr, x);

console.log(result);