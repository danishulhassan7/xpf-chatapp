
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

    // Scrolling bug 

    document.getElementById('messages').scrollTo(0,document.getElementById('messages').clientHeight);

}


// Firebase authentication 

// function signIn() {
//     var provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider);

// }

// function signOut() {
//     firebase.auth().signOut();
// }

// function onFirebaseStateChanged() {
//     firebase.auth().onAuthStateChanged(onStateChanged);
// }

function onStateChanged(user) {
    if (user) {
        document.getElementById('imgProfile').src = firebase.auth().currentUser.photoURL;
        document.getElementById('imgProfile').title = firebase.auth().currentUser.displayName;

        document.getElementById('linkSignin').style ='display:none';
        document.getElementById('linkSignout').style = '';
    }else {
        document.getElementById('imgProfile').src = 'images/profiles/user.jpg';
        document.getElementById('imgProfile').title = '';

        document.getElementById('linkSignin').style ='';
        document.getElementById('linkSignout').style = 'display:none';
    }
}

//Call auth state changed 
// onFirebaseStateChanged();