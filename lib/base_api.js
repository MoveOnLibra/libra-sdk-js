module.exports = class BaseAPI {
    constructor(client) {
        this.client = client;
        this.checkParam = function (param, param_name, param_type, required) {
            if (param === undefined || param === null) {
                if (required) {
                    throw new Error("Missing the required parameter: " + param_name);
                }else{
                    return;
                }
            }
            if (param_type === "string" || param_type === "integer") {
                if (typeof (param) === "object") {
                    if (param[param_name] !== undefined) {
                        param = param[param_name]
                    } else {
                        if (required) {
                            throw new Error(param + " does not own requried param: " + param_name);
                        }
                    }
                }
            }
            this.checkParamType(param, param_name, param_type);
        }
        this.checkParamType = function (param, param_name, param_type) {
            if (param_type === "string") {
                if (typeof (param) !== "string") {
                    throw new Error(param_name+"'s type is not string:" + typeof (param));
                }
            } else if (param_type === "integer") {
                if (typeof (param) !== "number") {
                    throw new Error(param_name+"'s type is not integer:" + typeof (param));
                }
            }  else if (param_type === "array") {
                if (!Array.isArray(param)) {
                    throw new Error(param_name+"'s type is not array:" + typeof (param));
                }
            } else if (param_type === "file") {
                if (!param instanceof File) {
                    throw new Error(param_name+"'s type is not file:" + typeof (param));
                }
            } else {
                throw new Error("Unsupport type:" + param_type);
            }
        }
    }
}