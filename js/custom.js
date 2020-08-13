/*--popup--*/
$(document).ready(function () {
    PopUpHide();
});

function PopUpShow() {
    $("#popup1").show();
}

function PopUpHide() {
    $("#popup1").hide();
}

/*--переключение class border--*/
$(".buttons div").click(function (e) {
    $(".buttons div").removeClass('active');
    $(this).toggleClass('active');
});
$(".buttons div p").click(function (e) {
    $(".buttons div p").removeClass('active-name');
    $(this).toggleClass('active-name');
});

/*--добавление данные светильников с файла json при нажатии на тип светильника--*/
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
/*--добавление ККС с файла json при нажатии на наименование светильника--*/
/*var lt001 = document.getElementById('lt001');
var lt002 = document.getElementById('lt002');

lt001.addEventListener('click', function () {
    var kkc_catalog = document.getElementById('kkc_catalog');
    kkc_catalog.classList.remove("lt002");
    kkc_catalog.classList.add("lt001");
});
lt001.addEventListener('click', function () {
    var kkc_catalog = document.getElementById('kkc_catalog');
    kkc_catalog.classList.remove("lt001");
    kkc_catalog.classList.add("lt002");
});*/


/*--добавление данные светильников с файла json при нажатии на тип светильника--*/
btn1.addEventListener('click', function () {

    $(document).ready(function () {
        var getSomeDate = function () {
            var date;

            $.ajax({
                url: 'PRS_R_ECO_LED.json',
                dataType: 'json',
                success: function (resp) {
                    date = resp;
                    updatePost(date)
                }
            });
            return date;
        };

        getSomeDate();

        function updatePost(date) {
            var posts = date.map((el, item) => {

                return (`
                     <div class="item_wrap-name">
                            <h1 class="item_name">${el.PRS_R_ECO_LED[0].mainTypeLighting}</h1>
                            <h1 class="item_name"> ${el.PRS_R_ECO_LED[0].mainNameLighting}</h1>
                            <br>
                            <h1 class="item_name"> ${el.PRS_R_ECO_LED[1].installation}</h1>
                            <h1 class="item_name"> ${el.PRS_R_ECO_LED[1].design}</h1>
                            <br>
                            <h1 class="item_name"> ${el.PRS_R_ECO_LED[2].PRS_R_ECO_LED_595[0].name}</h1>
                            <h1 class="item_name"> ${el.PRS_R_ECO_LED[2].PRS_R_ECO_LED_595[0].lightFlow}</h1>
                        </div>
                         `)
            });

            $('#item-wrapper').append(posts);
        }

    })
});

btn2.addEventListener('click', function () {

    $(document).ready(function () {
        var getSomeDate = function () {
            var date;

            $.ajax({
                url: 'PRS_R_ECO_LED.json',
                dataType: 'json',
                success: function (resp) {
                    date = resp;
                    updatePost(date)
                }
            });
            return date;
        };

        getSomeDate();

        function updatePost(date) {
            var posts = date.map((el, item) => {

                return (`
                     <div class="item_wrap-name">
                            <h1 class="item_name">${el.PRS_R_ECO_LED[0].mainTypeLighting}</h1>
                            <h1 class="item_name"> ${el.PRS_R_ECO_LED[0].mainNameLighting}</h1>
                            <br>
                            <h1 class="item_name"> ${el.PRS_R_ECO_LED[1].installation}</h1>
                            <h1 class="item_name"> ${el.PRS_R_ECO_LED[1].design}</h1>
                            <br>
                            <h1 class="item_name"> ${el.PRS_R_ECO_LED[2].PRS_R_ECO_LED_595_A[0].name}</h1>
                            <h1 class="item_name"> ${el.PRS_R_ECO_LED[2].PRS_R_ECO_LED_595_A[0].lightFlow}</h1>
                        </div>
                         `)
            });

            $('#item-wrapper').append(posts);
        }

    })
});

btn3.addEventListener('click', function () {

    $(document).ready(function () {
        var getSomeDate = function () {
            var date;

            $.ajax({
                url: 'PRS_R_ECO_LED.json',
                dataType: 'json',
                success: function (resp) {
                    date = resp;
                    updatePost(date)
                }
            });
            return date;
        };

        getSomeDate();

        function updatePost(date) {
            var posts = date.map((el, item) => {

                return (`
                     <div class="item_wrap-name">
                            <h1 class="item_name">${el.PRS_R_ECO_LED[0].mainTypeLighting}</h1>
                            <h1 class="item_name"> ${el.PRS_R_ECO_LED[0].mainNameLighting}</h1>
                            <br>
                            <h1 class="item_name"> ${el.PRS_R_ECO_LED[1].installation}</h1>
                            <h1 class="item_name"> ${el.PRS_R_ECO_LED[1].design}</h1>
                            <br>
                            <h1 class="item_name"> ${el.PRS_R_ECO_LED[2].PRS_R_ECO_LED_595_HFD_4000K[0].name}</h1>
                            <h1 class="item_name"> ${el.PRS_R_ECO_LED[2].PRS_R_ECO_LED_595_HFD_4000K[0].lightFlow}</h1>
                        </div>
                         `)
            });

            $('#item-wrapper').append(posts);
        }

    })
});

btn4.addEventListener('click', function () {

    $(document).ready(function () {
        var getSomeDate = function () {
            var date;

            $.ajax({
                url: 'PRS_R_ECO_LED.json',
                dataType: 'json',
                success: function (resp) {
                    date = resp;
                    updatePost(date)
                }
            });
            return date;
        };

        getSomeDate();

        function updatePost(date) {
            var posts = date.map((el, item) => {

                return (`
                     <div class="item_wrap-name">
                            <h1 class="item_name">${el.PRS_R_ECO_LED[0].mainTypeLighting}</h1>
                            <h1 class="item_name"> ${el.PRS_R_ECO_LED[0].mainNameLighting}</h1>
                            <br>
                            <h1 class="item_name"> ${el.PRS_R_ECO_LED[1].installation}</h1>
                            <h1 class="item_name"> ${el.PRS_R_ECO_LED[1].design}</h1>
                            <br>
                            <h1 class="item_name"> ${el.PRS_R_ECO_LED[2].PRS_R_ECO_LED_595_HFD_EM_4000K[0].name}</h1>
                            <h1 class="item_name"> ${el.PRS_R_ECO_LED[2].PRS_R_ECO_LED_595_HFD_EM_4000K[0].lightFlow}</h1>
                        </div>
                         `)
            });

            $('#item-wrapper').append(posts);
        }

    })
});
btn5.addEventListener('click', function () {

    $(document).ready(function () {
        var getSomeDate = function () {
            var date;

            $.ajax({
                url: 'AOT.OPL_ECO_LED.json',
                dataType: 'json',
                success: function (resp) {
                    date = resp;
                    updatePost(date)
                }
            });
            return date;
        };

        getSomeDate();

        function updatePost(date) {
            var posts = date.map((el, item) => {

                return (`
                     <div class="item_wrap-name">
                            <h1 class="item_name">${el.AOT_OPL_ECO_LED[0].mainTypeLighting}</h1>
                            <h1 class="item_name"> ${el.AOT_OPL_ECO_LED[0].mainNameLighting}</h1>
                            <br>
                            <h1 class="item_name"> ${el.AOT_OPL_ECO_LED[1].installation}</h1>
                            <h1 class="item_name"> ${el.AOT_OPL_ECO_LED[1].design}</h1>
                            <br>
                            <h1 class="item_name"> ${el.AOT_OPL_ECO_LED[2].AOT_OPL_ECO_LED_600_4000K[0].name}</h1>
                            <h1 class="item_name"> ${el.AOT_OPL_ECO_LED[2].AOT_OPL_ECO_LED_600_EM_4000K[0].lightFlow}</h1>
                        </div>
                         `)
            });

            $('#item-wrapper').append(posts);
        }

    })
});
btn6.addEventListener('click', function () {

    $(document).ready(function () {
        var getSomeDate = function () {
            var date;

            $.ajax({
                url: 'AOT.OPL_ECO_LED.json',
                dataType: 'json',
                success: function (resp) {
                    date = resp;
                    updatePost(date)
                }
            });
            return date;
        };

        getSomeDate();

        function updatePost(date) {
            var posts = date.map((el, item) => {

                return (`
                     <div class="item_wrap-name">
                            <h1 class="item_name">${el.AOT_OPL_ECO_LED[0].mainTypeLighting}</h1>
                            <h1 class="item_name"> ${el.AOT_OPL_ECO_LED[0].mainNameLighting}</h1>
                            <br>
                            <h1 class="item_name"> ${el.AOT_OPL_ECO_LED[1].installation}</h1>
                            <h1 class="item_name"> ${el.AOT_OPL_ECO_LED[1].design}</h1>
                            <br>
                            <h1 class="item_name"> ${el.AOT_OPL_ECO_LED[2].AOT_OPL_ECO_LED_600_EM_4000K[0].name}</h1>
                            <h1 class="item_name"> ${el.AOT_OPL_ECO_LED[2].AOT_OPL_ECO_LED_600_EM_4000K[0].lightFlow}</h1>
                        </div>
                         `)
            });

            $('#item-wrapper').append(posts);
        }

    })
});


