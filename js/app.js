
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


//Sending a message using enter key

function onKeyDown() {
    document.addEventListener('keydown',function (key) {
        if(key.which === 13) {
            sendMessage();
        }
    });
}

function sendMessage() {
    var message = ` <div class="row justify-content-end">
    <div class="col-sm-8 col-8 col-md-7">
        <p class="sent-msg float-right">
        ${document.getElementById('textMessage').value}
            <span class="small time">8.35 PM</span>
        </p>
    </div>
    <div class="col-2 col-sm-1 col-md-1">
        <img src="images/profiles/avatar.png" alt="profile" class="chat-pic img-fluid">
    </div>
</div>` 

    document.getElementById('messages').innerHTML += message;
    document.getElementById('textMessage').value = '';
    document.getElementById('textMessage').focus();
}