    var clippable = function (document) {

      var pels = document.getElementsByTagName('p');

      for(var i = 0; i < pels.length; i++ ) {
          var pel = pels.item(i);
          pel.setAttribute('draggable','true');
          pel.addEventListener(
          'dragstart',
          function (evt) {


             var title = (!document.title) ? '<h2>Untitled</h2>' : '<h2>'+document.title+'</h2>';
             var header = title+'<p>\
             <a href="'+document.location.href+'">'+document.location.href+'</a>\
             on '+(new Date()).getTime()+':</p>';

             var htmlescaped = escape(header + evt.target.innerHTML);

             var fn = 'clipping.html';
             // encoded version of data along with mime info
             var enc = 'text/html:'+fn+':data:text/html,'+htmlescaped;
             
             evt.dataTransfer.setData("DownloadURL",enc);
              
          }, true);
      }

    };
