import type webpack from 'webpack'

export const buildResolvers = (
    aliases: Record<string, string>,
): webpack.ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],

        alias: aliases,
    }
}
