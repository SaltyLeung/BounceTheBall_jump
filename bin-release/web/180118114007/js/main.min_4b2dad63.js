var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);i.prototype=e.prototype,t.prototype=new i},__awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(o,r){function s(t){try{h(n.next(t))}catch(e){r(e)}}function a(t){try{h(n["throw"](t))}catch(e){r(e)}}function h(t){t.done?o(t.value):new i(function(e){e(t.value)}).then(s,a)}h((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function i(t){return function(e){return n([t,e])}}function n(i){if(o)throw new TypeError("Generator is already executing.");for(;h;)try{if(o=1,r&&(s=r[2&i[0]?"return":i[0]?"throw":"next"])&&!(s=s.call(r,i[1])).done)return s;switch(r=0,s&&(i=[0,s.value]),i[0]){case 0:case 1:s=i;break;case 4:return h.label++,{value:i[1],done:!1};case 5:h.label++,r=i[1],i=[0];continue;case 7:i=h.ops.pop(),h.trys.pop();continue;default:if(s=h.trys,!(s=s.length>0&&s[s.length-1])&&(6===i[0]||2===i[0])){h=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){h.label=i[1];break}if(6===i[0]&&h.label<s[1]){h.label=s[1],s=i;break}if(s&&h.label<s[2]){h.label=s[2],h.ops.push(i);break}s[2]&&h.ops.pop(),h.trys.pop();continue}i=e.call(t,h)}catch(n){i=[6,n],r=0}finally{o=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var o,r,s,a,h={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},Game=function(t){function e(){var e=t.call(this)||this;return e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(e,t),e.prototype.onAddToStage=function(t){egret.lifecycle.addLifecycleListener(function(t){t.onUpdate=function(){}}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()},this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return this.leftBound=.25*this.stage.stageWidth,this.rightBound=.75*this.stage.stageWidth,this.topBound=.15*this.stage.stageHeight,this.createGameScene(this),[2]})})},e.prototype.keepTrack=function(){var t=50*this.bodyCircle.position[0],e=this.stage.stageHeight-50*this.bodyCircle.position[1];t<this.leftBound&&(this.bodyCircle.position[0]=this.leftBound/50),t>this.rightBound&&(this.bodyCircle.position[0]=this.rightBound/50),e<this.topBound&&(this.bodyCircle.position[1]=(this.stage.stageHeight-this.topBound)/50)},e.prototype.onTouchMove=function(t){this.bodyCircle.velocity[0]+=(t.stageX-this.startTouchX)/30/50,this.bodyCircle.velocity[1]+=(this.startTouchY-t.stageY)/30/50},e.prototype.onTouchBegin=function(t){this.startTouchX=t.stageX,this.startTouchY=t.stageY,this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onTouchMove,this)},e.prototype.onTouchTap=function(t){this.bodyCircle.velocity[1]=10},e.prototype.createGameScene=function(e){this.touchEnabled=!0,this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBegin,this);var i=new p2.World,n=new egret.Shape;n.graphics.beginFill(8912258),n.graphics.drawRect(0,0,this.stage.stageWidth,this.stage.stageHeight),n.graphics.endFill(),t.prototype.addChild.call(this,n),i.sleepMode=p2.World.NO_SLEEPING;var o=new egret.Bitmap(RES.getRes("ball_png"));this.addChild(o),i.gravity=[0,-10],this.bodyCircle=new p2.Body({mass:1,position:[this.stage.stageWidth/2/50,(this.stage.stageHeight+200)/50]});var r=new p2.Circle({radius:1});this.bodyCircle.addShape(r),i.addBody(this.bodyCircle),o.width=50*r.radius*2,o.height=50*r.radius*2,o.anchorOffsetX=o.width/2,o.anchorOffsetY=o.height/2,this.bodyCircle.displays=[o];var s=new egret.Bitmap(RES.getRes("square_png")),a=new p2.Body({position:[this.stage.stageWidth/2/50,4]}),h=new p2.Plane;a.addShape(h),i.addBody(a),s.scaleX=5,s.scaleY=2,s.anchorOffsetX=s.width/2,s.x=this.stage.stageWidth/2,s.y=this.stage.stageHeight-200,this.addChild(s),egret.Ticker.getInstance().register(function(t){i.step(t/1e3),o.x=50*this.bodyCircle.position[0],o.y=this.stage.stageHeight-50*this.bodyCircle.position[1],o.rotation=360-180*this.bodyCircle.angle/Math.PI,this.keepTrack()},this);var c=new egret.TextField;c.text="Bounce!",c.size=100,c.fontFamily="Segoe UI Light",c.anchorOffsetX=c.textWidth/2,c.anchorOffsetY=c.textHeight/2,c.x=this.stage.stageWidth/2,c.y=this.stage.stageHeight/2-300},e.prototype.touchHandler=function(t){},e}(egret.DisplayObjectContainer);__reflect(Game.prototype,"Game");var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(t){function e(){var e=t.call(this)||this;return e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(e,t),e.prototype.onAddToStage=function(t){egret.lifecycle.addLifecycleListener(function(t){t.onUpdate=function(){}}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()},this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),this.createGameScene(),this.stage.scaleMode=egret.StageScaleMode.FIXED_WIDTH,[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return i.sent(),[4,RES.loadGroup("preload",0,t)];case 2:return i.sent(),this.stage.removeChild(t),[3,4];case 3:return e=i.sent(),console.error(e),[3,4];case 4:return[2]}})})},e.prototype.createGameScene=function(){var e=new egret.Shape;e.graphics.beginFill(8912258),e.graphics.drawRect(0,0,this.stage.stageWidth,this.stage.stageHeight),e.graphics.endFill(),t.prototype.addChild.call(this,e);var i=new egret.TextField;i.text="Bounce!",i.size=100,this.addChild(i),i.fontFamily="Segoe UI Light",i.anchorOffsetX=i.textWidth/2,i.anchorOffsetY=i.textHeight/2,i.x=this.stage.stageWidth/2,i.y=this.stage.stageHeight/2-300;var n=new egret.Bitmap(RES.getRes("ball_png"));n.anchorOffsetX=n.width/2,n.anchorOffsetY=n.height/2,n.x=this.stage.stageWidth/2,n.y=this.stage.stageHeight/2,this.addChild(n),egret.Tween.get(n,{loop:!0}).to({scaleX:.5,scaleY:.5},2e3,egret.Ease.backInOut);var o=new egret.Bitmap(RES.getRes("button_png"));o.anchorOffsetX=o.width/2,o.anchorOffsetY=o.height/2,o.x=this.stage.stageWidth/2,o.y=this.stage.stageHeight/2+300,o.touchEnabled=!0,o.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandler,this),this.addChild(o)},e.prototype.touchHandler=function(t){this.stage.addChild(new Game)},e}(egret.DisplayObjectContainer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);