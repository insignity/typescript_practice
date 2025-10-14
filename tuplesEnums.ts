// const color: number[] = [23, 45, 234]
const color: [number, number, number] = [255, 0, 34];

type HttpResponse = [number, string];

const goodRes: HttpResponse = [200, "OK"];
goodRes.push(123);