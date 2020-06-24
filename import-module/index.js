module.exports = function ({ types: t }) {
    return {
        visitor: {
            ImportDeclaration(path) {
                const specifiers = path.node.specifiers
                const source = path.node.source
            
                if(!t.isImportDefaultSpecifier(specifiers[0])) {
                  const myImportDeclaration = specifiers.map(specifier => {
                    return t.importDeclaration(
                      [t.importDefaultSpecifier(specifier.local)],
                      t.stringLiteral(`${source.value}/${specifier.imported.name}`)
                    )
                  })
            
                  path.replaceWithMultiple(myImportDeclaration)
                }
            }
        }
    }
}