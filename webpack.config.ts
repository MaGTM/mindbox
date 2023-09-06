import path from 'path'

import { buildConfig } from './config/build/build-config'
import { type IBuildEnv, type IBuildPaths } from './config/build/types/config'

export default (env: IBuildEnv) => {
    const mode = env.mode || 'development'
    const PORT = env.port || 3000

    const isDev = mode === 'development'

    const buildPaths: IBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'app', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        publicHtml: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
    }

    const aliases = {
        '@app': path.resolve(__dirname, 'src/app/'),
        '@pages': path.resolve(__dirname, 'src/pages/'),
        '@shared': path.resolve(__dirname, 'src/shared/'),
        '@widgets': path.resolve(__dirname, 'src/widgets/'),
        '@features': path.resolve(__dirname, 'src/features/'),
    }

    return buildConfig({
        mode,
        isDev,
        paths: buildPaths,
        port: PORT,
        aliases,
    })
}
