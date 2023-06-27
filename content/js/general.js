let blockTable = ['.first-block', '.second-block', '.third-block', '.fourth-block'];
let textTable = ['first-text', 'second-text', 'third-text', 'fourth-text'];

// API handler

$.ajax({
    url: 'https://randomuser.me/api/?results=4&inc=name',
    dataType: 'json',
    success: function (data) {

        for (let i = 0; i < blockTable.length; i++) {
            let $box = $(blockTable[i]);
            $box.append(`<div class="text-1 ${textTable[i]}">` + data.results[i].name.first + ' ' + data.results[i].name.last + '</div>');
        }

        setWidth();
    }
});

//brown-box width

function setWidth() {

    const wid = 174;

    for (let i = 0; i < blockTable.length; i++) {

        let curBlock = document.querySelector('.' + textTable[i]).innerHTML.trim().length;

        document.querySelector(blockTable[i]).style.width = `${wid + (curBlock * 65)}px`;
    }

}

