webpackJsonp([0],[,,,,,function(n,t,e){"use strict";function r(n,t){function e(n){var e=o()("<li />").text(n.toString()).click(function(){o()("<div title = 'Confirm'>Are you sure</div>").dialog({modal:!0,buttons:{Delete:function(){t.remove(n.id),e.remove(),o()(this).dialog("close")},Cancel:function(){o()(this).dialog("close")}}})}).appendTo(i);return e}n.empty();var r=o()("\n      <div class='users-controller'>\n        <h1>"+c.a+"</h1>\n        <ul class='users-list' />\n        <a href='#' class='add-user'>Add User</a>\n      </div>\n    ").appendTo(n),i=r.find(".users-list");return r.find(".add-user").click(function(n){n.preventDefault(),e(t.add("FIRST","LAST"))}).appendTo(r),s.a.each(t.users,function(n){return e(n)}),{destroy:function(){r.remove()}}}var i=e(0),o=e.n(i),u=e(2),a=(e.n(u),e(1)),s=e.n(a),c=e(12);t.a=r},function(n,t,e){"use strict";function r(){console.log("FUNC1")}function i(){console.log("FUNC2")}t.a=r,t.b=i},function(n,t,e){"use strict";function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var i=e(1),o=e.n(i),u=e(13);e.d(t,"a",function(){return c});var a=function(){function n(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}(),s=Symbol("users"),c=function(){function n(){r(this,n),this[s]=[new u.a(1,"John","Lalala"),new u.a(2,"Peter","Smth")]}return a(n,[{key:"users",get:function(){return this[s].slice()}}]),a(n,[{key:"add",value:function(n,t){var e=o.a.max(this[s],function(n){return n.id}).id+1,r=new u.a(e,n,t);return this[s].push(r),r}},{key:"remove",value:function(n){o.a.remove(this[s],function(t){return t.id==n})}}]),n}()},function(n,t){console.log("Hello")},function(n,t){},function(n,t){},,function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r="User list"},function(n,t,e){"use strict";function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}e.d(t,"a",function(){return s});var i=function(){function n(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}(),o=Symbol("first"),u=Symbol("last"),a=Symbol("id"),s=function(){function n(t,e,i){r(this,n),this[a]=t,this[o]=e,this[u]=i}return i(n,[{key:"id",get:function(){return this[a]}},{key:"first",get:function(){return this[o]}},{key:"last",get:function(){return this[u]}}]),i(n,[{key:"toString",value:function(){return this.id+": "+this.first+" "+this.last}}]),n}()},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(7),i=e(5),o=e(6),u=e(8),a=(e.n(u),e(0)),s=e.n(a),c=e(9),l=(e.n(c),e(10));e.n(l);console.log("LOADING APPLICATION");var f=new r.a,d=s()("#mount");e.i(i.a)(d,f),o.a(),o.b(),console.log("we are now in prod")}],[14]);