$(document).ready(function () {
    $('#cipherFunction').click(() => {
        event.preventDefault();
        let str = $('#textCipher').val();
        $('#resultCipher').text(cipher(str));
        $('#textCipher').val('');
    })

    $('#decipherFunction').click(() => {
        event.preventDefault();
        let str = $('#textDecipher').val();
        $('#resultDecipher').text(decipher(str));
        $('#textDecipher').val('');
    })

})

function cipher(str) {

    
    const upper = str.toUpperCase();
    return upper.split('')
        .map.call(upper, char => {
            const i = char.charCodeAt(0);

            if (i < 65 || i > 90) {
                return String.fromCharCode(i);
            }
            else if (i < 91 || i > 64) {
                return String.fromCharCode((i + 46) % 26 + 65);
            }
        }).join('');
};


function decipher(str) {

    const upper = str.toUpperCase();
    return upper.split('')
        .map.call(upper, char => {
            const i = char.charCodeAt(0);

            if (i < 65 || i > 90) {
                return String.fromCharCode(i);
            }
            else if (i < 91 || i > 64) {
                return String.fromCharCode((i - 46) % 26 + 65);
            }
        }).join('');
};
