function findClosestValueInBst(tree: any, target: number) {
    let stack = [tree];
    let nearestValue = tree.value;
    let diff = Infinity;

    while (stack.length > 0) {
        const current = stack.pop();
        if (Math.abs(current.value - target) < diff) {
            diff = Math.abs(current.value - target);
            nearestValue = current.value;
        }

        if (current.right) {
            stack.push(current.right)
        }

        if (current.left) {
            stack.push(current.left)
        }
    }

    return nearestValue;
}