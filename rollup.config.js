import fs from 'fs'
import typescript from '@rollup/plugin-typescript'
import json from 'rollup-plugin-json'
import nodeResolve from 'rollup-plugin-node-resolve'
import cjs from 'rollup-plugin-commonjs'
import minify from 'rollup-plugin-babel-minify'
import { basename } from 'path'

/* eslint-env node */

const makeElementConfig = name => ({
  input: `./src/elements/${name}.tsx`,
  output: {
    file: `./dist/${name}.min.js`,
    format: 'esm',
  },
  plugins: [
    typescript({
      baseUrl: 'src',
      paths: {
        react: ['./react-loader.ts'],
      },
    }),
    json(),
    nodeResolve(),
    cjs(),
    minify(),
  ],
})

const elementConfig = fs
  .readdirSync(`${__dirname}/src/elements`)
  .filter(f => fs.statSync(`${__dirname}/src/elements/${f}`).isFile())
  .map(f => basename(f, '.tsx'))
  .map(makeElementConfig)

export default elementConfig
