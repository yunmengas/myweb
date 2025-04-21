// 假设这是你的图片URLs数组  
const imageUrls = [
    'https://photo.tuchong.com/2309799/g/820855859.webp',
    'https://photo.tuchong.com/16609724/g/1309030319.webp',
    "https://photo.tuchong.com/1816408/g/1182284719.webp",
    // ... 你可以添加更多的URLs  
];

// 函数用于加载图片到指定的div中  
function loadImagesToDiv(divId, urls) {
    const container = document.getElementById(divId);

    // 遍历URLs数组  
    urls.forEach(url => {
        // 创建一个新的img元素  
        const img = document.createElement('img');
        img.src = url; // 设置图片的源URL  
        img.alt = '加载的图片'; // 设置图片的替代文本  

        // 可选：为图片添加样式或类  
        img.style.width = '280px'; // 例如，设置图片的宽度 
        img.style.height = '180px'
        img.className = 'my-img'; // 添加CSS类  
        img.id='img-li';

        // 将图片添加到div中  
        container.appendChild(img);

        // 可选：为图片添加加载完成或失败的事件监听器  

    });
}

// 调用函数，加载图片到id为'imageContainer'的div中  


//loader显示和隐藏

var loader = document.getElementById("loader");

loader.style.display = "none";


document.getElementById('btn').addEventListener('click', function () {




    var input = document.getElementById("myinput");
    // 获取input元素中的值

    var value = input.value;
    // 这里仅作为示例，将值输出到控制台  
    if (value.length != 0) {


        loader.style.display = "";
        const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
        const url = "https://www.hhlqilongzhu.cn/api/sp_jx/tuji.php?url=" + value.match(urlRegex);


        fetch(url)
            .then(response => response.json())
            .then(res => {
                loadImagesToDiv('imageContainer', res.data.images);
                // console.log(res.data.images)
                // toggleDisplay("loader");
                loader.style.display = "none";

            })
            .catch(err => console.error(err))

    } else {
        alert("你干嘛~~   想让我解析空白吗？");
    }

});

