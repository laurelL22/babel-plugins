/*
 * babel插件编写的最佳实践
 * @Author: lihuan7@xiaomi.com 
 * @Date: 2020-06-24 17:57:37 
 * @Last Modified by: lihuan7
 * @Last Modified time: 2020-06-24 17:58:01
 */

function isAssignment(node) {
    return node && node.operator === opts.operator + "=";
}

function buildAssignment(left, right) {
    return t.assignmentExpression("=", left, right);
}