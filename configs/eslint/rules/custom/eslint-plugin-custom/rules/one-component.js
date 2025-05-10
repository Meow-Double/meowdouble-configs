const { ESLintUtils, AST_NODE_TYPES } = require('@typescript-eslint/utils');
const { useEffect } = require('react');

module.exports = ESLintUtils.RuleCreator.withoutDocs({
  meta: {
    type: 'problem',
    messages: {
      oneComponentInFile: 'File must contain only one component',
    },
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    let jsxArrowFunctionCount = 0;

    return {
      ArrowFunctionExpression(node) {
        let returnsJSX = false;

        if (
          node.body.type === AST_NODE_TYPES.JSXFragment ||
          node.body.type === AST_NODE_TYPES.JSXElement
        ) {
          returnsJSX = true;
        } else if (node.body.type === AST_NODE_TYPES.BlockStatement) {
          const returnStatement = node.body.body.find(
            (stmt) => stmt.type === AST_NODE_TYPES.ReturnStatement,
          );
          if (
            returnStatement &&
            returnStatement.argument &&
            (returnStatement.argument.type === AST_NODE_TYPES.JSXFragment ||
              returnStatement.argument.type === AST_NODE_TYPES.JSXElement)
          ) {
            returnsJSX = true;
          }
        }

        if (returnsJSX) {
          jsxArrowFunctionCount++;
        }

        if (returnsJSX && jsxArrowFunctionCount > 1) {
          context.report({
            node,
            messageId: 'oneComponentInFile',
          });
        }
      },
    };
  },
});
