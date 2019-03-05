var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var count = 10;

function activeTask(taskNumber) {
    let template = document.getElementById('taskTemplate' + taskNumber).content;
    let templateClone = template.cloneNode(true);
    output(templateClone);
}

function output(html) {
    let output = document.getElementById('output');
    output.innerHTML = '';
    output.append(html);
}

function setRusHello() {
    let helloButon = document.getElementById('helloButton');
    helloButon.setAttribute('value', 'Привет!');
}

function addListNumbers() {
    var listElements = getOutput().getElementsByTagName('li');
    for (let i = 0; i < listElements.length; i++) {
        listElements[i].innerText = i;
    }
}

function calculate(operation) {
    let firstValue = +document.getElementById('firstValue').value;
    let secondValue = +document.getElementById('secondValue').value;
    document.getElementById('result').innerText = getResult(firstValue, secondValue, operation);
}

function getResult(firstValue, secondValue, operation) {
    switch (operation) {
        case '+':
            return firstValue + secondValue;
        case '-':
            return firstValue - secondValue;
        case '*':
            return firstValue * secondValue;
        case '/':
            return firstValue / secondValue;
    }
}

function getOutput() {
    return document.getElementById('output');
}

function transformText() {
    let output = getOutput();
    let bTag = output.getElementsByTagName('b')[0];
    output.removeChild(bTag);
    let h2Tag = document.createElement('h3');
    h2Tag.innerText = bTag.innerText;
    output.appendChild(h2Tag);
}

function addFirstList() {
    let ulElement = getOutput().getElementsByTagName('ul')[0];
    let firstChild = ulElement.firstChild;
    let liElement = document.createElement('li');
    liElement.innerText = 'Первый элемент списка';
    ulElement.insertBefore(liElement, firstChild);
}

function createChessBoard() {
    let output = getOutput();
    output.innerHTML = '';
    let tableElement = document.createElement('table');
    for (let rowIndex = 0; rowIndex < count; rowIndex++) {
        let rowElement = document.createElement('tr');
        for (let columnIndex = 0; columnIndex < count; columnIndex++) {
            let columnElement = document.createElement('td');
            if ((rowIndex != 0 && rowIndex != count - 1) && (columnIndex == 0 || columnIndex == count - 1)) {
                columnElement.innerText = count - rowIndex - 1;
            }
            if ((rowIndex == 0 || rowIndex == count - 1) && (columnIndex != 0 && columnIndex != count - 1)) {
                columnElement.innerText = chars[columnIndex - 1];
            }
            if (columnIndex != 0 && columnIndex != count - 1 && rowIndex != 0 && rowIndex != count - 1) {
                columnElement.classList.add('border');
                if ((columnIndex + rowIndex) % 2 == 0) {
                    columnElement.classList.add('white');
                } else {
                    columnElement.classList.add('black');
                }
            }
            setImage(columnElement, columnIndex, rowIndex);
            columnElement.setAttribute('align', 'center');
            columnElement.setAttribute('background', 'img/black_rook.png');
            rowElement.appendChild(columnElement);
        }
        tableElement.appendChild(rowElement);
    }
    output.appendChild(tableElement);
}

function setImage(columnElement, columnIndex, rowIndex) {
    let imageUrl = getImageUrl(columnIndex, rowIndex);
    if(imageUrl != '')
        {
    let imageElement = document.createElement('img');
    imageElement.setAttribute('src', imageUrl);
    imageElement.setAttribute('width', '50px');
    imageElement.setAttribute('heigth', '50px');
    columnElement.appendChild(imageElement);
        }
}

function getImageUrl(columnIndex, rowIndex){
    if((rowIndex != 1 && rowIndex != 2 && rowIndex != 7 && rowIndex != 8) || columnIndex == 0 || columnIndex == count - 1){
        return '';
    }
    else if (rowIndex == '2'){
        return 'img/black_pawn.png';
    }
    else if (rowIndex == '7'){
        return 'img/white_pawn.png';
    }
    else if (rowIndex == 1){
            if(columnIndex == 1 || columnIndex == 8){
                return 'img/black_rook.png'
            }
        else if(columnIndex == 2 || columnIndex == 7){
                return 'img/black_knight.png';
            }
        else if(columnIndex == 3 || columnIndex == 6){
                return 'img/black_bishop.png';
            }
        else if(columnIndex == 4){
                return 'img/black_queen.png';
            }
        else if(columnIndex == 5){
                return 'img/black_king.png';
            }
        }
    else if (rowIndex == 8){
            if(columnIndex == 1 || columnIndex == 8){
                return 'img/white_rook.png'
            }
        else if(columnIndex == 2 || columnIndex == 7){
                return 'img/white_knight.png';
            }
        else if(columnIndex == 3 || columnIndex == 6){
                return 'img/white_bishop.png';
            }
        else if(columnIndex == 4){
                return 'img/white_queen.png';
            }
        else if(columnIndex == 5){
                return 'img/white_king.png';
            }
        }
}
