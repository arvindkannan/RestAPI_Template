

export interface IServerConfiguration {
    ssl: boolean, port: number, hostname: string
}

export interface IServerConfigurations {
    [key: string]: IServerConfiguration
}

export function getEnvironment(): string {
    return process.env.NODE_ENV || 'development';
}

/**
 * Get configuration for Server
 * @param configs
 */
export function getConfiguration(configs: IServerConfigurations): IServerConfiguration {
    const env = getEnvironment();
    if (configs && configs[env]) return configs[env];
    return configs[env];
}