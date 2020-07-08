module.exports = function ({ types: t }) {
    return {
        visitor: {
            BinaryExpression(path) {
                if (path.node.operator === '>') {
                    path.replaceWith(
                        t.binaryExpression(
                            '<=',
                            path.node.left,
                            path.node.right
                        )
                    );
                }
            }
        }
    }
}