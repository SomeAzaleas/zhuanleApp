//修改完头像后返回页面
var old_back = mui.back;  
mui.back = function() {
	if(window.location.pathname == '/user/user/profile.html'){
		window.location.href = '/user/user/ucenter.html';
	}
	else{
		old_back();
	}
}; 