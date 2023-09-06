import type webpack from 'webpack'

import { buildDevServer } from './build-dev-server'
import { buildLoaders } from './build-loaders'
import { buildPlugins } from './build-plugins'
import { buildResolvers } from './build-resolvers'
import { type IBuildOptions } from './types/config'

export const buildConfig = (options: IBuildOptions): webpack.Configuration => {
    const { mode, paths, isDev, aliases } = options

    return {
        mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(aliases),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(paths),
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}
