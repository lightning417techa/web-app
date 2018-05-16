var tciket="";if(navigator.onLine == true) {ticket="yes";}else{ticket="no";}</script>
          <script src="https://www.gstatic.com/firebasejs/4.2.0/firebase.js"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script><script> 
          var a = new Date();var mt = a.getMonth() + 1;var dy = a.getDate();var yr = a.getFullYear();var tm = a.getHours()+":"+a.getMinutes();    
          var dateFormat = mt+"/"+dy+"/"+yr+"_"+tm;
          //Firebase
          var config = {
            apiKey: "AIzaSyAz0J5c0czjU3S2PddQdFxmnd52hGHqtWQ",
            authDomain: "fitbit-flex2-integration.firebaseapp.com",
            databaseURL: "https://fitbit-flex2-integration.firebaseio.com",
            projectId: "fitbit-flex2-integration",
            storageBucket: "fitbit-flex2-integration.appspot.com",
            messagingSenderId: "247113062436"
          };
  firebase.initializeApp(config);
//Firebase Function
var ip;
$.getJSON('https://geoip-db.com/json/geoip.php?jsonp=?') 
         .done (function(location) {
           ip = location.IPv4;
         });
setTimeout(function(){ writeNewPost(); }, 3000);
          function writeNewPost() {
            var postData = dateFormat + " IP " + ip + " is online: " + ticket;
            var PostData = {           
              d : "sent from LanyxSoft Music player" };   
            var newPostKey = firebase.database().ref().push().key;     
            var updates = {};   
            updates['/User-inputs/' + newPostKey] = postData;
            return firebase.database().ref().update(updates);
            var ref = firebase.database().ref("User-input");
            ref.on("value", function(snapshot) {
              var childData = snapshot.val();
              var key = Object.keys(childData)[0];
              console.log(childData[key].id); 
              var print = document.getElementbyId("print").innerHTML= childData;
});}
