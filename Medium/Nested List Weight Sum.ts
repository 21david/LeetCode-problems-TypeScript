function depthSum(nestedList: NestedInteger[]): number {
    let res = 0;
    
    const recurse = (nest: NestedInteger[], depth: number): void => {
        for (let item of nest) {
            if (item.isInteger()) {
                res += depth * item.getInteger();
            } else {
                recurse(item.getList(), depth + 1);
            }
        }
    }

    recurse(nestedList, 1);
    return res;
};

/*  
Drawing it like this helped me:

[Int, List, Int]
        |
      [Int, List, Int]
             |
           [Int, Int]

There should be a for loop checking the type of everything. 
For ints, immediately add to the result, depth should be known. 
For lists, it requires recursion with an increased depth.

TC: O(N) where N is number of ints
SC: O(D) where D is the max depth
*/

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     The result is undefined if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds
 *     The result is undefined if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */

