var checkLoginStatus = function(response) {
    console.log(response);
    //statusChangeCallback(response);
    if(response.status === 'connected'){
       document.querySelector('#authBtn').value = '로그아웃';
    } else {
       document.querySelector('#authBtn').value = 'facebook 로그인';
    }
 }

window.fbAsyncInit = function() {
FB.init({
 appId      : '614029082433760',
 cookie     : true,  // enable cookies to allow the server to access 
                     // the session
 xfbml      : true,  // parse social plugins on this page
 version    : 'v3.2' // The Graph API version to use for the call
});

// Now that we've initialized the JavaScript SDK, we call 
// FB.getLoginStatus().  This function gets the state of the
// person visiting this page and can return one of three states to
// the callback you provide.  They can be:
//
// 1. Logged into your app ('connected')
// 2. Logged into Facebook, but not your app ('not_authorized')
// 3. Not logged into Facebook and can't tell if they are logged into
//    your app or not.
//
// These three cases are handled in the callback function.

FB.getLoginStatus(checkLoginStatus); 


};
(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));