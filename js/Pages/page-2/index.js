  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAz0J5c0czjU3S2PddQdFxmnd52hGHqtWQ",
    authDomain: "fitbit-flex2-integration.firebaseapp.com",
    databaseURL: "https://fitbit-flex2-integration.firebaseio.com",
    projectId: "fitbit-flex2-integration",
    storageBucket: "fitbit-flex2-integration.appspot.com"
  };
  firebase.initializeApp(config);
  //------------------------------------
  var uploader = document.getElementById('uploader');
  var fileButton =         document.getElementById('fileButton');
  fileButton.addEventListener('change', function(e){
  var file = e.target.files[0];
  var storageRef = firebase.storage().ref('img/'+file.name);
  var task = storageRef.put(file);
  task.on('state_changed', function progress(snapshot) {
    var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
    uploader.value = percentage;

  }, function error(err) {


  },function complete() {


var starsRef = storageRef.child('images/BFD30590-EE9E-46C5-874F-E944061C0FDB.jpeg');

// Get the download URL
starsRef.getDownloadURL().then(function(url) {
  var img = document.getElementByid('image');
img.src= this.url;
});


  });});  
  
  
