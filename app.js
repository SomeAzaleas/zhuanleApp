App({
    options: {
        debug: true
    },
    /**
     * 当wap2app初始化完成时，会触发 onLaunch
     */
    onLaunch: function(options) {  
		alert(plus.runtime.version);
        /************升级检测代码开始********** */  
        var ua = navigator.userAgent;  
        //Html5Plus环境，但不是流应用环境  
        if(ua.indexOf('Html5Plus')>-1 && ua.indexOf('StreamApp')==-1){  
            var url = "http://www.example.com/check/update";//检查更新地址  
            var req = {//升级检测数据  
                "appid": plus.runtime.appid,  
                "version": plus.runtime.version  
            };  
    
            wap2app.ajax.get(url, req, function(rsp) {  
                if(rsp && rsp.status){  
                    //需要更新，提示用户  
                    plus.nativeUI.confirm(rsp.note, function(event) {  
                        if(0 == event.index) {//用户点击了“立即更新”按钮  
                            plus.runtime.openURL(rsp.url);  
                        }  
                    }, rsp.title, ["立即更新", "取　　消"]);  
                }              
            });  
        }  
        /************升级检测代码结束********** */  
    },
    /**
     * 当wap2app启动，或从后台进入前台显示，会触发 onShow
     */
    onShow: function() {
        console.log('show');
    },
    /**
     * 当wap2app从前台进入后台，会触发 onHide
     */
    onHide: function() {
        console.log('hide');
    }
});
Page('__W2A__new.7demo.cn', { //首页扩展配置
    onShow: function() {
    },
    onClose: function() {
		
    }
});
Page('login', { //登陆页扩展配置
    onShow: function() {

    },
    onClose: function() {
		plus.webview.getLaunchWebview().reload();
    }
});