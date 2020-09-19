
function startChat(id) {
    document.getElementById('chatPanel').removeAttribute('style'); 
    document.getElementById('startTemplate').setAttribute('style','display:none');
    hideChatList();
}


// on small screen to show the friend chat list 

function showChatList() {
    document.getElementById('side-1').classList.remove('d-none','d-md-block');
    document.getElementById('chatPanel').classList.add('d-none');
}

// back button to hide the chat list

function hideChatList() {
    document.getElementById('side-1').classList.add('d-none','d-md-block');
    document.getElementById('chatPanel').classList.remove('d-none');
}