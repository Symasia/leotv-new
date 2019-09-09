const errorMethods = {
    minLength: (fieldValue, [limit, message]) => {
      return fieldValue.length < limit
        ? message.replace("%v", `${limit - fieldValue.length}`)
        : "";
    },
    maxLength: (fieldValue, [limit, message]) => {
      return fieldValue.length > limit ? message.replace("%v", limit) : "";
    },
    pattern: (fieldValue, [expression, message]) => {
      return RegExp(expression, "i").test(fieldValue) ? "" : message;
    }
  };
  
  export default errorMethods;
  