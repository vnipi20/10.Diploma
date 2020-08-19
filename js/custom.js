var clickB = document.getElementsByClassName('clickB');
var boxFront = document.getElementsByClassName('boxFront');
var box = document.getElementsByClassName('box');
var wrapRoom = document.querySelectorAll('.grid__item');
var fieldRoom = document.getElementById('fieldRoom');
/*var boxField = document.getElementsByClassName('boxField');*/
var calculation = document.getElementsByClassName('calculation');

var widthBS = 0;
var heightBS = 0;
var radiusBS = 25;
var stretchBS = 20;
var colorBS = ['#FB121A', '#FDAC02', '#F9F600', '#0CFD10', '#05EDEE', '#0817FB', '#FEFEFE'];

/*--получение нажатого div блока в grid--*/
var grid = document.querySelector(".grid");

var gridItemBlock = [];
var boxField = gridItemBlock;
grid.addEventListener("click", function (event) {
    var gridItems = this.children;
    for (var i = 0; i < gridItems.length; i++) {
        var gridItem = gridItems[i];
        var rect = gridItem.getBoundingClientRect();
        var elementDetected = event.clientX >= rect.left
            && event.clientX <= rect.right
            && event.clientY >= rect.top
            && event.clientY <= rect.bottom;
        if (elementDetected) {
            console.log(gridItem);
            return gridItemBlock.push(gridItem);
        }
    }

});
console.log('===>', gridItemBlock);
/*----получение нажатого div блока в grid----*/


/* add lamps in the room*/
grid.addEventListener('click', function () {
    let div = document.createElement('div');
    div.innerHTML = `<div class="lightingWrap">
                     <div class="boxFront"></div>
                     <div class="box"></div>
                     <div class="box"></div>
                     <div class="box"></div>
                     <div class="box"></div>
                     <div class="box"></div>
                     <div class="box"></div>
                     <div class="box"></div>
                   </div>`;
    boxField[0].append(div);
    console.log('*****>', div);
});
/* add lamps in the room*/

calculation[0].addEventListener('click', function () {

    var getRangeHeight = heightValue.textContent; /* get var value inpute range height */
    var getReflectionCeiling = reflectionCeilingValue.textContent; /* get var
     value inpute range celing */
    var getReflectionWalls = reflectionWallsValue.textContent; /* get var
     value inpute range walls */
    var getReflectionFloor = reflectionFloorValue.textContent; /* get var
     value inpute range floor */
    var getHeightPlane = heightPlaneValue.textContent; /* get var
     value inpute range plane */
    var getReserve = reserveValue.textContent; /* get var
     value inpute range reserve */

    var kN = +getReflectionCeiling + +getReflectionWalls + +getReflectionFloor + +getHeightPlane + +getReserve;
    var k1 = 1.2 / +getRangeHeight * 5 * kN;
    var k2 = 1.5 / +getRangeHeight * 5 * kN;
    var k3 = 1.8 / +getRangeHeight * 5 * kN;
    var k4 = 2.1 / +getRangeHeight * 5 * kN;
    var k5 = 2.4 / +getRangeHeight * 5 * kN;
    var k6 = 2.7 / +getRangeHeight * 5 * kN;
    var k7 = 3 / +getRangeHeight * 5 * kN;

    console.log('--->', getRangeHeight);
    console.log('--->', k2);

    styleBoxFrontBc = boxFront[0].style;
    styleBoxFrontBc.backgroundColor = "orangered";
    styleBoxFrontBr = boxFront[0].style;
    styleBoxFrontBr.border = "1px solid #000638";

    var boxShadow100 = widthBS + 'px' + ' ' + heightBS + 'px' + ' ' + radiusBS * k1 + 'px' + ' ' + stretchBS * k1 + 'px' + ' ' + colorBS[0];
    var boxShadow200 = widthBS + 'px' + ' ' + heightBS + 'px' + ' ' + radiusBS * k2 + 'px' + ' ' + stretchBS * k2 + 'px' + ' ' + colorBS[1];
    var boxShadow300 = widthBS + 'px' + ' ' + heightBS + 'px' + ' ' + radiusBS * k3 + 'px' + ' ' + stretchBS * k3 + 'px' + ' ' + colorBS[2];
    var boxShadow400 = widthBS + 'px' + ' ' + heightBS + 'px' + ' ' + radiusBS * k4 + 'px' + ' ' + stretchBS * k4 + 'px' + ' ' + colorBS[3];
    var boxShadow500 = widthBS + 'px' + ' ' + heightBS + 'px' + ' ' + radiusBS * k5 + 'px' + ' ' + stretchBS * k5 + 'px' + ' ' + colorBS[4];
    var boxShadow600 = widthBS + 'px' + ' ' + heightBS + 'px' + ' ' + radiusBS * k6 + 'px' + ' ' + stretchBS * k6 + 'px' + ' ' + colorBS[5];
    var boxShadow700 = widthBS + 'px' + ' ' + heightBS + 'px' + ' ' + radiusBS * k7 + 'px' + ' ' + stretchBS * k7 + 'px' + ' ' + colorBS[6];

    newStyle = box[0].style;
    newStyle.zIndex = 1000;
    newStyle.boxShadow = boxShadow100;

    newStyle2 = box[1].style;
    newStyle2.zIndex = 800;
    newStyle2.boxShadow = boxShadow200;

    newStyle3 = box[2].style;
    newStyle3.zIndex = 600;
    newStyle3.boxShadow = boxShadow300;

    newStyle4 = box[3].style;
    newStyle4.zIndex = 500;
    newStyle4.boxShadow = boxShadow400;

    newStyle5 = box[4].style;
    newStyle5.zIndex = 400;
    newStyle5.boxShadow = boxShadow500;

    newStyle6 = box[5].style;
    newStyle6.zIndex = 300;
    newStyle6.boxShadow = boxShadow600;

    newStyle7 = box[6].style;
    newStyle7.zIndex = 200;
    newStyle7.boxShadow = boxShadow700;

    /* addStyleField = wrapRoom.style;
     addStyleField.backgroundColor = "green";*/

    for (let i = 0; i < wrapRoom.length; i++) { // проходим циклом по всем элементам объекта
        wrapRoom[i].style.backgroundColor = "#000638"; // устанавливаем красный цвет текста каждому элементу
        console.log('wrapRoom', wrapRoom[i]);
    }
    console.log('wrapRoom', wrapRoom);

    addfieldRoom = fieldRoom.style;
    addfieldRoom.backgroundColor = "#000638";

});

/*--- variable input range --- */
var rangeHeight = document.getElementById("rangeHeight");
var heightValue = document.getElementById("heightValue");
heightValue.innerHTML = rangeHeight.value;

var kReflectionCeiling = document.getElementById("kReflectionCeiling");
var reflectionCeilingValue = document.getElementById("reflectionCeilingValue");
reflectionCeilingValue.innerHTML = kReflectionCeiling.value;

var kReflectionWalls = document.getElementById("kReflectionWalls");
var reflectionWallsValue = document.getElementById("reflectionWallsValue");
reflectionWallsValue.innerHTML = kReflectionWalls.value;

var kReflectionFloor = document.getElementById("kReflectionFloor");
var reflectionFloorValue = document.getElementById("reflectionFloorValue");
reflectionFloorValue.innerHTML = kReflectionFloor.value;

var heightPlane = document.getElementById("heightPlane");
var heightPlaneValue = document.getElementById("heightPlaneValue");
heightPlaneValue.innerHTML = heightPlane.value;

var kReserve = document.getElementById("kReserve");
var reserveValue = document.getElementById("reserveValue");
reserveValue.innerHTML = kReserve.value;

/*--variable input range-- */
/*--- function value input range height --- */
rangeHeight.oninput = function () {
    heightValue.innerHTML = 2 + +rangeHeight.value;
};
/*--- function value input range K celling --- */
kReflectionCeiling.oninput = function () {
    reflectionCeilingValue.innerHTML = +kReflectionCeiling.value;
};
/*--- function value input range K walls --- */
kReflectionWalls.oninput = function () {
    reflectionWallsValue.innerHTML = +kReflectionWalls.value;
};
/*--- function value input range K floor --- */
kReflectionFloor.oninput = function () {
    reflectionFloorValue.innerHTML = +kReflectionFloor.value;
};
/*--- function value input range K plane --- */
heightPlane.oninput = function () {
    heightPlaneValue.innerHTML = +heightPlane.value;
};
/*--function value input range reserve-- */
kReserve.oninput = function () {
    reserveValue.innerHTML = +kReserve.value;
};
/* ----value input range height---- */

/*--range ширина и длина помещения--*/
var roomLength = document.getElementById("roomLength");
var roomLengthValue = document.getElementById("roomLengthValue");
roomLengthValue.innerHTML = roomLength.value;

roomLength.oninput = function () {
    roomLengthValue.innerHTML = +roomLength.value;
};

var roomWidth = document.getElementById("roomWidth");
var roomWidthValue = document.getElementById("roomWidthValue");
roomWidthValue.innerHTML = roomWidth.value;
roomWidth.oninput = function () {
    roomWidthValue.innerHTML = +roomWidth.value;
};
/*----range ширина и длина помещения----*/

/*--функция изменения текущего размера помещения--*/
var divBox = document.getElementById('fieldRoom');

roomLength.addEventListener('click', function () {
    var getRoomLengthValue = roomLengthValue.textContent * 40;

    divBox.style.width = getRoomLengthValue + 'px';
});
roomWidth.addEventListener('click', function () {
    var getRoomWidthValue = roomWidthValue.textContent * 40;

    divBox.style.height = getRoomWidthValue + 'px';
});
/*----функция изменения текущего размера помещения----*/






/*--всплывывающий popup выбора типа светильника--*/
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

/*--переключение class border наименование светильников--*/
$(".buttons div").click(function (e) {
    $(".buttons div").removeClass('active');
    $(this).addClass('active');
});
$(".buttons div p").click(function (e) {
    $(".buttons div p").removeClass('active-name');
    $(this).addClass('active-name');
});
/*--переключение class border тип светильников--*/
$(".window div").click(function (e) {
    $(".window div").removeClass('active-name-lt');
    $(this).addClass('active-name-lt');
});


/*--добавление ККС с файла json при нажатии на наименование светильника--*/
var lt001 = document.getElementById('lt001');
var lt002 = document.getElementById('lt002');
var lt003 = document.getElementById('lt003');
var lt004 = document.getElementById('lt004');
var lt005 = document.getElementById('lt005');

lt001.addEventListener('click', function () {
    var kkc_catalog = document.querySelector('.kkc_catalog');
    kkc_catalog.classList.remove("kkc_catalog_img");
    kkc_catalog.classList.remove("lt002");
    kkc_catalog.classList.remove("lt003");
    kkc_catalog.classList.remove("lt004");
    kkc_catalog.classList.remove("lt005");
    kkc_catalog.classList.add("lt001");
});
lt002.addEventListener('click', function () {
    var kkc_catalog = document.querySelector('.kkc_catalog');
    kkc_catalog.classList.remove("kkc_catalog_img");
    kkc_catalog.classList.remove("lt001");
    kkc_catalog.classList.remove("lt003");
    kkc_catalog.classList.remove("lt004");
    kkc_catalog.classList.remove("lt005");
    kkc_catalog.classList.add("lt002");
});
lt003.addEventListener('click', function () {
    var kkc_catalog = document.querySelector('.kkc_catalog');
    kkc_catalog.classList.remove("kkc_catalog_img");
    kkc_catalog.classList.remove("lt001");
    kkc_catalog.classList.remove("lt002");
    kkc_catalog.classList.remove("lt004");
    kkc_catalog.classList.remove("lt005");
    kkc_catalog.classList.add("lt003");
});
lt004.addEventListener('click', function () {
    var kkc_catalog = document.querySelector('.kkc_catalog');
    kkc_catalog.classList.remove("kkc_catalog_img");
    kkc_catalog.classList.remove("lt001");
    kkc_catalog.classList.remove("lt002");
    kkc_catalog.classList.remove("lt003");
    kkc_catalog.classList.remove("lt005");
    kkc_catalog.classList.add("lt004");
});
lt005.addEventListener('click', function () {
    var kkc_catalog = document.querySelector('.kkc_catalog');
    kkc_catalog.classList.remove("kkc_catalog_img");
    kkc_catalog.classList.remove("lt001");
    kkc_catalog.classList.remove("lt002");
    kkc_catalog.classList.remove("lt003");
    kkc_catalog.classList.remove("lt004");
    kkc_catalog.classList.add("lt005");
});

/*--добавление данных светильников с файла json при нажатии на тип светильника--*/
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

        function updateLightingMain(date) {
            var mainLightingName = date.map((el, item) => {

                return (`
                  <p>Светильник ${el.PRS_R_ECO_LED[2].PRS_R_ECO_LED_595[0].name}  ${el.PRS_R_ECO_LED[2].PRS_R_ECO_LED_595[0].article}</p>
                       `)
            });

            $('#selectLightingName').append(mainLightingName);
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
/*----всплывывающий popup выбора типа светильника----*/

