export class SortAnimation {
    barA: number;
    barB: number;
    array: number[];
    swapping: boolean;
    constructor(a, b, arr, swap) {
        this.barA = a;
        this.barB = b;
        this.array = arr;
        this.swapping = swap;
    }
}