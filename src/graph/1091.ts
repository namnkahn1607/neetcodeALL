/* 1091. shortest path in binary matrix */
// #: graph bfs
import { Queue } from "datastructures-js";

class src1091 {
    shortestPathBinaryMatrix(grid: number[][]): number {
        const N = grid.length;

        if (grid[0][0] || grid[N - 1][N - 1])
            return -1;

        const dirs = [0, 1, 0, -1, 0, 1, 1, -1, -1, 1];
        const qu = new Queue<number[]>([[0, 0]]);
        grid[0][0] = 1;
        let length = 1;

        while (!qu.isEmpty()) {
            const len = qu.size();

            for (let i = 0; i < len; ++i) {
                const [R, C] = qu.dequeue()!;

                if (R === N - 1 && C === N - 1)
                    return length;

                for (let i = 0; i < 9; ++i) {
                    const [newR, newC] = [R + dirs[i], C + dirs[i + 1]];

                    if (Math.min(newR, newC) >= 0 && Math.max(newR, newC) < N && grid[newR][newC] !== 1) {
                        qu.enqueue([newR, newC]);
                        grid[newR][newC] = 1;
                    }
                }
            }

            ++length;
        }

        return -1;
    }

    public static main(): void {
        // add binary matrix
        const grid: number[][] = [
            [0, 1, 0],
            [1, 0, 0],
            [1, 1, 0]
        ];

        // shortest path from top left to right bottom
        let ans: number = new src1091().shortestPathBinaryMatrix(grid);
        console.log(ans);
    }
}

src1091.main();

// more sols: https://neetcode.io/solutions/shortest-path-in-binary-matrix