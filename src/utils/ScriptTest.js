export default () => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var resp = JSON.parse(xhttp.responseText);
      //console.log(resp.url);
      alert(resp.url);
    }
  };

  var content = {
    description: "Hello World Examples",
    files: {
      "hello_world_ruby.txt": {
        content:
          "Run `ruby hello_world.rb` or `python hello_world.py` to print Hello World",
        filename: "hello_world.md"
      },
      "hello_world_python.txt": null,
      "new_file.txt": {
        content: "This is a new placeholder file."
      }
    }
  };

  var URL =
    "https://gist.githubusercontent.com/etienne1911/c7865deb723f3462533e839b426a9ea9/raw/sandbox.md";
  URL = "https://api.github.com/gists/c7865deb723f3462533e839b426a9ea9";
  xhttp.open("GET", URL, true);
  //xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send();
};
