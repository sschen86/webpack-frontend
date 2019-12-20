// 二叉树的先序，中序，后序遍历

const tree = {
    value: 'A',
    left: {
        value: 'B',
        left: {
            value: 'D',
        },
        right: {
            value: 'E',
        },
    },
    right: {
        value: 'C',
        left: {
            value: 'F',
        },
    },
}

const allValues = [ preorderTraversal(tree), inorderTraversal(tree), postorderTraversal(tree) ]
const allValues2 = [ preorderTraversalWithStack(tree) ]

console.info({ allValues, allValues2 })

function preorderTraversal (tree) {
    const values = [ tree.value ]
    if (tree.left) {
        values.push(...preorderTraversal(tree.left))
    }
    if (tree.right) {
        values.push(...preorderTraversal(tree.right))
    }
    return values
}

function inorderTraversal (tree) {
    const values = []
    const value = tree.value

    if (tree.left) {
        values.push(...inorderTraversal(tree.left))
    }
    values.push(value)
    if (tree.right) {
        values.push(...inorderTraversal(tree.right))
    }

    return values
}

function postorderTraversal (tree) {
    const values = []
    if (tree.left) {
        values.push(...postorderTraversal(tree.left))
    }
    if (tree.right) {
        values.push(...postorderTraversal(tree.right))
    }
    values.push(tree.value)
    return values
}


function preorderTraversalWithStack (tree) {
    const values = []
    const stack = [ tree ]
    let curNode
    while ((curNode = stack.shift())) {
        values.push(curNode.value)
        if (curNode.right) {
            stack.unshift(curNode.right)
        }
        if (curNode.left) {
            stack.unshift(curNode.left)
        }
    }
    return values
}
