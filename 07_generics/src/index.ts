function echo<T extends { length: number }>(value: T): number {
    return value.length;
}


echo({length: 10})

echo({length: 20})