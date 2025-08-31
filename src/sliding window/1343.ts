/* 1343. number of subarray of size k and average >= threshold */
// #: sliding window

class src1343 {
    numOfSubarrays(arr: number[], k: number, threshold: number): number {
        const m: number = arr.length;
        let [avg, cnt, l] = [0, 0, 0];

        for (let r = 0; r < m; ++r) {
            avg += arr[r] / k;

            if (r - l + 1 === k) {
                cnt += (avg >= threshold) ? 1 : 0;
                avg -= arr[l] / k;
                ++l;
            }
        }

        return cnt;
    }

    public static main(): void {
        // add array, k and threshold
        const arr: number[] = [2, 2, 2, 2, 5, 5, 5, 8];
        const [k, threshold] = [3, 4];

        // count number of satisfied subarray
        let ans: number = new src1343().numOfSubarrays(arr, k, threshold);
        console.log(ans);
    }
}

src1343.main();