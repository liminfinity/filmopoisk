/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SERVER_HOST: string
    readonly VITE_SERVER_PORT: number
    readonly VITE_SERVER_PROTOCOL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
