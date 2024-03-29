function saveUser() {
  var xhr = new XMLHttpRequest();
  var url = "/save";

  var formData = new FormData(document.getElementById('userForm'));
  var data = {};
  formData.forEach((value, key) => {
      data[key] = value;
  });

  xhr.open("POST", url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          console.log(response.message);
          document.getElementById('userForm').reset();
          alert(response.message);
      }
  };
  xhr.send(JSON.stringify(data));
}
