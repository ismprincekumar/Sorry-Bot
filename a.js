window.addEventListener("mouseover",play);
window.addEventListener("click",play);
function play(){ 
    document.getElementById("aud").play();
}




var x = 0
//closing and opening section ---------------------

function normal(){
    $("#bar_1").css("transform","rotate(0deg)");
    $("#bar_2").css("transform","rotate(0deg)");
    $("#bar_3").css("transform","rotate(0deg)");
    $(".bar_content_container").css("left","-80vw");
    $(".bar_container").css("left","0vw");
    $("#primary").css("left","0vw");
    $(".containt").css("left","0vw");
}

function bar_function(){
    if (x==0){
        $("#bar_1").css("transform","rotate(45deg)");
        $("#bar_2").css("transform","rotate(-45deg)");
        $("#bar_3").css("transform","rotate(45deg)");
        $(".bar_content_container").css("left","0vw");
        $(".bar_container").css("left","80vw");
        $("#primary").css("left","80vw");
        $(".containt").css("left","80vw");
        x = 1;
    }
    else{
        normal();
        x = 0;
    }
}


function openCake(){
    normal();
    $("#birthday_cake").css("display","block");
}
function closeCake(){
    normal();
    $("#birthday_cake").css("display","none");
}
function openSpin(){
    normal();
    $("#spin_container").css("display","block");
}
function closeSpin(){
    normal();
    $("#spin_container").css("display","none");
}

function warning(){
    Swal.fire({
        icon: 'error',
        title: '😂😅 क्या लेगी बंदरिया गिफ्ट में  😅😂',
        html: 'अच्छा बता दे क्या चाहिए तुझे 1- 2 साल में जॉब करने लगेंगे तो दे ही देंगे। अभी Graduation में पापा के पैसे का तो नहीं देंगे |लेकिन फिलहाल तू सॉरी रख ले हमारा ',
        footer: '&copy All rights reserved !'
    });
}
//-------------------------------------------------


window.onload = function(){
    
    $(".loader_container").css("display","none");
    $(".bar_container").css("display","block");
    $("#primary").css("display","block");
    $(".containt").css("display","block");
    
    
    Swal.fire({
        icon: 'success',
        title: 'Welcome',
        html: 'Namisha Goswami',
        footer: '&copy All rights reserved !'
    });
    
    
    
    
    
    
    /*type writer effect logic --------------------*/
    var _CONTENT = [ 
         "𝐻𝑒𝓎𝓎𝓎𝓎𝓎𝓎 𝐵𝑜𝓉 🥺",
        "हमे पता है तू हमसे बहुत नाराज है, बहुत गुस्सा भी है ", 
        "और होना भी चाहिए, क्योंकि हमने काम ही ऐसा किया है", 
        "लेकिन मेरी Anger Angel , थोड़ा सा तो हम पर भरोसा कर ", 
        "हम अपने सपनों में भी तुझे अपने साथ देखना चाहते हैं,",
        "तो हकीकत में तुझसे दूर होने के बारे में कैसे सोच सकते हैं ",
        " तू हमे 2 थप्पड़ मार ले, सारे दांत तोड़ दे हमारे, जितनी गलियां तुझे आती हैं वो सब दे दे",
        "लेकिन Meri JAAN तू यू हमसे रूठ मत, तू हमारे लिए बहुत से भी ज्यादा माइने रखती है ",
        "दीदी और अपने Parents के सामने हम एक शब्द नही बोलते, डरते नहीं है",
        "बस एक Respect है उनके लिए, और उनकी बाते हमारे लिए बहुत important है ",
        "आज ये गलती से गलती हो गई है हमसे, आइंदा कभी ऐसा नहीं होगा, Pls Babu मान जा",
        "I'm So Sorry बन्दर, देख कान पकड़कर माफ़ी मांग रहे हैं, माफ कर दे यार "
    ];
    var _PART = 0;
    var _PART_INDEX = 0;
    var _INTERVAL_VAL;
    var _ELEMENT = document.querySelector("#text");
    var _CURSOR = document.querySelector("#cursor");
    
    function Type() { 
        var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
        _ELEMENT.innerHTML = text;
        _PART_INDEX++;

        if(text === _CONTENT[_PART]) {
            _CURSOR.style.display = 'none';

            clearInterval(_INTERVAL_VAL);
            setTimeout(function() {
                _INTERVAL_VAL = setInterval(Delete, 50);
            }, 1000);
        }
    }

    function Delete() {
        var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
        _ELEMENT.innerHTML = text;
        _PART_INDEX--;

        if(text === '') {
            clearInterval(_INTERVAL_VAL);

            if(_PART == (_CONTENT.length - 1))
                _PART = 0;
            else
                _PART++;
        
            _PART_INDEX = 0;

            setTimeout(function() {
                _CURSOR.style.display = 'inline-block';
                _INTERVAL_VAL = setInterval(Type, 200);
            }, 200);
        }
    }


    window.addEventListener('click', () => {

        document.getElementById("aud").play();});



    _INTERVAL_VAL = setInterval(Type, 100);
    /*type writer logic ends ----------------------*/
}