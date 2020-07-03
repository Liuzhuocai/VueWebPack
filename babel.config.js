

// const   babelrcRoots=[
//   '.',
//   './platform-module-web'
// ]



module.exports = function (api) {
    api.cache(true);

    const presets=[
        ["@vue/babel-preset-jsx"],
        ["@babel/preset-env", {
            // targets:{
            //     ie:11
            // },
            "useBuiltIns": "usage",
            "corejs": 3,
            'modules':"commonjs",
            debug: false
        }]
    ];
    // const   include=['./node_modules/@ul','./platform-module-web'];
    // const only=[];
    const babelrcRoots=[
        '.',
        './plateform-module-web',
        './platform-app-orgManager'
    ]
    return {
        presets,
        // babelrcRoots
        // include,
    };
}
