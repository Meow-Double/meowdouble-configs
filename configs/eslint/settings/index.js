module.exports = {
  'import/resolver': {
    node: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      moduleDirectory: ['node_modules'],
    },
  },
  alias: {
    map: [
      ['types', '@/types'],
      ['api', '@/api'],
      ['routes', '@/routes'],
      ['store', '@/store'],
      ['hooks', '@/hooks'],
      ['utils', '@/utils'],
      ['enums', '@/enums'],
      ['constants', '@/constants'],
      ['shared', '@/shared'],
      ['uikit', '@/uikit'],
      ['ui', '@/ui'],
      ['services', '@/services'],
      ['modules', '@/modules'],
      ['entities', '@/entities'],
      ['components', '@/components'],
      ['widgets', '@/widgets'],
      ['features', '@/features'],
      ['pages', '@/pages'],
      ['styles', '@/styles'],
      ['styles', './**.css'],
      ['assets', '@/assets'],
      ['svg', './**.svg'],
    ],
  },
};
