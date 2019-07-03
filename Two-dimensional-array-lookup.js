function Find(target, array)
{
    // write code here
    //拿到行数和列数
    let row = array.length;
    let col = array[0].length;
    //从左下角开始
    let currentRow = row - 1;
    let currentCol = 0;
    while(currentRow >= 0 && currentCol <= col - 1) {
        if (target > array[currentRow][currentCol]) {
            currentCol ++
        }else if (target < array[currentRow][currentCol]) {
            currentRow --
        }else {
            return true
        }
    }
    return false
}
module.exports = {
    Find : Find
};