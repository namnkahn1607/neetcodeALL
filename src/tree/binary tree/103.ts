/* 103. binary tree zigzag level order traversal */
// #: tree + bfs
import { BinaryTree, TreeNode } from "../binary tree";
import { Queue } from "datastructures-js";

class src103 {
    zigzagLevelOrder(root: TreeNode | null): number[][] {
        if (!root) return [];

        const ans: number[][] = [];
        const queue = new Queue<TreeNode>([root]);
        let curLevel = -1;

        while (!queue.isEmpty()) {
            ++curLevel;
            let level: number[] = [];

            for (let i = queue.size() - 1; i >= 0; --i) {
                const cur: TreeNode = queue.dequeue();
                level.push(cur.val);

                if (cur.left) queue.enqueue(cur.left);
                if (cur.right) queue.enqueue(cur.right);
            }

            if (curLevel % 2 === 1)
                level.reverse();

            ans.push(level);
        }

        return ans;
    }

    public static main(): void {
        // add binary tree
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [3, 9, 20, null, null, 15, 7]
        );

        // zigzag level order traversal on tree
        let ans: number[][] = new src103().zigzagLevelOrder(root);

        for (const vec of ans)
            console.log(vec.join(" "));
    }
}

src103.main();