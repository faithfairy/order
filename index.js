/*****  登录注册操作  ********/
/*  隐藏所有  */
var popClose = function () {
    $(".signin-box").css("display", "none");
    $(".register-box").css("display", "none");
    $(".password-box").css("display", "none");
    $(".nickname-box").css("display", "none");
};
/*  进入注册账户 按钮  */
var registerSubmit = function () {
    popClose();
    $(".register-box").css("display", "block");
};
/*  提交邮箱名 按钮  */
var emailSubmit = function () {
    if ($.trim($("#inputName").val()) == '') {
        dangerAlertShow("请输入邮箱");
    } else {
        dangerAlertShow("进入邮箱点击验证地址！");
        popClose();
        $(".password-box").css("display", "block");
    }
};
/*  提交密码验证  */
var passwordVertion = function () {
    if ($.trim($("#inputPassword").val()) == '') {
        dangerAlertShow("请输入密码");
        return false;
    }
    if ($.trim($("#inputPasswordAgain").val()) == '') {
        dangerAlertShow("请再次输入密码");
        return false;
    }
    if ($("#inputPassword").val() != $("#inputPasswordAgain").val()) {
        dangerAlertShow("两次密码不一致");
        return false;
    }
    return true;
};
/*  提交密码  */
var passwordSubmit = function () {
    if (passwordVertion()) {
        dangerAlertShow("注册成功");
    }
};
/*  游客访问 按钮  */
var touristSubmit = function () {
    $(".pop-bg").hide();
    $(".pop").hide();
    $("#navsTop").show();
    $("#order").show();
    var name = "";
    WebSok(name);
};
/*  忘记密码 按钮  */
var forgetSubmit = function () {
    dangerAlertShow("对不起，只有良哥能帮你！");
};
/*  返回到登录窗口  */
var backGo = function () {
    popClose();
    $(".signin-box").css("display", "block");
};
/*  弹出红色提示框  */
var dangerAlertShow = function (text) {
    $("#dangerAlert").text(text);
    $("#dangerAlert").stop().fadeIn();
    setTimeout(function () {
        $("#dangerAlert").stop().fadeOut(1500);
    }, 1000);
};
/*  弹出绿色提示框  */
var successAlert = function (text) {
    $("#successAlert").text(text);
    $("#successAlert").stop().fadeIn();
    setTimeout(function () {
        $("#successAlert").stop().fadeOut(1000);
    }, 1000);
};
/*  登录验证  */
var NAMEYZ = 0;
var signinVertion = function () {
    if ($.trim($("#signinName").val()) == '') {
        dangerAlertShow("请输入邮箱");
        return false;
    }
    if ($.trim($("#signinPassword").val()) == '') {
        dangerAlertShow("请输入密码");
        return false;
    }
    return true;
};
/*  登录按钮  */
var signinSubmit = function () {
    if (signinVertion()) {
        popClose();
        $(".nickname-box").css("display", "block");
    }
};
/*  输入昵称 进入系统  */
var goRoomSubmit = function () {
    if ($.trim($("#nickName").val()) == '') {
        dangerAlertShow("请输入帅气的昵称");
    } else {
        $(".pop-bg").hide();
        $(".pop").hide();
        $("#navsTop").show();
        $("#order").show();
        var name = $("#nickName").val();
        NAMEYZ = 1;
        WebSok(name);
    }
};
/*****  登录注册操作 end  *****/

/*****  点菜操作  *****/
/*  切换到点菜界面  */
var orderShow = function () {
    if ($("#navOrder").hasClass("active")) {

    } else {
        $("#navs li").removeClass("active");
        $("#navOrder").addClass("active");
        $("#shoppingCar").hide();
        $("#order").show();
    }
};
/*  切换到购物车界面  */
var shoppingShow = function () {
    if ($("#navShopping").hasClass("active")) {

    } else {
        $("#navs li").removeClass("active");
        $("#navShopping").addClass("active");
        $("#order").hide();
        $("#shoppingCar").show();
    }
};
/*  菜单数据  */
var orderData = {
    list: [
        {
            className: '特价菜',
            classList: [
                { name: '宫爆鸡丁', price: '12' },
                { name: '溜肝尖', price: '12' },
                { name: '鱼香肉丝', price: '16' },
                { name: '醋溜土豆丝', price: '9' }
            ]
        }, {
            className: '热菜',
            classList: [
                { name: '滑蛋豆腐', price: '26' },
                { name: '鲍鱼（蒜蓉蒸）', price: '28/只' },
                { name: '鲍鱼（鲍汁）', price: '28/只' },
                { name: '鲍鱼（香辣）', price: '28/只' },
                { name: '蒜茸粉丝蒸扇贝', price: '8/只' },
                { name: '铁板黑椒牛肉', price: '42' },
                { name: '铁板鱿鱼花', price: '38' },
                { name: '铁板酱香茄', price: '22' },
                { name: '铁板水晶粉', price: '22' },
                { name: '铁板玉豆腐', price: '26' },
                { name: '干锅茶树菇', price: '32' },
                { name: '干锅鱿鱼须', price: '36' },
                { name: '干锅鸭头', price: '38' },
                { name: '铁板海鲜全家福', price: '45' },
                { name: '干锅肥肠', price: '38' },
                { name: '干锅土豆片', price: '25' },
                { name: '干锅有机菜花', price: '26' },
                { name: '干锅牛娃', price: '48' },
                { name: '干锅千叶豆腐', price: '26' },
                { name: '干锅藕片', price: '26' },
                { name: '干锅娃娃菜', price: '26' },
                { name: '干锅野生菌', price: '28' },
                { name: '浓汤娃娃菜', price: '26' },
                { name: '香菇油菜', price: '18' },
                { name: '白灼芥兰（蒜茸）', price: '22' },
                { name: '白灼芥兰（炝炒）', price: '22' },
                { name: '木耳兰豆炒山药', price: '26' },
                { name: '韭菜炒蛋', price: '18' },
                { name: '清炒西兰花（蒜茸）', price: '22' },
                { name: '清炒西兰花（炝炒）', price: '22' },
                { name: '清炒荷兰豆（蒜茸）', price: '26' },
                { name: '清炒荷兰豆（炝炒）', price: '26' },
                { name: '蚝油生菜（蒜茸）', price: '18' },
                { name: '蚝油生菜（炝炒）', price: '18' },
                { name: '红烧茄子', price: '18' },
                { name: '荷塘小炒', price: '26' },
                { name: '毛豆烧茄子', price: '22' },
                { name: '腰果西芹百合', price: '28' },
                { name: '香锅鸭三宝', price: '46' },
                { name: '焦溜丸子', price: '36' },
                { name: '八珍豆腐煲', price: '36' },
                { name: '西芹腰果炒鸡丁', price: '36' },
                { name: '糖醋里脊', price: '28' },
                { name: '小土豆红烧肉', price: '36' },
                { name: '农家手撕包菜', price: '16' },
                { name: '蛋黄南瓜', price: '26' },
                { name: '水煮猪肉', price: '28' },
                { name: '水煮牛肉', price: '34' },
                { name: '溜肥肠', price: '36' },
                { name: '三鲜日本豆腐', price: '26' },
                { name: '韭菜小河虾', price: '36' },
                { name: '小炒猪蹄', price: '28' },
                { name: '泡椒鱼肚', price: '36' },
                { name: 'XO酱藕盒', price: '38' },
                { name: '麻辣两江鱼', price: '46' },
                { name: '糖醋鱼片', price: '36' },
                { name: '蒜烧鱼块', price: '36' },
                { name: '蛋黄肉松茶树菇', price: '32' },
                { name: '外婆肉夹饼', price: '32' },
                { name: '三鱼千叶豆腐', price: '26' },
                { name: '三鲜油豆皮', price: '26' },
                { name: '椒盐小河虾', price: '36' },
                { name: '西红柿牛腩', price: '38' },
                { name: '白菜炖豆腐', price: '22' },
                { name: '毛豆茶树菇肉丝', price: '29' },
                { name: '家常豆腐', price: '22' },
                { name: '西芹腰果虾仁', price: '48' },
                { name: '干炸鲜蘑', price: '26' },
                { name: '海天乱炖', price: '38' },
                { name: '软炸虾仁', price: '42' },
                { name: '酸菜鱼', price: '38' },
                { name: '麻婆豆腐', price: '12' },
                { name: '杂菌炖柴鸡', price: '45' },
                { name: '椒盐虾', price: '45' },
                { name: '东坡肘子', price: '58' },
                { name: '清蒸鲈鱼', price: '68' },
                { name: '梅菜扣肉', price: '36' },
                { name: '酸汤江团', price: '58' },
                { name: '清蒸多宝鱼', price: '68' },
                { name: '蒜茸丝瓜开边虾', price: '58' },
                { name: '滋补养生坛子肉', price: '28/小' },
                { name: '滋补养生坛子肉', price: '58/大' },
                { name: '糯米排骨', price: '38' },
                { name: '老厨白菜', price: '22' },
                { name: '老北京炖带鱼', price: '38' },
                { name: '老北京烤肉', price: '39' },
                { name: '松仁玉米', price: '26' },
                { name: '羊油麻豆腐', price: '16' },
                { name: '铁板羊肉', price: '46' },
                { name: '海天霸王茄', price: '28' },
                { name: '麻酱油泼羊肉', price: '46' },
                { name: '炒合菜', price: '22' },
                { name: '些鸡泡饼', price: '45' },
                { name: '葱爆羊肉', price: '42' },
                { name: '地三鲜', price: '18' },
                { name: '木须肉', price: '22' },
                { name: '海米竹海笋尖', price: '32' },
                { name: '小炒竹海笋尖', price: '35' },
                { name: '干锅竹海笋尖', price: '36' },
                { name: '农家小炒肉', price: '28' },
                { name: '脆皮日本豆腐', price: '22' },
                { name: '干煸豆角', price: '22' },
                { name: '香辣腰片', price: '38' },
                { name: '虾酱烧豆腐', price: '26' },
                { name: '砂锅扁豆丝', price: '26' },
                { name: '小土豆烧牛腩', price: '42' },
                { name: '香锅鱿鱼虾', price: '66' },
                { name: '农夫烤牛蛙', price: '68' },
                { name: '风味烤虾', price: '68' },
                { name: '风味烤翅', price: '58' },
                { name: '什锦素香锅', price: '42' },
                { name: '秘制吊烧鸡', price: '48' },
                { name: '石烹脆肠', price: '68' },
                { name: '泡椒脆肠', price: '48' },
                { name: '剁椒鱼头', price: '68' },
                { name: '精品毛血旺', price: '42' },
                { name: '冰火两重天', price: '42' },
                { name: '馋嘴娃', price: '58' },
                { name: '青椒毛血旺', price: '42' },
                { name: '青椒腰花', price: '42' },
                { name: '青椒双脆', price: '42' },
                { name: '豆角焖排骨', price: '42' },
                { name: '京味炸丸子', price: '32' },
                { name: '京味炖吊子', price: '42' },
                { name: '溜三样', price: '36' },
                { name: '火爆腰花', price: '36' },
                { name: '鱼头泡饼', price: '68' },
                { name: '风味排骨鸡', price: '48' }
            ]
        }, {
            className: '凉菜',
            classList: [
                { name: '果蔬大拌菜', price: '22' },
                { name: '老北京肉皮冻', price: '18' },
                { name: '老醋花生', price: '12' },
                { name: '乳瓜沾酱', price: '16' },
                { name: '果仁菠菜', price: '13' },
                { name: '盐水鸡', price: '28' }
            ]
        }, {
            className: '烤鸭',
            classList: [
                { name: '普通烤鸭（不含鸭头）', price: '98/套' },
                { name: '普通烤鸭（不含鸭头）', price: '58/半套' },
                { name: '精品烤鸭', price: '118/套' }
            ]
        }, {
            className: '巫山烤鱼（麻辣、豆豉、黑椒、香辣、酸菜、泡椒、鲜椒）',
            classList: [
                { name: '草鱼', price: '28/斤' },
                { name: '乌江鱼', price: '38/斤' },
                { name: '鲶鱼', price: '38/斤' },
                { name: '江团', price: '59斤' }
            ]
        }, {
            className: '烤鱼伴侣',
            classList: [
                { name: '莲藕片', price: '6' },
                { name: '鲜菌', price: '6' },
                { name: '豆腐', price: '6' },
                { name: '腐竹', price: '6' },
                { name: '千叶豆腐', price: '6' },
                { name: '土豆', price: '6' },
                { name: '鲜豆皮', price: '6' },
                { name: '豆芽', price: '6' },
                { name: '青笋', price: '6' },
                { name: '鸭血', price: '6' },
                { name: '黑木耳', price: '6' },
                { name: '宽粉', price: '6' },
                { name: '金针菇', price: '6' },
                { name: '生菜', price: '6' },
                { name: '黑豆皮', price: '6' },
                { name: '有机菜花', price: '6' }
            ]
        }
    ]
};
var shoppingData = {
    list: []
};
var peopleData = {
    list: []
};

/*  菜单渲染方式  */
var orderBox = [
    '{@each list as it, k}',
    '<div class="panel panel-success">',
    '<div class="panel-heading">',
    '<h3 class="panel-title">${it.className}</h3>',
    '</div>',
    '<div class="panel-body">',
    '<ul class="list-group">',
    '{@each it.classList as item, k}',
    '<li onClick="addItem(\'${it.className}\',\'${item.name}\' )" class="list-group-item">',
    '<span class="glyphicon glyphicon-plus"></span>',
    '${item.name}',
    '<div class="pull-right text-danger">',
    '<span class="glyphicon glyphicon-jpy"></span>',
    '${item.price}',
    '</div>',
    '</li>',
    '{@/each}',
    '</ul>',
    '</div>',
    '</div>',
    '{@/each}'
].join('\n');

var shoppingBox = [
    '<div class="panel panel-success">',
    '<div class="panel-heading">',
    '<h3 class="panel-title">购物车</h3>',
    '</div>',
    '<div class="panel-body">',
    '<ul class="list-group">',
    '{@each list as it, k}',
    '<li class="list-group-item" onClick="deleteItem(\'${it.name}\')">',
    '${it.name} (${it.people})',
    '<div class="pull-right text-danger">',
    '<span class="glyphicon glyphicon-trash" ></span>',
    '</div>',
    '</li>',
    '{@/each}',
    '</ul>',
    '</div>',
    '<ul class="list-group">',
    '<li class="list-group-item">总数量：<span id="num-total">0</span></li>',
    '<li class="list-group-item">总金额：<span id="pirce-total">0</span></li>',
    '</ul>',
    '</div>'
].join('\n');

var peopleBox = [
    '<div class="list-group">',
    '<a href="#" class="list-group-item active">',
    '<h5 class="list-group-item-heading">参加人员</h5>',
    '<div class="list-group-item-text" style="overflow:hidden;">',
    '{@each list as it}',
    '<div class="pull-left m-r">',
    '<span class="glyphicon glyphicon-user" style="color:#fff;"></span>',
    '<span>${it}</span>',
    '</div>',
    '{@/each}',
    '</div>',
    '<h6 class="peopleLi red ">总人数：<span id="room-total"></span></h6>',
    '</a>',
    '</div>'
].join('\n');

var inc = function (n) {
    return n + 1;
};

// 生成菜单字典
var Dictionaries = {};
for (var i = 0; i < orderData.list.length; i++) {
    if (orderData.list[i].classList.length) {
        for (var n = 0; n < orderData.list[i].classList.length; n++) {
            Dictionaries[orderData.list[i].classList[n].name] = orderData.list[i].classList[n].price;
        }
    }
};


var starttimestamp = new Date().getTime();

juicer.set('cache', true);
juicer.set('errorhandling', false);
juicer.set('strip', true);
juicer.set('detection', false);

// for(var i=0;i<1000;i++) {
//     juicer(orderBox,data);
// }

var endtimestamp = new Date().getTime();
var exhausttime = endtimestamp - starttimestamp;

document.getElementById("order").innerHTML = juicer(orderBox, orderData);
document.getElementById("people").innerHTML = juicer(peopleBox, peopleData);



// 列表展开事件
$(".arrType div").click(function () {
    if ($(this).siblings("ul").hasClass("active")) {
        $(this).siblings("ul").removeClass("active");
    } else {
        $(".arrType div").siblings("ul").removeClass("active");
        $(this).siblings("ul").addClass("active");
    }
});


var ws = "";
function WebSok(name) {
    ws = new WebSocket("ws://192.168.1.15:9000/order?people=" + name);
    //ws = new WebSocket("ws://192.168.1.215:9000/order?people="+name);
    ws.onmessage = function (e) {
        var DATA = JSON.parse(e.data);
        if (DATA.course) {
            if (shoppingData.list.length < DATA.course.length) {
                successAlert("添加了菜");
            }
            if (shoppingData.list.length > DATA.course.length) {
                dangerAlertShow("删除了菜");
            }
            shoppingData.list = DATA.course;
        }


        peopleData.list = DATA.crew;

        var num = 0;
        var total = 0;
        var roomTotal = 0;

        if (shoppingData.list) {
            num = shoppingData.list.length;
            roomTotal = peopleData.list.length;
            if (num > 0) {
                for (var i = 0; i < shoppingData.list.length; i++) {
                    var Name = shoppingData.list[i].name;
                    total = total + parseInt(Dictionaries[Name]);
                }
            }
            document.getElementById("shopping").innerHTML = juicer(shoppingBox, shoppingData);
            document.getElementById("num-total").innerText = num;
            document.getElementById("pirce-total").innerText = total;
            document.getElementById("shoppingNum").innerText = num;
        }
        document.getElementById("people").innerHTML = juicer(peopleBox, peopleData);
        document.getElementById("room-total").innerText = roomTotal;
    }
};


// 添加菜
var addItem = function (type, name) {
    if (NAMEYZ == 1) {
        var Odata = {};
        Odata[name] = 1;
        ws.send(JSON.stringify(Odata));
    } else {
        dangerAlertShow("你只是个游客！ 呵~呵~");
    }
};

// 删除菜
var deleteItem = function (name) {
    if (NAMEYZ == 1) {
        if (confirm("你确定要删除吗？")) {
            var Odata = {};
            Odata[name] = 0;
            ws.send(JSON.stringify(Odata));
        }
    } else {
        dangerAlertShow("你只是个游客！ 呵~呵~");
    }
};


