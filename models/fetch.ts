/*
  toast: {
    pending: {
      enable: True,
      msg: "fetching ${url}",
      delay: 500,
    },
    success: {
      enable: True,
      msg: "fecth done",
    },
    error: {
      enable: True,
      msg: "fecth done",
    },
  }
*/

export interface ToastFetchStatusOPtions {
  enable?: boolean;
  msg?: string;
  delay?: number;
  duration?: number;  
}

export interface ToastFetchOptions {
  pending?: ToastFetchStatusOPtions;
  success?: ToastFetchStatusOPtions;
  error?: ToastFetchStatusOPtions;
}

export interface FetchOptions {
  method?: "GET" | "HEAD" | "PATCH" | "POST" | "PUT" | "DELETE"
  headers?: any
  toast?: ToastFetchOptions
  responseType?: "blob" | "text" | "arrayBuffer" | "stream" | "json" //string //ResponseType
  body?: any
  params?: any
  query?: any
}

