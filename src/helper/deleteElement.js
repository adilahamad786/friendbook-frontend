export const deleteElement = (arr, itemId) => {
    const index = arr.findIndex(item => item._id === itemId);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr;
}