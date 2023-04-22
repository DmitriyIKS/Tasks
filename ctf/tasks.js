// 0JXRgdC70Lgg0YLRiyDQstC40LTQuNGI0Ywg0Y3RgtC+0YIg0YLQtdC60YHRgiDRgdC60LDQttC4INC80LDRgdGC0LXRgNGDINC60L7QtNC+0LLQvtC1INGB0LvQvtCy0L4gItC70L7QuzY0Ig==

var hex7461736b31 = "ZmxhZ3tyZXBsNGNpbmdfY28wa2llc19pc18zYXN5fQ==";
var hex7461736b32 = "ZmxhZ3toMWo0Y2tfdGgzX3BsNG4zX3QwbjFnaHR9";
var hex7461736b33 = "ZmxhZ1dOR3tiMW53YTFrXzF0c19rcnV0b30=";
var hex7461736b34 = "ZmxhZ1dOR3tibXBfMXRzX3MwXzNhc3l9";
var hex7461736b35 = "ZmxhZ1dOR3tVX2NATl9kMF9tMFIzX1RoQE5fVV9UaDFOS30=";
var hex7461736b36 = "ZmxhZ1dOR3tOb3d5b3V1bmRlcnN0YW5kY3J5cHRvZ3JhcGh5fQ==";

function check_answer1() {
    sub1 = document.getElementById('in1').value
    hex636f7272656374 = lmaojsdlfgsdflgh(hex7461736b31)
    if (sub1 == hex636f7272656374){
        document.getElementById('res1').innerHTML = lmaojsdlfgsdflgh('Y29ycmVjdCE=')
        document.getElementById('btn01').style.background = 'green' 
    }
    else{
        document.getElementById('res1').innerHTML = lmaojsdlfgsdflgh('dW5jb3JyZWN0IQ==')
        document.getElementById('btn01').style.background = 'red'
        setTimeout(default_color, 2500, 'btn01')
    }
}

function check_answer2() {
    sub2 = document.getElementById('in2').value
    hex636f7272656374 = lmaojsdlfgsdflgh(hex7461736b32)
    if (sub2 == hex636f7272656374){
        document.getElementById('res2').innerHTML = lmaojsdlfgsdflgh('Y29ycmVjdCE=') 
        document.getElementById('btn02').style.background = 'green'
    }
    else{
        document.getElementById('res2').innerHTML = lmaojsdlfgsdflgh('dW5jb3JyZWN0IQ==')
        document.getElementById('btn02').style.background = 'red'
        setTimeout(default_color, 2500, 'btn02')
    }
}

function check_answer3() {
    sub3 = document.getElementById('in3').value
    hex636f7272656374 = lmaojsdlfgsdflgh(hex7461736b33)
    if (sub3 == hex636f7272656374){
        document.getElementById('res3').innerHTML = lmaojsdlfgsdflgh('Y29ycmVjdCE=') 
        document.getElementById('btn03').style.background = 'green'
    }
    else{
        document.getElementById('res3').innerHTML = lmaojsdlfgsdflgh('dW5jb3JyZWN0IQ==')
        document.getElementById('btn03').style.background = 'red'
        setTimeout(default_color, 2500, 'btn03')
    }
}


function check_answer4() {
    sub4 = document.getElementById('in4').value
    hex636f7272656374 = lmaojsdlfgsdflgh(hex7461736b34)
    if (sub4 == hex636f7272656374){
        document.getElementById('res4').innerHTML = lmaojsdlfgsdflgh('Y29ycmVjdCE=')
        document.getElementById('btn04').style.background = 'green'
    }
    else{
        document.getElementById('res4').innerHTML = lmaojsdlfgsdflgh('dW5jb3JyZWN0IQ==')
        document.getElementById('btn04').style.background = 'red'
        setTimeout(default_color, 2500, 'btn04')
    }
}

function check_answer5() {
    sub5 = document.getElementById('in5').value
    hex636f7272656374 = lmaojsdlfgsdflgh(hex7461736b35)
    if (sub5 == hex636f7272656374){
        document.getElementById('res5').innerHTML = lmaojsdlfgsdflgh('Y29ycmVjdCE=')
        document.getElementById('btn05').style.background = 'green'
    }
    else{
        document.getElementById('res5').innerHTML = lmaojsdlfgsdflgh('dW5jb3JyZWN0IQ==')
        document.getElementById('btn05').style.background = 'red'
        setTimeout(default_color, 2500, 'btn05')
    }
}


function check_answer6() {
    sub6 = document.getElementById('in6').value
    hex636f7272656374 = lmaojsdlfgsdflgh(hex7461736b36)
    if (sub6 == hex636f7272656374){
        document.getElementById('res6').innerHTML = lmaojsdlfgsdflgh('Y29ycmVjdCE=')
        document.getElementById('btn06').style.background = 'green'
    }
    else{
        document.getElementById('res6').innerHTML = lmaojsdlfgsdflgh('dW5jb3JyZWN0IQ==')
        document.getElementById('btn06').style.background = 'red'
        setTimeout(default_color, 2500, 'btn06')
    }
}

function loefhhdshsadfl(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
    }));
}

function lmaojsdlfgsdflgh(str) {
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}


function default_color(id){
    document.getElementById(id).style.background = '#a8a8a8'
}