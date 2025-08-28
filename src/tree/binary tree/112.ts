/* 112. path sum */
// #: tree + backtrack
import { BinaryTree, TreeNode } from "../binary tree";

class src112 {
    // 1. recursive DFS
    hasPathSum(root: TreeNode | null, target: number): boolean {
        if (!root) return false;

        target -= root.val;

        if (!root.left && !root.right)
            return target === 0;

        return this.hasPathSum(root.left, target)
            || this.hasPathSum(root.right, target);
    }

    // 2. iterative DFS
    hasPathSum2(root: TreeNode | null, target: number): boolean {
        if (!root) return false;

        const stack: [TreeNode, number][] = [[root, target - root.val]];

        while (stack.length > 0) {
            const [node, remain] = stack.pop()!;

            if (!node.left && !node.right && remain === 0)
                return true;

            if (node.right) stack.push([node.right, remain - node.right.val]);
            if (node.left) stack.push([node.left, remain - node.left.val]);
        }

        return false;
    }

    public static main(): void {
        // add binary trees
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]
        );

        const target: number = 22;

        // check if path sum to target exists within tree
        const solution = new src112();

        let ans1: boolean = solution.hasPathSum(root, target);
        console.log((ans1) ? "true" : "false");

        let ans2: boolean = solution.hasPathSum2(root, target);
        console.log((ans2) ? "true" : "false");
    }
}

src112.main();

// linked problems: 113, 437