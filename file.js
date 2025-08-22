export default function mergeAndSort() {
    // Take user input
    let listONE = prompt("Enter elements for List ONE (comma separated):").split(",").map(Number);
    let listTWO = prompt("Enter elements for List TWO (comma separated):").split(",").map(Number);

    let merged = [];
    let k = 0;

    
    for (let i = 0; i < listONE.length; i++) {
        merged[k] = listONE[i];
        k++;
    }
    console.log("ListOne Elements into temporary array = " + "[" + merged + "]");

    
    for (let i = 0; i < listTWO.length; i++) {
        merged[k] = listTWO[i];
        k++;
    }
    console.log("ListTwo Elements merged into temporary array = " + "[" + merged + "]");
    console.log("Now length of merged array is = " + k);

    // Bubble Sort
    for (let i = 0; i < k - 1; i++) {
        for (let j = 0; j < k - i - 1; j++) {
            if (merged[j] > merged[j + 1]) {
                let temp = merged[j];
                merged[j] = merged[j + 1];
                merged[j + 1] = temp;
            }
        }
    }

    console.log("Sorted Array = " + "[" + merged + "]");
}

mergeAndSort();
