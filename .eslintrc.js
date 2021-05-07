module.exports = {
    env: {
        es6: true,
        node: true
    },
    plugins: ['ghost'],
    extends: [
        'plugin:ghost/node'
    ],
    rules: {
        // @TODO: remove this rule once it's turned into "error" in the base plugin
        'no-shadow': 'error',
        'no-var': 'error',
        'one-var': [2, 'never'],
        // @TODO: enable this for all components once it gets a bit quieter
        'ghost/ghost-custom/no-cross-requires': ['warn', {shared: true, server: false, frontend: false}]
    }
};
