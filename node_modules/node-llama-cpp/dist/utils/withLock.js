const locks = new Map();
export async function withLock(scope, key, callback) {
    while (locks.get(scope)?.has(key)) {
        await locks.get(scope)?.get(key);
    }
    const promise = callback();
    if (!locks.has(scope))
        locks.set(scope, new Map());
    locks.get(scope).set(key, promise);
    try {
        return await promise;
    }
    finally {
        locks.get(scope)?.delete(key);
        if (locks.get(scope)?.size === 0)
            locks.delete(scope);
    }
}
//# sourceMappingURL=withLock.js.map