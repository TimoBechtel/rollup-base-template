import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import html from 'rollup-plugin-html2';
import { terser } from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';
import cssnano from 'cssnano';
import postcssPresetEnv from 'postcss-preset-env';
import normalize from 'postcss-normalize';

const dev = process.env.ROLLUP_WATCH;

export default {
  input: 'src/app.ts',
  output: {
    file: 'public/bundle.js',
    sourcemap: dev,
  },
  plugins: [
    dev &&
      serve({
        port: 3000,
        contentBase: 'public/',
      }),
    dev && livereload(),
    del({
      targets: 'public/*',
      runOnce: dev,
    }),
    resolve({
      extensions: ['.mjs', '.js', '.json', '.node', '.ts'],
    }),
    commonjs(),
    babel({
      extensions: ['.js', '.ts'],
      exclude: ['node_modules/**'],
      presets: [
        '@babel/preset-typescript',
        ...(!dev ? ['@babel/preset-env'] : []),
      ],
    }),
    postcss({
      extract: true,
      plugins: [
        normalize({ forceImport: true }),
        ...(!dev ? [postcssPresetEnv, cssnano] : []),
      ],
    }),
    !dev && terser(),
    html({
      template: 'src/template.html',
      fileName: 'index.html',
      minify: dev
        ? false
        : {
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: true,
          },
    }),
  ],
};
