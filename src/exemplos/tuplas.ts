const tuplaMap = new Map<number, number>();

tuplaMap.set(0, 0);

const tuplaSet = new Set<Function>();

function soma() {}

tuplaSet.add(soma);
tuplaSet.forEach((value) => value());
tuplaSet.has(soma);
