export const queryConfiguration = (props) => {
     const { callwithUserData = false, url, baseUrl, ...extraProps } = props;
 
     const configuredObj = { url };
 
     if (callwithUserData) {
         configuredObj.credentials = "include";
     }
 
     // base url should contain domain + api_version if django request
     if (baseUrl) configuredObj.url = baseUrl + configuredObj.url;
 
     return { ...configuredObj, ...extraProps };
 };