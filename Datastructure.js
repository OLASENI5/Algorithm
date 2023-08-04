// Solution to problem one
function sumOfDistinctElements(set1, set2) {
    const combinedSet = new Set([...set1, ...set2]); // Combining both sets and converting to a Set to get distinct elements
    let sum = 0;

    for (const element of combinedSet) {
    sum += element;
    }

    return sum; // Calculating the sum of distinct elements
}

  // Test the function
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = sumOfDistinctElements(set1, set2);
  console.log(result); // Output: 13

  // Solution to problem two
function dotProduct(v1, v2) {
    if (v1.length !== v2.length) {
    throw new Error("Vectors must have the same length.");
    }

    let dotProductResult = 0;
    for (let i = 0; i < v1.length; i++) {
      dotProductResult += v1[i] * v2[i];
    }

    return dotProductResult;
}

function areVectorsOrthogonal(v1, v2) {
    const dotProductResult = dotProduct(v1, v2);
    return dotProductResult === 0;
}

function checkOrthogonalPairs(vectors) {
    for (let i = 0; i < vectors.length; i++) {
    const [v1, v2] = vectors[i];
    const result = areVectorsOrthogonal(v1, v2);
    console.log(`Vectors [${v1}] and [${v2}] are orthogonal: ${result}`);
    }
}

  // Test the function with n pairs of vectors
const vectorsToCheck = [
    [[1, 2], [2, -1]],
    [[3, 0], [0, 4]],
    [[2, -3], [3, 2]],
];
checkOrthogonalPairs(vectorsToCheck);