module.exports = function ({ types: t }) {
    return {
        visitor: {
            BlockStatement(path, state) { // state.opts 插件选项
                const { functionName} = state.opts;

                if (path.parent.key.name === functionName && path.node.body.length === 1) {
                    const body = path.node.body
                    const newBlockStatement = t.blockStatement(body.concat(
                        t.expressionStatement(
                            t.callExpression(
                                t.memberExpression(
                                    t.identifier('console'),
                                    t.identifier('log')
                                ),
                                [t.stringLiteral('World!')]
                            )
                        )
                    ))
                    path.replaceWith(newBlockStatement)
                }
            }
        }
    }
}