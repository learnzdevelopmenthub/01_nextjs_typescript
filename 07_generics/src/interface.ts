interface ApiResult<T> {
    success: boolean,
    data: T
}

interface User {
    id: number;
    name: string;
}


const userResult: ApiResult<User> = {
    success: true,
    data: { id: 1, name: "Kumar"}
}

userResult.success

const productResult: ApiResult<string[]> = {
    success: true,
    data: ["laptop", "Mobiles"]
}

productResult.data