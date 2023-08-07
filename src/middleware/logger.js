const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.log('The action: ', action);
    // dispatch will be returned in case logger is the last one in the middleware chain
    const result = next(action);
    console.log('The new state: ', store.getState());
    console.groupEnd();

    return result;
};

export default logger;