/* 11. container with most water */
// #: 2 pointers + greed

class src11 {
    maxArea(heights: number[]): number {
        let [i, j] = [0, heights.length - 1];
        let ans = 0;

        while (i < j) {
            const [left, right] = [heights[i], heights[j]];
            ans = Math.max(ans, Math.min(left, right) * (j - i));

            if (left >= right)
                --j;
            else
                ++i;
        }

        return ans;
    }

    public static main(): void {
        // add bar heights
        const heights: number[] = [1, 7, 2, 5, 4, 7, 3, 6];

        // calculate the maxima area
        let ans: number = new src11().maxArea(heights);
        console.log(ans);
    }
}

src11.main();