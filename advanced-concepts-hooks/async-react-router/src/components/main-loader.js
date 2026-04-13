import delay from "../util/delay";

export function loader () {
    return {
        promise: delay("Fetched Data", 1000)
    };
};
