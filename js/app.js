
function startChat(id) {
    document.getElementById('chatPanel').removeAttribute('style'); 
    document.getElementById('startTemplate').setAttribute('style','display:none');
}


// on small screen to show the friend chat list 

function showChatList() {
    document.getElementById('side-1').classList.remove('d-none','d-md-block');
    document.getElementById('chatPanel').classList.add('d-none');
}