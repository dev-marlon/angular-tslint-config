const path = require('path');

module.exports = {
    extends: ['tslint-config-prettier'],
    rulesDirectory: [
        path.join(path.dirname(require.resolve('codelyzer')), './'),
        path.join(path.dirname(require.resolve('tslint-plugin-prettier')), './'),
    ],
    rules: {
        prettier: [
            true,
            {
                'singleQuote': true,
                'tabWidth': 4,
                'trailingComma': 'es5'
            }
        ],
        'arrow-return-shorthand': true,
        'callable-types': true,
        'class-name': true,
        'comment-format': [
            true,
            'check-space'
        ],
        'curly': true,
        'deprecation': {
            'severity': 'warn'
        },
        'forin': true,
        'import-blacklist': [
            true,
            'rxjs/Rx'
        ],
        'interface-over-type-literal': true,
        'label-position': true,
        'member-access': [true, 'check-accessor'],
        'member-ordering': [
            true,
            {
                'order': [
                    'static-field',
                    'instance-field',
                    'static-method',
                    'instance-method'
                ]
            }
        ],
        'no-arg': true,
        'no-bitwise': true,
        'no-console': [
            true,
            'debug',
            'info',
            'time',
            'timeEnd',
            'trace'
        ],
        'no-construct': true,
        'no-debugger': true,
        'no-duplicate-super': true,
        'no-empty': false,
        'no-empty-interface': true,
        'no-eval': true,
        'no-inferrable-types': [
            true,
            'ignore-params',
            'ignore-properties'
        ],
        'no-misused-new': true,
        'no-non-null-assertion': true,
        'no-redundant-jsdoc': true,
        'no-shadowed-variable': true,
        'no-string-literal': false,
        'no-string-throw': true,
        'no-switch-case-fall-through': true,
        'no-unnecessary-initializer': true,
        'no-unused-expression': true,
        'no-use-before-declare': true,
        'no-var-keyword': true,
        'object-literal-sort-keys': false,
        'prefer-const': true,
        'radix': true,
        'triple-equals': [
            true,
            'allow-null-check'
        ],
        'typedef': [
            true,
            'call-signature',
            'parameter',
            'arrow-parameter',
            'member-variable-declaration'
        ],
        'unified-signatures': true,
        'variable-name': false,
        'no-output-on-prefix': true,
        'use-input-property-decorator': true,
        'use-output-property-decorator': true,
        'use-host-property-decorator': true,
        'no-input-rename': true,
        'no-output-rename': true,
        'use-life-cycle-interface': true,
        'use-pipe-transform-interface': true,
        'component-class-suffix': true,
        'directive-class-suffix': true,
        'ordered-imports': true
    }
};