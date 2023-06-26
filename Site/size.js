const wid = 174;

let blockTable = ['.first-block', '.second-block', '.third-block', '.fourth-block'];
let textTable = ['.first-text', '.second-text', '.third-text', '.fourth-text'];

for (let i = 0; i < blockTable.length; i++) {

    let curBlock = document.querySelector(textTable[i]).innerHTML.trim().length;

    document.querySelector(blockTable[i]).style.width = `${wid + (curBlock * 65)}px`;
}
