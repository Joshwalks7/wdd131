let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = ('#222222');
        document.body.style.color = ('#fff');
        let hr = document.querySelector('hr');
        hr.style.color = ('#fff');
        let border = document.querySelector('main');
        border.style.borderColor = ('#fff');
        let image = document.querySelector('img');
        image.setAttribute('src', 'byui-logo-white.png');
        let h2 = document.querySelector('h2');
        h2.style.color = ('rgb(135, 203, 245)');
    } else {
        document.body.style.backgroundColor = ('#fff');
        document.body.style.color = ('#000');
        let hr = document.querySelector('hr');
        hr.style.color = ('rgb(128, 128, 128');
        let image = document.querySelector('img');
        image.setAttribute('src', 'byui_logo.webp');
        let border = document.querySelector('main');
        border.style.borderColor = ('rgb(128, 128, 128)');
        let h2 = document.querySelector('h2');
        h2.style.color = ('rgb(2, 147, 196)');
    }
}