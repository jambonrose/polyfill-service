!function(){"use strict";function a(a,b,c,d){for(var e=[].concat(a),f=0,g=e.length;g>f;++f)d&&a.splice(f,1),b.call(c,e[f],f,a,c)}function b(a){var d=this,f=new c;d.then=function(){return b.prototype.then.apply(d,arguments)},f.resolve=function(){return c.prototype.resolve.apply(f,arguments)},d.then.state=e.PENDING,d.then[e.RESOLVED]=[],d.then[e.REJECTED]=[],d.then.resolver=f,f.resolve.promise=d,"function"==typeof a&&a.call(d,f)}function c(){}function d(c){var d=arguments[3];setTimeout(function(){var f=c.call(d,d.then.value);f instanceof b&&(a(d.then.next.then[e.RESOLVED],f.then,f),a(d.then.next.then[e.REJECTED],f["catch"],f),f.then.next=d.then.next.then.next)},0)}var e={PENDING:"pending",REJECTED:"rejected",RESOLVED:"resolved"};b.prototype={constructor:b,then:function(a,c){var d=this;return d.then.next=new b,"function"==typeof a&&d.then[e.RESOLVED].push(a),"function"==typeof c&&d.then[e.REJECTED].push(c),d.then.state===e.RESOLVED&&d.then.resolver.resolve.call(d.then.resolver,d.then.value),d.then.state===e.REJECTED&&d.then.resolver.reject.call(d.then.resolver,d.then.value),d.then.next},"catch":function(a){return this.then(null,a)}},c.prototype={constructor:c,resolve:function(b){var c=this,f=c.resolve.promise;f.then.value=b,f.then.state=e.RESOLVED,a(f.then[e.RESOLVED],d,f,!0)},reject:function(b){var c=this,f=c.resolve.promise;f.then.value=b,f.then.state=e.REJECTED,a(f.then[e.REJECTED],d,f,!0)}},b.resolve=function(a){return new b(function(b){b.resolve(a)})},Window.prototype.Promise=b}();