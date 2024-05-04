// types for StatusCode with T(generic type)
export interface HttpResponse<T> {
 statusCode: HttpStatusCode;
 body: T;
}

export interface HttpRequest<B> {
 params?: any;
 headers?: any;
 body?: B;
}

export interface IController {
 handle(HttpRequest: HttpRequest<unknown>): Promise<HttpResponse<unknown>>;
}

export enum HttpStatusCode {
 OK = 200,
 CREATED = 201,
 BAD_REQUEST = 400,
 SERVER_ERROR = 500,
}