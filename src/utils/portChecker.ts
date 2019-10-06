import getPort from 'get-port';

/**
 * Check if port is available in os or generate random available
 * @param port: number
 */

let portChecker = async (port: number) => {
    return await getPort({ port });
    // Will use 4000 if available, otherwise fall back to a random port
};

export { portChecker }