//点击事件


document.getElementById('goToBaidu').addEventListener('click', function () {
  //window.location.href = 'https://www.123pan.com/s/iuk0jv-i3V63.html'; // 注意：这里添加了https://前缀，因为大多数现代网站都使用HTTPS协议  
  window.location.href = 'index2.html';


});
// 获取QQ头像的函数
function loadQQAvatar(qqNumber) {
  const avatarUrl = `http://res.abeim.cn/api-qq.tx?qq=${qqNumber}`;
  const imgElement = document.getElementById('head-img');
  imgElement.src = avatarUrl;
}



// 调用函数加载QQ头像
const qqNumber = '2733426499'; // 替换为你要获取头像的QQ号码
loadQQAvatar(qqNumber);


//夸克跳转
document.getElementById('quark').addEventListener('click', function() {
  window.location.href = 'https://pan.quark.cn/s/24d569f84073';
});

//qq主页跳转
document.getElementById('qq').addEventListener('click', function() {
  window.location.href = 'https://qm.qq.com/cgi-bin/qm/qr?k=GJCnsvd5dzQTqf8dPiy9YuPuvZDt5RvB'; // QQ 空间主页链接
});





