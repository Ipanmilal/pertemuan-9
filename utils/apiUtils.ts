// apiUtils.ts

interface RequestParams {
    protocol: string;
    host: string;
  }
  
  export function getRequestParams(): RequestParams {
    const protocol: string = window.location.protocol;
    const host: string = window.location.host;
    
    return {
      protocol,
      host,
    };
  }