function bubbleSort(a) {
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

let arrayForBubbleSort = [5, 3, 6, 2, 1, 8];

bubbleSort(arrayForBubbleSort);
console.log(arrayForBubbleSort);