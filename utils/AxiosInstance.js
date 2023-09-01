
import Axios from "axios";

export const transitApi = Axios.create({
  baseURL: 'https://www.transitfastautos.com/api'
});

// Api Request Interceptor
transitApi.interceptors.request.use(async (config) => {
    const authToken = typeof window !== 'undefined' && localStorage.getItem('accessToken')
    // add auth fields if exists in cookies
  
    // config.headers.Platform = 'WEB';
    // config.headers.token = JAVA_API_TOKEN;
  // console.log("authToken")
  // console.log(authToken)
    if (authToken) {
      config.headers.Authorization = authToken;
    }
  
    return config;
  });
  
  // Api Response Interceptor
  transitApi.interceptors.response.use(
    (response) => response,
    (error) => {
      // If server response unauthorized
      if (error?.response?.status === 401) {
        // global.store.dispatch({ type: 'auth/showLogin' });
      }
  
      return Promise.reject(error);
    },
  );