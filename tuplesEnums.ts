// const color: number[] = [23, 45, 234]
const color: [number, number, number] = [255, 0, 34];

type HttpResponse = [number, string];

const goodRes: HttpResponse = [200, "OK"];
goodRes.push(123);

const responses: HttpResponse[] = [[404, "not found"], [200, "ok"]];
responses.push([20, "23"])

enum directions { left, right, top, bottom }

enum OrderStatus {
    PENDING = 10, 
    SHIPPED, 
    DELIVERED, 
    RETURNED
}

const myStatus = OrderStatus.DELIVERED

function isDelivered(status: OrderStatus){
    return status === OrderStatus.DELIVERED
}

isDelivered(OrderStatus.RETURNED)

enum ArrowKeys {
    UP = 'up',
    DOWN = 'down',
    LEFT = 'left',
    RIGHT = 'right',
    ERROR = 234
}