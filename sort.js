//Bubble Sort

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j+1] < arr[j]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([4,3,5,6,2,1]));

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let minIndex = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
            
        }
        if(minIndex !== i){
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]];
        }
    }
    return arr;
}

console.log(selectionSort([4,3,5,6,2,1]));

