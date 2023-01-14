const suspended = {};

export function registerSuspend(uuid, promise) {
    suspended[uuid] = promise;
}

export function getSuspended(uuid) {
    const promise = suspended[uuid];
    delete suspended[uuid];
    return promise;
}
