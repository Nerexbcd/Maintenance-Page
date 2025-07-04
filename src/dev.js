console.log("Current Host: " + window.location.host);

if (!(window.location.host.includes("nerexbcd.dev") || window.location.host.includes("bc.dawg") || window.location.host.includes("eufurria.org"))) {
    var styles = document.getElementsByTagName("head")[0].getElementsByTagName("link");

    for (var i = 0; i < styles.length; i++) {
        styles[i].href = styles[i].href.replace("https://failover.nerexbcd.dev/", "/");
    }
    
    var scripts = document.getElementsByTagName("head")[0].getElementsByTagName("script");
    
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].src != "https://failover.nerexbcd.dev/dev.js") {
            var script = document.createElement("script");
            script.src = scripts[i].src.replace("https://failover.nerexbcd.dev/", "/");
            script.type = "text/javascript";
            document.getElementsByTagName("head")[0].removeChild(scripts[i]);
            document.getElementsByTagName("head")[0].appendChild(script);
        }

    }
    
    console.log("Dev mode Enabled");
} else {
    console.log("Dev mode Disabled");
}
