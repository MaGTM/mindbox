export type Mode = 'production' | 'development'

export interface IBuildPaths {
    entry: string
    build: string
    publicHtml: string
    public: string
}

export interface IBuildOptions {
    mode: Mode
    paths: IBuildPaths
    isDev: boolean
    port: number
    aliases: Record<string, string>
}

export interface IBuildEnv {
    mode: Mode
    port: number
}
