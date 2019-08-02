const createAction = (type, payload = {}, error = false) => ({ type, payload, error });

export default createAction;