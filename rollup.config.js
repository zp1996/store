import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

const prod = process.env.NODE_ENV === 'production',
    moduleName = 'store';

const { name, plugin } = function() {
    return prod ? {
        name: `${moduleName}.min.js`,
        plugin: [ uglify() ]
    } : {
        name: `${moduleName}.js`,
        plugin: []
    };
}();

const sourceMap = () => {
    return prod ? {} : {
        sourceMap: 'inline'
    };
};

export default Object.assign(sourceMap(), {
    entry: 'lib/index.js',
    format: 'iife',
    dest: `build/${name}`,
    moduleName,
    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**'
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify(
                process.env.NODE_ENV || 'development'
            )
        }),
        ...plugin
    ],
});
