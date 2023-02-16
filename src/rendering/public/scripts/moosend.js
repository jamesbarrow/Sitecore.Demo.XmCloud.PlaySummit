console.log('send script');
  //load TrackerJS
  !function(t,n,e,o,a){function d(t){var n=~~(Date.now()/3e5),o=document.createElement(e);o.async=!0,o.src=t+"?ts="+n;var a=document.getElementsByTagName(e)[0];a.parentNode.insertBefore(o,a)}t.MooTrackerObject=a,t[a]=t[a]||function(){return t[a].q?void t[a].q.push(arguments):void(t[a].q=[arguments])},window.attachEvent?window.attachEvent("onload",d.bind(this,o)):window.addEventListener("load",d.bind(this,o),!1)}(window,document,"script","//cdn.stat-track.com/statics/moosend-tracking.min.js","mootrack");
  //tracker has to be initialized otherwise it will generate warnings and wont sendtracking events
  mootrack('init', '19f4c2dc-dbe1-4b4e-911c-3e26b8ecadc1');
  console.log('send script END');