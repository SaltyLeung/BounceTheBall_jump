function __extends(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];function __(){this.constructor=d}__.prototype=b.prototype;d.prototype=new __}var __awaiter=this&&this.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator["throw"](value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value)}).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})};var __generator=this&&this.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),throw:verb(1),return:verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=y[op[0]&2?"return":op[0]?"throw":"next"])&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[0,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break}if(t[2])_.ops.pop();_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e];y=0}finally{f=t=0}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true}}};var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};var RES;(function(RES){var NewFileSystem=function(){function NewFileSystem(data){this.data=data}NewFileSystem.prototype.profile=function(){console.log(this.data)};NewFileSystem.prototype.addFile=function(filename,type){if(!type)type="";filename=this.normalize(filename);var basefilename=this.basename(filename);var folder=this.dirname(filename);if(!this.exists(folder)){this.mkdir(folder)}var d=this.reslove(folder);d[basefilename]={url:filename,type:type}};NewFileSystem.prototype.getFile=function(filename){var result=this.reslove(filename);if(result){result.name=filename}return result};NewFileSystem.prototype.basename=function(filename){return filename.substr(filename.lastIndexOf("/")+1)};NewFileSystem.prototype.normalize=function(filename){return filename.split("/").filter(function(d){return!!d}).join("/")};NewFileSystem.prototype.dirname=function(path){return path.substr(0,path.lastIndexOf("/"))};NewFileSystem.prototype.reslove=function(dirpath){if(dirpath==""){return this.data}dirpath=this.normalize(dirpath);var list=dirpath.split("/");var current=this.data;for(var _i=0,list_1=list;_i<list_1.length;_i++){var f=list_1[_i];if(current){current=current[f]}else{return current}}return current};NewFileSystem.prototype.mkdir=function(dirpath){dirpath=this.normalize(dirpath);var list=dirpath.split("/");var current=this.data;for(var _i=0,list_2=list;_i<list_2.length;_i++){var f=list_2[_i];if(!current[f]){current[f]={}}current=current[f]}};NewFileSystem.prototype.exists=function(dirpath){if(dirpath=="")return true;dirpath=this.normalize(dirpath);var list=dirpath.split("/");var current=this.data;for(var _i=0,list_3=list;_i<list_3.length;_i++){var f=list_3[_i];if(!current[f]){return false}current=current[f]}return true};return NewFileSystem}();RES.NewFileSystem=NewFileSystem})(RES||(RES={}));var RES;(function(RES){RES.resourceNameSelector=function(p){return p};function getResourceInfo(path){var result=RES.fileSystem.getFile(path);if(!result){path=RES.resourceNameSelector(path);result=RES.fileSystem.getFile(path)}return result}RES.getResourceInfo=getResourceInfo;var configItem;function setConfigURL(url){var type;if(url.indexOf(".json")>=0){type="legacyResourceConfig"}else{type="resourceConfig"}configItem={type:type,resourceRoot:RES.resourceRoot,url:url,name:url,extra:true}}RES.setConfigURL=setConfigURL;RES.resourceRoot="";var ResourceConfig=function(){function ResourceConfig(){}ResourceConfig.prototype.init=function(){var _this=this;if(!this.config){this.config={alias:{},groups:{},resourceRoot:"resource",typeSelector:function(){return"unknown"},mergeSelector:null,fileSystem:null}}return RES.queue.loadResource(configItem).then(function(data){return _this.parseConfig(data)}).catch(function(e){if(!e.__resource_manager_error__){console.error(e.stack);e=new RES.ResourceManagerError(1002)}return Promise.reject(e)})};ResourceConfig.prototype.getGroupByName=function(name,shouldNotBeNull){var group=this.config.groups[name];var result=[];if(!group){if(shouldNotBeNull){throw new RES.ResourceManagerError(2005,name)}return null}for(var _i=0,group_1=group;_i<group_1.length;_i++){var paramKey=group_1[_i];var _a=RES.config.getResourceWithSubkey(paramKey,true),key=_a.key,subkey=_a.subkey;var r=RES.config.getResource(key,true);if(result.indexOf(r)==-1){result.push(r)}}return result};ResourceConfig.prototype.__temp__get__type__via__url=function(url_or_alias){var url=this.config.alias[url_or_alias];if(!url){url=url_or_alias}if(RES.resourceTypeSelector){var type=RES.resourceTypeSelector(url);if(!type){throw new RES.ResourceManagerError(2004,url)}return type}else{console.warn("RES.mapConfig 并未设置 typeSelector");return"unknown"}};ResourceConfig.prototype.getResourceWithSubkey=function(key,shouldNotBeNull){key=this.getKeyByAlias(key);var index=key.indexOf("#");var subkey="";if(index>=0){subkey=key.substr(index+1);key=key.substr(0,index)}var r=this.getResource(key);if(!r){if(shouldNotBeNull){var msg=subkey?key+"#"+subkey:key;throw new RES.ResourceManagerError(2006,msg)}else{return null}}else{return{r:r,key:key,subkey:subkey}}};ResourceConfig.prototype.getKeyByAlias=function(aliasName){if(this.config.alias[aliasName]){return this.config.alias[aliasName]}else{return aliasName}};ResourceConfig.prototype.getResource=function(path_or_alias,shouldNotBeNull){var path=this.config.alias[path_or_alias];if(!path){path=path_or_alias}var r=getResourceInfo(path);if(!r){if(shouldNotBeNull){throw new RES.ResourceManagerError(2006,path_or_alias)}return null}return r};ResourceConfig.prototype.getGroup=function(name){return this.getGroupByName(name)};ResourceConfig.prototype.createGroup=function(name,keys,override){if(override===void 0){override=false}if(!override&&this.config.groups[name]||!keys||keys.length==0){return false}var group=[];for(var _i=0,keys_1=keys;_i<keys_1.length;_i++){var key=keys_1[_i];if(this.config.groups[key]){var groupInfo=this.config.groups[key];group=group.concat(groupInfo)}else{group.push(key)}}this.config.groups[name]=group;return true};ResourceConfig.prototype.parseConfig=function(data){RES.resourceRoot=data.resourceRoot+"/";this.config=data;RES.fileSystem=data.fileSystem};ResourceConfig.prototype.addSubkey=function(subkey,name){this.addAlias(subkey,name+"#"+subkey)};ResourceConfig.prototype.addAlias=function(alias,key){if(this.config.alias[key]){key=this.config.alias[key]}this.config.alias[alias]=key};ResourceConfig.prototype.getType=function(key){return this.getResource(key,true).type};ResourceConfig.prototype.addResourceData=function(data){if(!data.type){data.type=this.__temp__get__type__via__url(data.url)}RES.fileSystem.addFile(data.url,data.type);if(data.name){this.config.alias[data.name]=data.url}};ResourceConfig.prototype.destory=function(){RES.systemPid++;var emptyFileSystem={getFile:function(){return null},addFile:function(){},profile:function(){}};this.config={groups:{},alias:{},fileSystem:emptyFileSystem,typeSelector:function(p){return p},resourceRoot:"resources",mergeSelector:null}};return ResourceConfig}();RES.ResourceConfig=ResourceConfig})(RES||(RES={}));var RES;(function(RES){var ResourceLoader=function(){function ResourceLoader(){}ResourceLoader.prototype.load=function(list,reporter){var _this=this;var current=0;var total=1;var mapper=function(r){return _this.loadResource(r).then(function(response){RES.host.save(r,response);current++;if(reporter&&reporter.onProgress){reporter.onProgress(current,total)}return response})};total=list.length;return Promise.all(list.map(mapper))};ResourceLoader.prototype.loadResource=function(r,p){if(!p){if(RES.FEATURE_FLAG.FIX_DUPLICATE_LOAD==1){var s=RES.host.state[r.name];if(s==2){return Promise.resolve(RES.host.get(r))}if(s==1){return r.promise}}p=RES.processor.isSupport(r)}if(!p){throw new RES.ResourceManagerError(2001,r.name,r.type)}RES.host.state[r.name]=1;var promise=p.onLoadStart(RES.host,r);r.promise=promise;return promise};ResourceLoader.prototype.unloadResource=function(r){var data=RES.host.get(r);if(!data){console.warn("尝试释放不存在的资源:",r.name);return Promise.resolve()}var p=RES.processor.isSupport(r);if(p){RES.host.state[r.name]=3;var promise=p.onRemoveStart(RES.host,r);RES.host.remove(r);return promise}else{return Promise.resolve()}};return ResourceLoader}();RES.ResourceLoader=ResourceLoader})(RES||(RES={}));var RES;(function(RES){var __tempCache={};RES.systemPid=0;RES.checkCancelation=function(target,propertyKey,descriptor){var method=descriptor.value;descriptor.value=function(){var arg=[];for(var _i=0;_i<arguments.length;_i++){arg[_i]=arguments[_i]}var currentPid=RES.systemPid;var result=method.apply(this,arg);return result.then(function(value){if(RES.systemPid!=currentPid){throw new ResourceManagerError(1005,arg[0])}else{return value}})}};function profile(){RES.fileSystem.profile();console.log(__tempCache);var totalImageSize=0;for(var key in __tempCache){var img=__tempCache[key];if(img instanceof egret.Texture){totalImageSize+=img.$bitmapWidth*img.$bitmapHeight*4}}console.log("gpu size : "+(totalImageSize/1024).toFixed(3)+"kb")}RES.profile=profile;RES.host={state:{},get resourceConfig(){return RES.config},load:function(r,processor){return RES.queue.loadResource(r,processor)},unload:function(r){return RES.queue.unloadResource(r)},save:function(resource,data){RES.host.state[resource.name]=2;resource.promise=undefined;__tempCache[resource.url]=data},get:function(resource){return __tempCache[resource.url]},remove:function(resource){RES.host.state[resource.name]=0;delete __tempCache[resource.url]}};RES.config=new RES.ResourceConfig;RES.queue=new RES.ResourceLoader;var ResourceManagerError=function(_super){__extends(ResourceManagerError,_super);function ResourceManagerError(code,replacer,replacer2){var _this=_super.call(this)||this;_this.__resource_manager_error__=true;_this.name=code.toString();_this.message=ResourceManagerError.errorMessage[code].replace("{0}",replacer).replace("{1}",replacer2);return _this}return ResourceManagerError}(Error);ResourceManagerError.errorMessage={1001:"文件加载失败:{0}",1002:"ResourceManager 初始化失败：配置文件加载失败",1005:"ResourceManager 已被销毁，文件加载失败:{0}",2001:"{0}解析失败,不支持指定解析类型:'{1}'，请编写自定义 Processor ，更多内容请参见 https://github.com/egret-labs/resourcemanager/blob/master/docs/README.md#processor",2002:"Analyzer 相关API 在 ResourceManager 中不再支持，请编写自定义 Processor ，更多内容请参见 https://github.com/egret-labs/resourcemanager/blob/master/docs/README.md#processor",2003:"{0}解析失败,错误原因:{1}",2004:"无法找到文件类型:{0}",2005:"资源配置文件中无法找到特定的资源组:{0}",2006:"资源配置文件中无法找到特定的资源:{0}"};RES.ResourceManagerError=ResourceManagerError})(RES||(RES={}));var RES;(function(RES){var processor;(function(processor_1){function isSupport(resource){return _map[resource.type]}processor_1.isSupport=isSupport;function map(type,processor){_map[type]=processor}processor_1.map=map;function promisify(loader,resource){return __awaiter(this,void 0,void 0,function(){var _this=this;return __generator(this,function(_a){return[2,new Promise(function(reslove,reject){var onSuccess=function(){var texture=loader["data"]?loader["data"]:loader["response"];reslove(texture)};var onError=function(){var e=new RES.ResourceManagerError(1001,resource.url);reject(e)};loader.addEventListener(egret.Event.COMPLETE,onSuccess,_this);loader.addEventListener(egret.IOErrorEvent.IO_ERROR,onError,_this)})]})})}function getURL(resource){var prefix=resource.extra?"":RES.resourceRoot;var url=prefix+resource.url;if(RES["getRealURL"]){return RES["getRealURL"](url)}else{return url}}function getRelativePath(url,file){url=url.split("\\").join("/");var params=url.match(/#.*|\?.*/);var paramUrl="";if(params){paramUrl=params[0]}var index=url.lastIndexOf("/");if(index!=-1){url=url.substring(0,index+1)+file}else{url=file}return url+paramUrl}processor_1.getRelativePath=getRelativePath;processor_1.ImageProcessor={onLoadStart:function(host,resource){return __awaiter(this,void 0,void 0,function(){var loader,bitmapData,texture;return __generator(this,function(_a){switch(_a.label){case 0:loader=new egret.ImageLoader;loader.load(getURL(resource));return[4,promisify(loader,resource)];case 1:bitmapData=_a.sent();texture=new egret.Texture;texture._setBitmapData(bitmapData);return[2,texture]}})})},onRemoveStart:function(host,resource){var texture=host.get(resource);texture.dispose();return Promise.resolve()}};processor_1.BinaryProcessor={onLoadStart:function(host,resource){return __awaiter(this,void 0,void 0,function(){var request,arraybuffer;return __generator(this,function(_a){switch(_a.label){case 0:request=new egret.HttpRequest;request.responseType=egret.HttpResponseType.ARRAY_BUFFER;request.open(getURL(resource),"get");request.send();return[4,promisify(request,resource)];case 1:arraybuffer=_a.sent();return[2,arraybuffer]}})})},onRemoveStart:function(host,resource){return Promise.resolve()}};processor_1.TextProcessor={onLoadStart:function(host,resource){return __awaiter(this,void 0,void 0,function(){var request,text;return __generator(this,function(_a){switch(_a.label){case 0:request=new egret.HttpRequest;request.responseType=egret.HttpResponseType.TEXT;request.open(getURL(resource),"get");request.send();return[4,promisify(request,resource)];case 1:text=_a.sent();return[2,text]}})})},onRemoveStart:function(host,resource){return Promise.resolve()}};processor_1.JsonProcessor={onLoadStart:function(host,resource){return __awaiter(this,void 0,void 0,function(){var text,data;return __generator(this,function(_a){switch(_a.label){case 0:return[4,host.load(resource,processor_1.TextProcessor)];case 1:text=_a.sent();data=JSON.parse(text);return[2,data]}})})},onRemoveStart:function(host,request){return Promise.resolve()}};processor_1.XMLProcessor={onLoadStart:function(host,resource){return __awaiter(this,void 0,void 0,function(){var text,data;return __generator(this,function(_a){switch(_a.label){case 0:return[4,host.load(resource,processor_1.TextProcessor)];case 1:text=_a.sent();data=egret.XML.parse(text);return[2,data]}})})},onRemoveStart:function(host,resource){return Promise.resolve()}};processor_1.CommonJSProcessor={onLoadStart:function(host,resource){return __awaiter(this,void 0,void 0,function(){var text,f,require,exports;return __generator(this,function(_a){switch(_a.label){case 0:return[4,host.load(resource,processor_1.TextProcessor)];case 1:text=_a.sent();f=new Function("require","exports",text);require=function(){};exports={};try{f(require,exports)}catch(e){throw new RES.ResourceManagerError(2003,resource.name,e.message)}return[2,exports]}})})},onRemoveStart:function(host,resource){return Promise.resolve()}};processor_1.SheetProcessor={onLoadStart:function(host,resource){return __awaiter(this,void 0,void 0,function(){var data,imagePath,r,texture,frames,spriteSheet,subkey,config,texture;return __generator(this,function(_a){switch(_a.label){case 0:return[4,host.load(resource,processor_1.JsonProcessor)];case 1:data=_a.sent();imagePath="resource/"+getRelativePath(resource.url,data.file);r=host.resourceConfig.getResource(data.file);if(!r){r={name:imagePath,url:imagePath,extra:true,type:"image"}}return[4,host.load(r)];case 2:texture=_a.sent();frames=data.frames;spriteSheet=new egret.SpriteSheet(texture);for(subkey in frames){config=frames[subkey];texture=spriteSheet.createTexture(subkey,config.x,config.y,config.w,config.h,config.offX,config.offY,config.sourceW,config.sourceH)}return[2,spriteSheet]}})})},getData:function(host,resource,key,subkey){var data=host.get(resource);if(data){return data.getTexture(subkey)}else{console.error("missing resource : "+key+"#"+subkey);return null}},onRemoveStart:function(host,resource){return Promise.resolve()}};processor_1.FontProcessor={onLoadStart:function(host,resource){return __awaiter(this,void 0,void 0,function(){var getTexturePath,data,imageUrl,config,r,texture,font;return __generator(this,function(_a){switch(_a.label){case 0:getTexturePath=function(url,fntText){var file="";var lines=fntText.split("\n");var pngLine=lines[2];var index=pngLine.indexOf('file="');if(index!=-1){pngLine=pngLine.substring(index+6);index=pngLine.indexOf('"');file=pngLine.substring(0,index)}url=url.split("\\").join("/");var index=url.lastIndexOf("/");if(index!=-1){url=url.substring(0,index+1)+file}else{url=file}return url};return[4,host.load(resource,processor_1.TextProcessor)];case 1:data=_a.sent();imageUrl="";try{config=JSON.parse(data);imageUrl=resource.name.replace("fnt","png")}catch(e){config=data;imageUrl=resource.name.replace("fnt","png")}r=host.resourceConfig.getResource(imageUrl);if(!r)return[3,3];return[4,host.load(r)];case 2:texture=_a.sent();font=new egret.BitmapFont(texture,config);return[2,font];case 3:return[2,null]}})})},onRemoveStart:function(host,resource){return Promise.resolve()}};processor_1.SoundProcessor={onLoadStart:function(host,resource){return __awaiter(this,void 0,void 0,function(){var sound;return __generator(this,function(_a){switch(_a.label){case 0:sound=new egret.Sound;sound.load(getURL(resource));return[4,promisify(sound,resource)];case 1:_a.sent();return[2,sound]}})})},onRemoveStart:function(host,resource){return Promise.resolve()}};processor_1.MovieClipProcessor={onLoadStart:function(host,resource){var mcData;var imageResource;return host.load(resource,processor_1.JsonProcessor).then(function(value){mcData=value;var jsonPath=resource.name;var imagePath=jsonPath.substring(0,jsonPath.lastIndexOf("."))+".png";imageResource=host.resourceConfig.getResource(imagePath,true);if(!imageResource){throw new RES.ResourceManagerError(1001,imagePath)}return host.load(imageResource)}).then(function(value){host.save(imageResource,value);var mcTexture=value;var mcDataFactory=new egret.MovieClipDataFactory(mcData,mcTexture);return mcDataFactory})},onRemoveStart:function(host,resource){var mcFactory=host.get(resource);mcFactory.clearCache();mcFactory.$spriteSheet.dispose();var jsonPath=resource.name;var imagePath=jsonPath.substring(0,jsonPath.lastIndexOf("."))+".png";var imageResource=host.resourceConfig.getResource(imagePath,true);return host.unload(imageResource)}};processor_1.MergeJSONProcessor={onLoadStart:function(host,resource){return __awaiter(this,void 0,void 0,function(){var data,key;return __generator(this,function(_a){switch(_a.label){case 0:return[4,host.load(resource,processor_1.JsonProcessor)];case 1:data=_a.sent();for(key in data){RES.config.addSubkey(key,resource.name)}return[2,data]}})})},getData:function(host,resource,key,subkey){var data=host.get(resource);if(data){return data[subkey]}else{console.error("missing resource :"+resource.name);return null}},onRemoveStart:function(host,resource){return Promise.resolve()}};processor_1.ResourceConfigProcessor={onLoadStart:function(host,resource){return __awaiter(this,void 0,void 0,function(){var data,fileSystem;return __generator(this,function(_a){switch(_a.label){case 0:return[4,host.load(resource,processor_1.CommonJSProcessor)];case 1:data=_a.sent();fileSystem=new RES.NewFileSystem(data.resources);data.fileSystem=fileSystem;delete data.resource;RES.resourceTypeSelector=data.typeSelector;RES.resourceNameSelector=data.nameSelector?data.nameSelector:function(p){return p};return[2,data]}})})},onRemoveStart:function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2]})})}};processor_1.LegacyResourceConfigProcessor={onLoadStart:function(host,resource){return host.load(resource,processor_1.JsonProcessor).then(function(data){var resConfigData=RES.config.config;var fileSystem=resConfigData.fileSystem;if(!fileSystem){fileSystem={fsData:{},getFile:function(filename){return fsData[filename]},addFile:function(filename,type){if(!type)type="";fsData[filename]={name:filename,type:type,url:filename}},profile:function(){console.log(fsData)}};resConfigData.fileSystem=fileSystem}var groups=resConfigData.groups;for(var _i=0,_a=data.groups;_i<_a.length;_i++){var g=_a[_i];groups[g.name]=g.keys.split(",")}var alias=resConfigData.alias;var fsData=fileSystem["fsData"];var _loop_1=function(resource_1){fsData[resource_1.name]=resource_1;if(resource_1.subkeys){resource_1.subkeys.split(",").forEach(function(subkey){alias[subkey]=resource_1.name+"#"+subkey})}};for(var _b=0,_c=data.resources;_b<_c.length;_b++){var resource_1=_c[_b];_loop_1(resource_1)}return resConfigData})},onRemoveStart:function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2]})})}};var PVRParser=function(){function PVRParser(){}PVRParser.parse=function(arrayBuffer,callback,errorCallback){var headerIntLength=13;var header=new Uint32Array(arrayBuffer,0,headerIntLength);var pvrDatas={buffer:arrayBuffer,header:header};if(header[0]===55727696){PVRParser._parseV3(pvrDatas,callback,errorCallback)}else if(header[11]===559044176){PVRParser._parseV2(pvrDatas,callback,errorCallback)}else{errorCallback(pvrDatas,"pvr parse error!")}};PVRParser._parseV2=function(pvrDatas,callback,errorCallback){var header=pvrDatas.header;var headerLength=header[0],height=header[1],width=header[2],numMipmaps=header[3],flags=header[4],dataLength=header[5],bpp=header[6],bitmaskRed=header[7],bitmaskGreen=header[8],bitmaskBlue=header[9],bitmaskAlpha=header[10],pvrTag=header[11],numSurfs=header[12];var TYPE_MASK=255;var PVRTC_2=24,PVRTC_4=25;var formatFlags=flags&TYPE_MASK;var bpp,format;var _hasAlpha=bitmaskAlpha>0;if(formatFlags===PVRTC_4){format=_hasAlpha?PVRParser.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG:PVRParser.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;bpp=4}else if(formatFlags===PVRTC_2){format=_hasAlpha?PVRParser.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG:PVRParser.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;bpp=2}else{errorCallback(pvrDatas,"pvr v2 parse error");console.log("unknow format flags::"+formatFlags)}var dataOffset=headerLength;pvrDatas.pvrtcData=new Uint8Array(pvrDatas.buffer,dataOffset);pvrDatas.bpp=bpp;pvrDatas.format=format;pvrDatas.width=width;pvrDatas.height=height;pvrDatas.surfacesCount=numSurfs;pvrDatas.mipmapsCount=numMipmaps+1;pvrDatas.isCubemap=pvrDatas.surfacesCount===6;callback(pvrDatas)};PVRParser._parseV3=function(pvrDatas,callback,errorCallback){var header=pvrDatas.header;var bpp,format;var pixelFormat=header[2];switch(pixelFormat){case 0:bpp=2;format=PVRParser.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;break;case 1:bpp=2;format=PVRParser.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;break;case 2:bpp=4;format=PVRParser.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;break;case 3:bpp=4;format=PVRParser.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;break;default:errorCallback(pvrDatas,"pvr v3 parse error");console.log("unknow pixel format::"+pixelFormat)}var dataOffset=52+header[12];pvrDatas.pvrtcData=new Uint8Array(pvrDatas.buffer,dataOffset);pvrDatas.bpp=bpp;pvrDatas.format=format;pvrDatas.width=header[7];pvrDatas.height=header[6];pvrDatas.surfacesCount=header[10];pvrDatas.mipmapsCount=header[11];pvrDatas.isCubemap=pvrDatas.surfacesCount===6;callback(pvrDatas)};return PVRParser}();PVRParser.COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840;PVRParser.COMPRESSED_RGB_PVRTC_2BPPV1_IMG=35841;PVRParser.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842;PVRParser.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG=35843;if(typeof egret!="undefined"&&egret&&egret["web"]&&egret["web"].WebGLRenderContext){function textureLevelSize(format,width,height){switch(format){case PVRParser.COMPRESSED_RGB_PVRTC_4BPPV1_IMG:case PVRParser.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG:return Math.floor((Math.max(width,8)*Math.max(height,8)*4+7)/8);case PVRParser.COMPRESSED_RGB_PVRTC_2BPPV1_IMG:case PVRParser.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG:return Math.floor((Math.max(width,16)*Math.max(height,8)*2+7)/8);default:return 0}}egret["web"].WebGLRenderContext.prototype.createTextureFromCompressedData=function(data,width,height,levels,internalFormat){var gl=this.context;if(!this.pvrtcExt){this.pvrtcExt=gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc")}var texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);var offset=0;for(var i=0;i<levels;++i){var levelSize=textureLevelSize(internalFormat,width,height);var dxtLevel=new Uint8Array(data.buffer,data.byteOffset+offset,levelSize);gl.compressedTexImage2D(gl.TEXTURE_2D,i,internalFormat,width,height,0,dxtLevel);width=width>>1;if(width<1)width=1;height=height>>1;if(height<1)height=1;offset+=levelSize}gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);return texture}}processor_1.PVRProcessor={onLoadStart:function(host,resource){return __awaiter(this,void 0,void 0,function(){var arraybuffer,width,height,borderWidth,borderHeight,byteArray,list,pvrDataBuffer,i,buffer,dataLength,self,texture;return __generator(this,function(_a){switch(_a.label){case 0:return[4,host.load(resource,processor_1.BinaryProcessor)];case 1:arraybuffer=_a.sent();width=512;height=512;borderWidth=0;borderHeight=0;byteArray=new egret.ByteArray(arraybuffer);byteArray.position=7;list=["body","ext"];for(i=0;i<list.length;i++){buffer=void 0;switch(list[i]){case"body":byteArray.position+=2;dataLength=byteArray.readUnsignedInt();pvrDataBuffer=byteArray.buffer.slice(byteArray.position,byteArray.position+dataLength);byteArray.position+=dataLength;break;case"ext":byteArray.position+=6;width=byteArray.readUnsignedShort();height=byteArray.readUnsignedShort();borderWidth=byteArray.readUnsignedShort();borderHeight=byteArray.readUnsignedShort();break}}self=this;PVRParser.parse(pvrDataBuffer,function(pvrData){var bitmapData=new egret.BitmapData(pvrData);bitmapData.format="pvr";texture=new egret.Texture;texture._setBitmapData(bitmapData);texture.$initData(borderWidth,borderHeight,width,height,0,0,width,height,bitmapData.width,bitmapData.height)},function(){console.log("pvr error")});return[2,texture]}})})},onRemoveStart:function(host,resource){return Promise.resolve()}};var _map={image:processor_1.ImageProcessor,json:processor_1.JsonProcessor,text:processor_1.TextProcessor,xml:processor_1.XMLProcessor,sheet:processor_1.SheetProcessor,font:processor_1.FontProcessor,bin:processor_1.BinaryProcessor,commonjs:processor_1.CommonJSProcessor,sound:processor_1.SoundProcessor,movieclip:processor_1.MovieClipProcessor,pvr:processor_1.PVRProcessor,mergeJson:processor_1.MergeJSONProcessor,resourceConfig:processor_1.ResourceConfigProcessor,legacyResourceConfig:processor_1.LegacyResourceConfigProcessor}})(processor=RES.processor||(RES.processor={}))})(RES||(RES={}));var RES;(function(RES){var ResourceEvent=function(_super){__extends(ResourceEvent,_super);function ResourceEvent(type,bubbles,cancelable){if(bubbles===void 0){bubbles=false}if(cancelable===void 0){cancelable=false}var _this=_super.call(this,type,bubbles,cancelable)||this;_this.itemsLoaded=0;_this.itemsTotal=0;_this.groupName="";return _this}ResourceEvent.dispatchResourceEvent=function(target,type,groupName,resItem,itemsLoaded,itemsTotal){if(groupName===void 0){groupName=""}if(resItem===void 0){resItem=undefined}if(itemsLoaded===void 0){itemsLoaded=0}if(itemsTotal===void 0){itemsTotal=0}var event=egret.Event.create(ResourceEvent,type);event.groupName=groupName;if(resItem){event.resItem=RES.ResourceItem.convertToResItem(resItem)}event.itemsLoaded=itemsLoaded;event.itemsTotal=itemsTotal;var result=target.dispatchEvent(event);egret.Event.release(event);return result};return ResourceEvent}(egret.Event);ResourceEvent.ITEM_LOAD_ERROR="itemLoadError";ResourceEvent.CONFIG_COMPLETE="configComplete";ResourceEvent.CONFIG_LOAD_ERROR="configLoadError";ResourceEvent.GROUP_PROGRESS="groupProgress";ResourceEvent.GROUP_COMPLETE="groupComplete";ResourceEvent.GROUP_LOAD_ERROR="groupLoadError";RES.ResourceEvent=ResourceEvent})(RES||(RES={}));var RES;(function(RES){var ResourceItem;(function(ResourceItem){ResourceItem.TYPE_XML="xml";ResourceItem.TYPE_IMAGE="image";ResourceItem.TYPE_BIN="bin";ResourceItem.TYPE_TEXT="text";ResourceItem.TYPE_JSON="json";ResourceItem.TYPE_SHEET="sheet";ResourceItem.TYPE_FONT="font";ResourceItem.TYPE_SOUND="sound";function convertToResItem(r){var name="";if(!RES.config.config){name=r.url}else{for(var aliasName in RES.config.config.alias){if(RES.config.config.alias[aliasName]==r.url){name=aliasName}}}var result={name:name,url:r.url,type:r.type,data:r};return result}ResourceItem.convertToResItem=convertToResItem})(ResourceItem=RES.ResourceItem||(RES.ResourceItem={}))})(RES||(RES={}));var RES;(function(RES){RES.checkNull=function(target,propertyKey,descriptor){var method=descriptor.value;descriptor.value=function(){var arg=[];for(var _i=0;_i<arguments.length;_i++){arg[_i]=arguments[_i]}if(!arg[0]){console.warn("方法"+propertyKey+"的参数不能为null");return null}else{return method.apply(this,arg)}}};RES.FEATURE_FLAG={FIX_DUPLICATE_LOAD:1};var upgrade;(function(upgrade){var _level="warning";function setUpgradeGuideLevel(level){_level=level}upgrade.setUpgradeGuideLevel=setUpgradeGuideLevel})(upgrade=RES.upgrade||(RES.upgrade={}))})(RES||(RES={}));var RES;(function(RES){var versionInfo;function native_init(){if(egret.Capabilities.runtimeType==egret.RuntimeType.NATIVE){versionInfo=getLocalData("all.manifest")}}RES.native_init=native_init;function getRealURL(url){if(versionInfo&&versionInfo[url]){return"resource/"+versionInfo[url].v.substring(0,2)+"/"+versionInfo[url].v+"_"+versionInfo[url].s+"."+url.substring(url.lastIndexOf(".")+1)}else{return url}}RES.getRealURL=getRealURL;function getLocalData(filePath){if(egret_native.readUpdateFileSync&&egret_native.readResourceFileSync){var content=egret_native.readUpdateFileSync(filePath);if(content!=null){return JSON.parse(content)}content=egret_native.readResourceFileSync(filePath);if(content!=null){return JSON.parse(content)}}return null}})(RES||(RES={}));var RES;(function(RES){function registerAnalyzer(type,analyzerClass){throw new RES.ResourceManagerError(2002)}RES.registerAnalyzer=registerAnalyzer;function loadConfig(url,resourceRoot){if(url){RES.setConfigURL(url)}if(!instance)instance=new Resource;return instance.loadConfig()}RES.loadConfig=loadConfig;function loadGroup(name,priority,reporter){if(priority===void 0){priority=0}return instance.loadGroup(name,priority,reporter)}RES.loadGroup=loadGroup;function isGroupLoaded(name){return instance.isGroupLoaded(name)}RES.isGroupLoaded=isGroupLoaded;function getGroupByName(name){return instance.getGroupByName(name).map(function(r){return RES.ResourceItem.convertToResItem(r)})}RES.getGroupByName=getGroupByName;function createGroup(name,keys,override){if(override===void 0){override=false}return instance.createGroup(name,keys,override)}RES.createGroup=createGroup;function hasRes(key){return instance.hasRes(key)}RES.hasRes=hasRes;function getRes(key){return instance.getRes(key)}RES.getRes=getRes;function getResAsync(key,compFunc,thisObject){return instance.getResAsync.apply(instance,arguments)}RES.getResAsync=getResAsync;function getResByUrl(url,compFunc,thisObject,type){if(type===void 0){type=""}instance.getResByUrl(url,compFunc,thisObject,type)}RES.getResByUrl=getResByUrl;function destroyRes(name,force){return instance.destroyRes(name,force)}RES.destroyRes=destroyRes;function setMaxLoadingThread(thread){if(!instance)instance=new Resource;instance.setMaxLoadingThread(thread)}RES.setMaxLoadingThread=setMaxLoadingThread;function setMaxRetryTimes(retry){instance.setMaxRetryTimes(retry)}RES.setMaxRetryTimes=setMaxRetryTimes;function addEventListener(type,listener,thisObject,useCapture,priority){if(useCapture===void 0){useCapture=false}if(priority===void 0){priority=0}if(!instance)instance=new Resource;instance.addEventListener(type,listener,thisObject,useCapture,priority)}RES.addEventListener=addEventListener;function removeEventListener(type,listener,thisObject,useCapture){if(useCapture===void 0){useCapture=false}instance.removeEventListener(type,listener,thisObject,useCapture)}RES.removeEventListener=removeEventListener;function $addResourceData(data){instance.addResourceData(data)}RES.$addResourceData=$addResourceData;var Resource=function(_super){__extends(Resource,_super);function Resource(){return _super!==null&&_super.apply(this,arguments)||this}Resource.prototype.loadConfig=function(){var _this=this;RES.native_init();return RES.config.init().then(function(data){RES.ResourceEvent.dispatchResourceEvent(_this,RES.ResourceEvent.CONFIG_COMPLETE)},function(error){RES.ResourceEvent.dispatchResourceEvent(_this,RES.ResourceEvent.CONFIG_LOAD_ERROR);return Promise.reject(error)})};Resource.prototype.isGroupLoaded=function(name){var resources=RES.config.getGroupByName(name,true);return resources.every(function(r){return RES.host.get(r)!=null})};Resource.prototype.getGroupByName=function(name){return RES.config.getGroupByName(name,true)};Resource.prototype.loadGroup=function(name,priority,reporter){var _this=this;if(priority===void 0){priority=0}var reporterDelegate={onProgress:function(current,total){if(reporter&&reporter.onProgress){reporter.onProgress(current,total)}RES.ResourceEvent.dispatchResourceEvent(_this,RES.ResourceEvent.GROUP_PROGRESS,name,undefined,current,total)}};return this._loadGroup(name,priority,reporterDelegate).then(function(data){RES.ResourceEvent.dispatchResourceEvent(_this,RES.ResourceEvent.GROUP_COMPLETE,name)},function(error){RES.ResourceEvent.dispatchResourceEvent(_this,RES.ResourceEvent.GROUP_LOAD_ERROR,name);return Promise.reject(error)})};Resource.prototype._loadGroup=function(name,priority,reporter){if(priority===void 0){priority=0}var resources=RES.config.getGroupByName(name,true);return RES.queue.load(resources,reporter)};Resource.prototype.loadResources=function(keys,reporter){var resources=keys.map(function(key){var r=RES.config.getResourceWithSubkey(key,true);return r.r});return RES.queue.load(resources,reporter)};Resource.prototype.createGroup=function(name,keys,override){if(override===void 0){override=false}return RES.config.createGroup(name,keys,override)};Resource.prototype.hasRes=function(key){return RES.config.getResourceWithSubkey(key)!=null};Resource.prototype.getRes=function(resKey){var result=RES.config.getResourceWithSubkey(resKey);if(result){var r=result.r;var key=result.key;var subkey=result.subkey;var p=RES.processor.isSupport(r);if(p&&p.getData&&subkey){return p.getData(RES.host,r,key,subkey)}else{return RES.host.get(r)}}else{return null}};Resource.prototype.getResAsync=function(key,compFunc,thisObject){var paramKey=key;var _a=RES.config.getResourceWithSubkey(key,true),r=_a.r,subkey=_a.subkey;return RES.queue.loadResource(r).then(function(value){RES.host.save(r,value);var p=RES.processor.isSupport(r);if(p&&p.getData&&subkey){value=p.getData(RES.host,r,key,subkey)}if(compFunc){compFunc.call(thisObject,value,paramKey)}return value})};Resource.prototype.getResByUrl=function(url,compFunc,thisObject,type){if(type===void 0){type=""}var r=RES.config.getResource(url);if(!r){if(!type){type=RES.config.__temp__get__type__via__url(url)}r={name:url,url:url,type:type,extra:true};RES.config.addResourceData(r);r=RES.config.getResource(url);if(r){r.extra=true}else{throw"never"}}return RES.queue.loadResource(r).then(function(value){if(compFunc&&r){compFunc.call(thisObject,value,r.url)}return value})};Resource.prototype.destroyRes=function(name,force){if(force===void 0){force=true}return __awaiter(this,void 0,void 0,function(){var group,remove,_i,group_2,item,item;return __generator(this,function(_a){switch(_a.label){case 0:group=RES.config.getGroup(name);remove=function(r){return RES.queue.unloadResource(r)};if(!(group&&group.length>0))return[3,5];_i=0,group_2=group;_a.label=1;case 1:if(!(_i<group_2.length))return[3,4];item=group_2[_i];return[4,remove(item)];case 2:_a.sent();_a.label=3;case 3:_i++;return[3,1];case 4:return[2,true];case 5:item=RES.config.getResource(name);if(!item)return[3,7];return[4,remove(item)];case 6:_a.sent();return[2,true];case 7:console.warn("无法删除指定组:"+name);return[2,false]}})})};Resource.prototype.setMaxLoadingThread=function(thread){if(thread<1){thread=1}};Resource.prototype.setMaxRetryTimes=function(retry){retry=Math.max(retry,0)};Resource.prototype.addResourceData=function(data){RES.config.addResourceData(data)};return Resource}(egret.EventDispatcher);__decorate([RES.checkCancelation],Resource.prototype,"loadConfig",null);__decorate([RES.checkCancelation],Resource.prototype,"_loadGroup",null);__decorate([RES.checkNull],Resource.prototype,"hasRes",null);__decorate([RES.checkNull],Resource.prototype,"getRes",null);__decorate([RES.checkNull,RES.checkCancelation],Resource.prototype,"getResAsync",null);__decorate([RES.checkNull,RES.checkCancelation],Resource.prototype,"getResByUrl",null);RES.Resource=Resource;var instance})(RES||(RES={}));