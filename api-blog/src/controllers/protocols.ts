// types for StatusCode with T(generic type)
export interface HttpResponse<T> {
 statusCode: number;
 body: T | string;
}