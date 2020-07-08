# babel-plugins
babel 插件表

### babel-plugin-import-module
### babel-plugin-append-function-body
### babel-plugin-replace-operator




# babel 插件开发

## AST 核心节点类型

https://github.com/babel/babylon/blob/master/ast/spec.md

- BlockStatement: 块级表达式
- BinaryExpression: 二元表达式
- CallExpression: 函数调用表达式
- MemberExpression: 成员表达式
- Literal: 文字


### Literals

- RegExpLiteral
- NullLiteral
- BooleanLiteral
- NumericLiteral

### Statements 语句

- BlockStatement: 块级表达式
- ExpressionStatement
- EmptyStatement: 空语句
- DebuggerStatement： debugger 语句
- ReturnStatement
- LabeledStatement (以break / continue标签为前缀的语句)
- BreakStatement
- ContinueStatement
- IfStatement
- SwitchStatement
- ThrowStatement
- TryStatement
- WhileStatement
- DoWhileStatement
- ForStatement
- ForInStatement
- ForOfStatement

### Declarations 声明

- FunctionDeclaration
- VariableDeclaration

### Expressions

- Super
- Import
- ThisExpression
- ArrowFunctionExpression
- YieldExpression
- AwaitExpression
- ObjectExpression

    - ObjectProperty
    - ObjectMethod
    - Objectmember

- FunctionExpression
- UnaryExpression
- UpdateExpression
- BinaryExpression
- AssignmentExpression
- LogicalExpression
- MemberExpression
- BindExpression
- ConditionalExpression
- CallExpression
- NewExpression
- SequenceExpression
- DoExpression

### Template Literals

- TemplateLiteral
- TaggedTemplateExpression
- TemplateElement



### 其他说明

一元运算符
UnaryOperator: {
  "-" | "+" | "!" | "~" | "typeof" | "void" | "delete" | "throw"
}

UpdateOperator {
  "++" | "--"
}

二元运算符
BinaryOperator {
  "==" | "!=" | "===" | "!=="
     | "<" | "<=" | ">" | ">="
     | "<<" | ">>" | ">>>"
     | "+" | "-" | "*" | "/" | "%"
     | "|" | "^" | "&" | "in"
     | "instanceof"
     | "|>"
}

赋值运算符
AssignmentOperator {
  "=" | "+=" | "-=" | "*=" | "/=" | "%="
    | "<<=" | ">>=" | ">>>="
    | "|=" | "^=" | "&="
}

逻辑运算符
LogicalOperator {
  "||" | "&&" | "??"
}



## babel 插件 

Babel的核心lib:
- babel-core: Babel的核心库，提供了将代码编译转化的能力
- babel-types: 提供AST树节点的类型
- babel-template: 可以将普通字符串转化成AST，提供更便捷的使用
