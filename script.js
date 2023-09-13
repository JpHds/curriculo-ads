var elementsForCopy = document.getElementsByClassName('txtToCopy');

for (var i = 0; i < elementsForCopy.length; i++) {
    elementsForCopy[i].addEventListener('click', function () {
        var tempInput = document.createElement('input');
        tempInput.value = this.textContent;
        document.body.appendChild(tempInput);
        
        tempInput.select();
        
        document.execCommand('copy');

        document.body.removeChild(tempInput);
        
        alert('Copy by clipboard');
    });
}