/*--popup--*/
$(document).ready(function(){
    PopUpHide();
});
function PopUpShow(){
    $("#popup1").show();
}
function PopUpHide(){
    $("#popup1").hide();
}
/*--popup--*/


var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');

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
