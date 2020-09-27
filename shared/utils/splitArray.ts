function splitArray<T>(arr: T[], length: number): T[][] {
    const result: T[][] = Array.from({ length }, () => []);
    for (let i = 0; i < arr.length; i++) {
        result[i % length].push(arr[i]);
    }
    return result;
}

export default splitArray;
