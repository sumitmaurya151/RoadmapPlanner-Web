export const queryConfiguration = (props) => {
    const { callwithUserData = false, url, baseUrl, ...extraProps } = props;

    const configuredObj = { url };

    if (callwithUserData) {
        configuredObj.credentials = "include";
    }

    if (baseUrl) configuredObj.url = baseUrl + configuredObj.url;

    return { ...configuredObj, ...extraProps };
};

export const convertObjectToFormData = (obj) =>{
    let formData = new FormData()
    for (const key in object) {
        formData.append(key,obj[key])
    }
    return formData;
}

