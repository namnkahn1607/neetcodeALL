/* 437. path sum 3 */
// #: tree + dfs
import { BinaryTree, TreeNode } from "../binary tree";

class src437 {
    pathSum(root: TreeNode | null, targetSum: number): number {

    }

    public static main(): void {
        // add binary tree
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]
        );

        const target: number = 8;

        // calculate number of paths summing to target
        let ans: number = new src437().pathSum(root, target);
        console.log(ans);
    }
}

src437.main();

// linked problem: 112, 113