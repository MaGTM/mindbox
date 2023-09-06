import HtmlWebpackPlugin from 'html-webpack-plugin'
import type webpack from 'webpack'

import { type IBuildPaths } from './types/config'

export const buildPlugins = ({
    publicHtml,
}: IBuildPaths): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
            template: publicHtml,
        }),
    ]
}
