module.exports = class BaseAPI {
    constructor(client) {
        this.client = client;
        this.checkParam = function (param, param_name, param_type, required) {
            if (param === undefined || param === null) {
                if (required) {
                    throw new Error("Missing the required parameter: " + param_name);
                }else{
                    return param;
                }
            }
            if (param_type === "string" || param_type === "integer") {
                if (typeof (param) === "object") {
                    if (param[param_name] !== undefined) {
                        param = param[param_name]
                    } else {
                        if (required) {
                            throw new Error(JSON.stringify(param) + " does not have requried param: " + param_name);
                        }
                    }
                }
            }
            this.checkParamType(param, param_name, param_type);
            return param;
        }
        this.checkParamType = function (param, param_name, param_type) {
            if (param_type === "string") {
                if (typeof (param) !== "string") {
                    throw new Error(param_name+"'s type should be string, but real type is " + typeof (param));
                }
            } else if (param_type === "integer") {
                if (typeof (param) !== "number") {
                    throw new Error(param_name+"'s type should be integer, but real type is " + typeof (param));
                }
            }  else if (param_type === "array") {
                if (!Array.isArray(param)) {
                    throw new Error(param_name+"'s type should be array, but real type is " + typeof (param));
                }
            } else if (param_type === "file") {
                if (!param instanceof File) {
                    throw new Error(param_name+"'s type should be file, but real type is " + typeof (param));
                }
            } else {
                throw new Error("Unsupport type:" + param_type);
            }
        }
    }
}