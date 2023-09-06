import { type Configuration as DevServerConfiguration } from 'webpack-dev-server'

import { type IBuildOptions } from './types/config'

export const buildDevServer = (
    options: IBuildOptions,
): DevServerConfiguration => {
    const { port, paths } = options

    return {
        hot: true,
        open: true,
        port,
        static: {
            directory: paths.public,
        },
        compress: true,
        historyApiFallback: true,
    }
}
