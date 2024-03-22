// utility functions

const debounce = (callback, delay = 1000) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            callback.apply(null, args);
        }, delay);
    };
};

// let timeoutId;
// const onInput = event => {
//     if (timeoutId) {
//         clearTimeout(timeoutId);
//     }
//     timeoutId = setTimeout(() => {
//         fetchData(event.target.value);
//     }, 1000);
// }