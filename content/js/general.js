const blockTable = ['.first-block', '.second-block', '.third-block', '.fourth-block'];
const textTable = ['first-text', 'second-text', 'third-text', 'fourth-text'];
const inputTable = ['#input-first', '#input-second', '#input-third', '#input-fourth'];

// API handler

$.ajax({
    url: 'https://randomuser.me/api/?results=4&inc=name',
    dataType: 'json',
    success: function (data) {

        for (let i = 0; i < blockTable.length; i++) {
            let $box = $(blockTable[i]);
            $box.append(`<div class="text-1 ${textTable[i]}">` + data.results[i].name.first + ' ' + data.results[i].name.last + '</div>');

            document.querySelector(inputTable[i]).placeholder = data.results[i].name.first + ' ' + data.results[i].name.last;
        }

        setWidth();
    }
});

//brown-box auto width

function setWidth() {

    const wid = 174;

    for (let i = 0; i < blockTable.length; i++) {

        let curBlock = document.querySelector('.' + textTable[i]).innerHTML.trim().length;

        document.querySelector(blockTable[i]).style.width = `${wid + (curBlock * 65)}px`;
    }

}

//input handler (onlick, change text)

const buttonTable = ['#change-first', '#change-second', '#change-third', '#change-fourth'];

const input1 = document.querySelector(inputTable[0]);
const input2 = document.querySelector(inputTable[1]);
const input3 = document.querySelector(inputTable[2]);
const input4 = document.querySelector(inputTable[3]);


document.querySelector(buttonTable[0]).addEventListener("click", () => {
    if (input1.value != '') {
        document.querySelector('.' + textTable[0]).innerHTML = input1.value;
        changePlaceholder(input1);
    }
})

document.querySelector(buttonTable[1]).addEventListener("click", () => {
    if (input2.value != '') {
        document.querySelector('.' + textTable[1]).innerHTML = input2.value;
        changePlaceholder(input2);
    }
})

document.querySelector(buttonTable[2]).addEventListener("click", () => {
    if (input3.value != '') {
        document.querySelector('.' + textTable[2]).innerHTML = input3.value;
        changePlaceholder(input3);
    }
})

document.querySelector(buttonTable[3]).addEventListener("click", () => {
    if (input4.value != '') {
        document.querySelector('.' + textTable[3]).innerHTML = input4.value;
        changePlaceholder(input4);
    }
})

//takes in reference to input block, changes its placeholder and zeroes text

function changePlaceholder(i) {
    i.placeholder = i.value;
    i.value = '';
}

//button change all

document.querySelector("#button-change-all").addEventListener("click", () => {
    if (input1.value != '') {
        document.querySelector('.' + textTable[0]).innerHTML = input1.value;
    }
    if (input2.value != '') {
        document.querySelector('.' + textTable[1]).innerHTML = input2.value;
    }
    if (input3.value != '') {
        document.querySelector('.' + textTable[2]).innerHTML = input3.value;
    }
    if (input4.value != '') {
        document.querySelector('.' + textTable[3]).innerHTML = input4.value;
    }
})