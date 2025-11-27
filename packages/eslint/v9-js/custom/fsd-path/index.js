import { ESLintUtils } from '@typescript-eslint/utils';
import path from 'path';
const layers = {
    entities: 'entities',
    shared: 'shared',
    pages: 'pages',
    features: 'features',
    widgets: 'widgets',
};
export default ESLintUtils.RuleCreator.withoutDocs({
    meta: {
        type: 'problem',
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        return {
            ImportDeclaration(node) {
                const importTo = node.source.value;
                const fromFileName = context.getFilename();
                console.log(shouldBeRelative(fromFileName, importTo));
                if (shouldBeRelative(fromFileName, importTo)) {
                    context.report({
                        node,
                        message: 'Within one slice, paths must be relative',
                    });
                }
            },
        };
    },
});
function isPathRelative(path) {
    return path === '.' || path.startsWith('./') || path.startsWith('../');
}
function shouldBeRelative(from, to) {
    if (isPathRelative(to)) {
        return false;
    }
    const toArray = to.split('/');
    const toLayer = toArray[1];
    const toSlice = toArray[2];
    if (!toLayer || !toSlice || !layers[toLayer]) {
        return false;
    }
    const normilizedPath = path.toNamespacedPath(from);
    const projectFrom = normilizedPath.split('src');
    if (!projectFrom[1]) {
        return false;
    }
    const fromArray = projectFrom[1].split('/');
    const formLayer = fromArray[1];
    const fromSlice = fromArray[2];
    if (!formLayer || !fromSlice || !layers[formLayer]) {
        return false;
    }
    return formLayer == toLayer && fromSlice !== toSlice;
}
