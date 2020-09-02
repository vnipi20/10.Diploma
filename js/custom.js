let boxFront = document.getElementsByClassName('boxFront');
let box = document.getElementsByClassName('box');
let wrapRoom = document.querySelectorAll('.grid__item');
let fieldRoom = document.getElementById('fieldRoom');
/*let boxField = document.getElementsByClassName('boxField');*/
let calculation = document.getElementsByClassName('calculation-js');

let widthBS = 0;
let heightBS = 0;
let radiusBS = 25;
let stretchBS = 20;
let colorBS = ['#FB121A', '#FDAC02', '#F9F600', '#0CFD10', '#05EDEE', '#0817FB', '#FEFEFE'];

/*--получение нажатого div блока в grid--*/
let grid = document.querySelector(".grid");

let gridItemBlock = [];
let boxField = gridItemBlock;
grid.addEventListener("click", function (event) {
  let gridItems = this.children;
  for (let i = 0; i < gridItems.length; i++) {
    let gridItem = gridItems[i];
    let rect = gridItem.getBoundingClientRect();
    let elementDetected = event.clientX >= rect.left
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

  let getRangeHeight = heightValue.textContent; /* get let value inpute range height */
  let getReflectionCeiling = reflectionCeilingValue.textContent; /* get let
     value inpute range celing */
  let getReflectionWalls = reflectionWallsValue.textContent; /* get let
     value inpute range walls */
  let getReflectionFloor = reflectionFloorValue.textContent; /* get let
     value inpute range floor */
  let getHeightPlane = heightPlaneValue.textContent; /* get let
     value inpute range plane */
  let getReserve = reserveValue.textContent; /* get let
     value inpute range reserve */

  let kN = +getReflectionCeiling + +getReflectionWalls + +getReflectionFloor + +getHeightPlane + +getReserve;
  let k1 = 1.2 / +getRangeHeight * 2 * kN;
  let k2 = 1.5 / +getRangeHeight * 2 * kN;
  let k3 = 1.8 / +getRangeHeight * 2 * kN;
  let k4 = 2.1 / +getRangeHeight * 2 * kN;
  let k5 = 2.4 / +getRangeHeight * 2 * kN;
  let k6 = 2.7 / +getRangeHeight * 2 * kN;
  let k7 = 3 / +getRangeHeight * 2 * kN, styleBoxFrontBc, styleBoxFrontBr;

  console.log('--->', getRangeHeight);
  console.log('--->', k2);

  styleBoxFrontBc = boxFront[0].style;
  styleBoxFrontBc.backgroundColor = "orangered";
  styleBoxFrontBr = boxFront[0].style;
  styleBoxFrontBr.border = "1px solid #000638";

  let boxShadow100 = widthBS + 'px' + ' ' + heightBS + 'px' + ' ' + radiusBS * k1 + 'px' + ' ' + stretchBS * k1 + 'px' + ' ' + colorBS[0];
  let boxShadow200 = widthBS + 'px' + ' ' + heightBS + 'px' + ' ' + radiusBS * k2 + 'px' + ' ' + stretchBS * k2 + 'px' + ' ' + colorBS[1];
  let boxShadow300 = widthBS + 'px' + ' ' + heightBS + 'px' + ' ' + radiusBS * k3 + 'px' + ' ' + stretchBS * k3 + 'px' + ' ' + colorBS[2];
  let boxShadow400 = widthBS + 'px' + ' ' + heightBS + 'px' + ' ' + radiusBS * k4 + 'px' + ' ' + stretchBS * k4 + 'px' + ' ' + colorBS[3];
  let boxShadow500 = widthBS + 'px' + ' ' + heightBS + 'px' + ' ' + radiusBS * k5 + 'px' + ' ' + stretchBS * k5 + 'px' + ' ' + colorBS[4];
  let boxShadow600 = widthBS + 'px' + ' ' + heightBS + 'px' + ' ' + radiusBS * k6 + 'px' + ' ' + stretchBS * k6 + 'px' + ' ' + colorBS[5];
  let boxShadow700 = widthBS + 'px' + ' ' + heightBS + 'px' + ' ' + radiusBS * k7 + 'px' + ' ' + stretchBS * k7 + 'px' + ' ' + colorBS[6];

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

  /*--подключение ajax для отображение результатов расета--*/
  $(document).ready(function () {
    let getSomeDate = function () {
      let date;

      $.ajax({
        url: 'lamp.json',
        dataType: 'json',
        success: function (resp) {
          date = resp;
          updateResultsColor();
          updateResults(date);
          updateOrderFormImg(date);

        }
      });
      return date;
    };
    getSomeDate();

    /*--вставляю шкалу освещенности--*/
    function updateResultsColor() {
      let updateResultsColor = (`
                    <!--цветовая шкала-->
                    <div class="box-color-wrap">
                       <div>
                          <div class="color-0"></div>
                          <div class="color-text">0</div>
                       </div>
                       <div>
                          <div class="color-100"></div>
                          <div class="color-text">100</div>
                       </div>
                       <div>
                          <div class="color-200"></div>
                          <div class="color-text">200</div>
                       </div>
                       <div>
                          <div class="color-300"></div>
                          <div class="color-text">300</div>
                       </div>
                       <div>
                          <div class="color-400"></div>
                          <div class="color-text">400</div>
                       </div>
                       <div>
                          <div class="color-500"></div>
                          <div class="color-text">500</div>
                       </div>
                       <div>
                          <div class="color-600"></div>
                          <div class="color-text">600</div>
                       </div>
                       <div>
                          <div class="color-700"></div>
                          <div class="color-text">700</div>
                       </div>
                    </div>
                    <!----цветовая шкала---->
                  `);


      $('#choiceLighting').replaceWith(updateResultsColor);
    }

    /*--вставляю результаты  расчета--*/
    function updateResults(date) {
      let updateResults = date.map((el, item) => {
        return (`
                    <!--блок результатов-->
                    <div class="results-box">
                       <div class="results-title">Результат расчета</div>
                       <div class="results-wrap">
                          <div class="results-box-title">Параметры</div>
                          <div class="results-box-title">Результат</div>
                          <div>Количество светильников, шт.</div>
                          <div>12</div>
                          <div>Минимальная освещенность, лк</div>
                          <div>50</div>
                          <div>Максимальная освещенность, лк</div>
                          <div>530</div>
                          <div>Коэф. использования</div>
                          <div>0.94</div>
                       </div>
                       <div class="results-btn-wrap">
                          <div class="results-btn">
                             <button class="btn-catalog-main">Отчет</button>
                             <button class="btn-catalog-main" id="btn-order-js">Заказать</button>
                          </div>
                          <div>
                             <button class="btn-new-calculation" id="reload-site">Новый расчет</button>
                          </div>
                       </div>
                    </div>
                  `)
      });

      $('#infoLightingMain').replaceWith(updateResults);


      /*--форма заказа светильников popup--*/
      let popup2 = document.getElementById('popup2');
      let btnPopupOrder = document.getElementById("btn-order-js");
      let closeOrder = document.getElementById("font-btn");

      btnPopupOrder.onclick = function () {
        popup2.style.display = "block";
      };

      closeOrder.onclick = function () {
        popup2.style.display = "none";
      };

      window.onclick = function (event) {
        if (event.target == popup2) {
          popup2.style.display = "none";
        }
      };
      /*----форма заказа светильников popup----*/

      /*--перезагрузка страници--*/
      let reloadSite = document.getElementById('reload-site');
      reloadSite.onclick = function () {
        window.location.reload();
      };
      /*----перезагрузка страници----*/

    }

    function updateOrderFormImg(date) {
      let updateOrderFormImg = date.map((el, item) => {
        return (`
                    
                    <div class="box-order-img" id="box-order-img-js">
                    <img src="${el.lamp[atrTypeNum].linkImg001}" alt="">
                    <p class="box-order-name-lamp">${el.lamp[atrTypeNum].name} ${el.lamp[atrTypeNum].power}Вт - 6 шт.</p>
                     </div>
               `)
      });

      $('#box-order-img-js').replaceWith(updateOrderFormImg);
    }

  });

  /*----подключение ajax для отображение результатов расета----*/

});

/*--- letiable input range --- */
let rangeHeight = document.getElementById("rangeHeight");
let heightValue = document.getElementById("heightValue");
heightValue.innerHTML = rangeHeight.value;

let kReflectionCeiling = document.getElementById("kReflectionCeiling");
let reflectionCeilingValue = document.getElementById("reflectionCeilingValue");
reflectionCeilingValue.innerHTML = kReflectionCeiling.value;

let kReflectionWalls = document.getElementById("kReflectionWalls");
let reflectionWallsValue = document.getElementById("reflectionWallsValue");
reflectionWallsValue.innerHTML = kReflectionWalls.value;

let kReflectionFloor = document.getElementById("kReflectionFloor");
let reflectionFloorValue = document.getElementById("reflectionFloorValue");
reflectionFloorValue.innerHTML = kReflectionFloor.value;

let heightPlane = document.getElementById("heightPlane");
let heightPlaneValue = document.getElementById("heightPlaneValue");
heightPlaneValue.innerHTML = heightPlane.value;

let kReserve = document.getElementById("kReserve");
let reserveValue = document.getElementById("reserveValue");
reserveValue.innerHTML = kReserve.value;

/*--letiable input range-- */
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
let roomLength = document.getElementById("roomLength");
let roomLengthValue = document.getElementById("roomLengthValue");
roomLengthValue.innerHTML = roomLength.value;

roomLength.oninput = function () {
  roomLengthValue.innerHTML = +roomLength.value;
};

let roomWidth = document.getElementById("roomWidth");
let roomWidthValue = document.getElementById("roomWidthValue");
roomWidthValue.innerHTML = roomWidth.value;
roomWidth.oninput = function () {
  roomWidthValue.innerHTML = +roomWidth.value;
};
/*----range ширина и длина помещения----*/

/*/!*--управление select увеличение списка настроек--*!/
var elements = document.querySelectorAll(".item-btn");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", toggleOpenText);
}

function toggleOpenText() {
    var text = document.querySelector(".item_text");
    var textHide = document.querySelector(".item-btn-set");
/!*    var text2 = document.querySelector(".hideSettingsBtn");*!/
    text.classList.toggle("showText");
    textHide.classList.toggle("hideSettingsBtn");
/!*    text2.classList.remove("hideSettingsBtn");
    text2.classList.toggle("showSettingsBtn");*!/
}
/!*----управление select увеличение списка настроек----*!/*/

/*--функция изменения текущего размера помещения--*/
let divBox = document.getElementById('fieldRoom');

roomLength.addEventListener('click', function () {
  let getRoomLengthValue = roomLengthValue.textContent * 40;

  divBox.style.width = getRoomLengthValue + 'px';
});
roomWidth.addEventListener('click', function () {
  let getRoomWidthValue = roomWidthValue.textContent * 40;

  divBox.style.height = getRoomWidthValue + 'px';
});
/*----функция изменения текущего размера помещения----*/


/*--всплывывающий popup выбора типа светильника--*/
let popup1 = document.getElementById('popup1');
let btnPopup = document.getElementById("btn-catalog-main");
let close = document.getElementsByClassName("btn-catalog")[0];

btnPopup.onclick = function () {
  popup1.style.display = "block";
};

close.onclick = function () {
  popup1.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == popup1) {
    popup1.style.display = "none";
  }
};

/*--переключение class border наименование светильников--*/
let btnLt = document.querySelectorAll(".buttons div");

for (let btn of btnLt) {
  btn.addEventListener('click', function () {
    btnLt.forEach(i => i.classList.remove('active'));
    this.classList.toggle('active');
  });
}
/*--переключение подсветки имени светильника-- ПОКА НЕ РАБОТАЕТ НОРМАЛЬНО--*/
let btnLtName = document.querySelectorAll(".buttons div p");

for (let btn01 of btnLtName) {
  btn01.addEventListener('click', function () {
    btnLtName.forEach(i => i.classList.remove('active-name'));
    this.classList.toggle('active-name');
  });
}
/*--переключение class border описания светильников--*/
let descriptionLt = document.querySelectorAll(".window div");

for (let button of descriptionLt) {
  button.addEventListener('click', function () {
    descriptionLt.forEach(i => i.classList.remove('active-name-lt'));
    this.classList.toggle('active-name-lt');
  });
}


/*--добавление ККС при нажатии на наименование светильника--*/
let lampType = document.querySelectorAll('.lampType');
/*--перебор типов светильников--*/
for (let i = 0, len = lampType.length; i < len; i++) {
  lampType[i].addEventListener('click', set_handler(i), false);
}

/*--удаление и добавления классов--*/
function set_handler(i) {
  return function (e) {
    let atrLamp = lampType[i].getAttribute('data-style');
    let kkc_catalog = document.querySelector('.kkc_catalog');
    kkc_catalog.classList.remove('kkc_catalog_img', 'lt001', 'lt002', 'lt003', 'lt004', 'lt005');
    kkc_catalog.classList.add(atrLamp);
  };
}

/*--добавление данных светильников с файла json при нажатии на тип светильника lamp01--*/
let lampSubtype = document.querySelectorAll('.lampSubtype');

/*--опции слайдера slick Slider записаные в переменную, она вызывается ниже с задержкой--*/
var options = {
  dots: true,
  infinite: true,
  speed: 300,
  loop: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

let atrTypeNum;
/*--перебор типов светильников--*/
for (let i = 0, len = lampSubtype.length; i < len; i++) {
  lampSubtype[i].addEventListener('click', function () {

    atrTypeNum = lampSubtype[i].getAttribute('data-type-num');

    $(document).ready(function () {
      let getSomeDate = function () {
        let date;

        $.ajax({
          url: 'lamp.json',
          dataType: 'json',
          success: function (resp) {

            /*--задержка инициалицазии slickSlider после запуска ajax--*/
            setTimeout(function () {
              $(".sliсkSlider").slick(options)
            }, 500);
            /*----задержка инициалицазии slickSlider после запуска ajax----*/

            date = resp;
            updateLightingName(date);
            tabsLightingKKC(date);
            tabsLightingSpecifications(date);
            mainDiscriptionSlider(date);
            mainDiscription(date);
            mainSpecifications(date);
            mainDownloadInstructions(date);
          }
        });
        return date;
      };
      getSomeDate();

      /*--вставляю тип и артикль на главной странице--*/
      function updateLightingName(date) {
        let mainLightingName = date.map((el, item) => {
          return (`
                               <div id="selectLightingName">
                               Светильник: ${el.lamp[atrTypeNum].name} 
                               ${el.lamp[atrTypeNum].power}Вт
                               (${el.lamp[atrTypeNum].article})
                               </div>
                       `)
        });

        $('#selectLightingName').replaceWith(mainLightingName);
      }

      /*--вставляю картиинку ККС на главной странице--*/
      function tabsLightingKKC(date) {
        let tabsLightingKKC = date.map((el, item) => {
          return (`
                               <div id="tabsLightingKKC">
                               <img src="${el.lamp[atrTypeNum].link}" alt="">
                               </div>
                       `)
        });

        $('#tabsLightingKKC').replaceWith(tabsLightingKKC);
      }

      /*--вставка фото светильника и характеристики на главной странице--*/
      function tabsLightingSpecifications(date) {
        let tabsLightingSpecifications = date.map((el, item) => {
          return (`
                    <div class="tabs-info-lighting" id="tabs-info-lighting">
                    <div class="tabs-info-img">
                    <img src="${el.lamp[atrTypeNum].linkImg001}" alt="">
                    </div>
                    <div>
                    <ul>
                    <li>Способ установки: ${el.lamp[atrTypeNum].installationMin}</li>
                    <li>Мощность: ${el.lamp[atrTypeNum].power}Вт</li>
                    <li>Световой поток: ${el.lamp[atrTypeNum].lightFlow}лм  </li>
                    <li>Размер: ${el.lamp[atrTypeNum].size}</li>
                    <li>Рассеиватель: ${el.lamp[atrTypeNum].diffuser}</li>
                    <li>Цвет источника света: ${el.lamp[atrTypeNum].colorLight}</li>
                    </ul>
                    </div>
                    </div>
                  `)
        });

        $('#tabs-info-lighting').replaceWith(tabsLightingSpecifications);
      }


      /*--главные характеристики светильника--название и слайдер--*/
      function mainDiscriptionSlider(date) {
        let mainDiscriptionSlider = date.map((el, item) => {
          return (`
                   <div class="more-description-wrap">
                   <p>${el.lamp[atrTypeNum].name}  ${el.lamp[atrTypeNum].power}Вт ${el.lamp[atrTypeNum].lightFlow}лм</p>
                   <div class="slider sliсkSlider" id="alickAdd">
                   <img src="${el.lamp[atrTypeNum].linkImg001}" alt="">
                   <img src="${el.lamp[atrTypeNum].linkImg002}" alt="">
                   <img src="${el.lamp[atrTypeNum].linkImg003}" alt="">
                   </div>
                   </div>
                 `)
        });

        $('.more-description-wrap').replaceWith(mainDiscriptionSlider);
      }

      /*--главные характеристики светильника--описание--*/
      function mainDiscription(date) {
        let mainDiscription = date.map((el, item) => {
          return (`
                  <div class="column-1">
                  <div>
                    <h4>Установка:</h4>
                    <p>${el.lamp[atrTypeNum].installationMax}</p>
                  </div>
                  <div>
                    <h4>Конструкция:</h4>
                    <p>${el.lamp[atrTypeNum].design}</p>
                  </div>
                  <div>
                    <h4>Оптическая часть:</h4>
                    <p>${el.lamp[atrTypeNum].opticalPart}</p>
                  </div>
                  <div>
                    <h4>Комплектация:</h4>
                    <p>${el.lamp[atrTypeNum].equipment}</p>
                  </div>
                  <div>
                    <h4>Области использования:</h4>
                    <p>${el.lamp[atrTypeNum].areasUse}</p>
                  </div>
                </div>
                 `)
        });

        $('.column-1').replaceWith(mainDiscription);
      }


      /*--главные характеристики светильника--характеристики--*/
      function mainSpecifications(date) {
        let mainSpecifications = date.map((el, item) => {
          return (`
                  <div class="column-2-wrap">
                    <div>Артикул:</div>
                    <div>${el.lamp[atrTypeNum].article}</div>
                    <div>Тип ИС:</div>
                    <div>${el.lamp[atrTypeNum].lampType}</div>
                    <div>Световой поток:</div>
                    <div>${el.lamp[atrTypeNum].lightFlow}лм</div>
                    <div>Мощность светильника:</div>
                    <div>${el.lamp[atrTypeNum].power}Вт</div>
                    <div>Энергоэффективность:</div>
                    <div>${el.lamp[atrTypeNum].lm_Wt}лм/Вт</div>
                    <div>Цветовая температура:</div>
                    <div>${el.lamp[atrTypeNum].temperature}</div>
                    <div>Напряжение питания:</div>
                    <div>${el.lamp[atrTypeNum].voltage}</div>
                    <div>Степень защиты (IP):</div>
                    <div>${el.lamp[atrTypeNum].IP}</div>
                    <div>Вес:</div>
                    <div>${el.lamp[atrTypeNum].weight}</div>
                    <div>Габариты АхВхС:</div>
                    <div>${el.lamp[atrTypeNum].size}</div>
                    <div id="pic">
                      <img src="img/pic/pic-1.png" alt="" title="Класс защиты I от поражением электрическим током">
                      <img src="img/pic/pic-2.png" alt="" title="Степень защиты IP">
                      <img src="img/pic/pic-3.png" alt="" title="Ударопрочность Дж">
                      <img src="img/pic/pic-4.png" alt="" title="Климатическая зона">
                      <img src="img/pic/pic-5.png" alt="" title="Может работать от переменного и постоянного тока ">
                      <img src="img/pic/pic-6.png" alt="" title="Класс энергоеффективности">
                    </div>
                  </div>
                 `)
        });

        $('.column-2-wrap').replaceWith(mainSpecifications);
      }

      /*--главные характеристики светильника--скачать документацию--*/
      function mainDownloadInstructions(date) {
        let mainDownloadInstructions = date.map((el, item) => {
          return (`
                 <div class="download-wrap">
                  <div>
                    <p>Описание</p>
                    <a href="${el.lamp[atrTypeNum].linkDescription}" download=""><img src="img/pdf.png" alt=""></a>
                  </div>
                  <div>
                    <p>Паспорт</p>
                    <a href="${el.lamp[atrTypeNum].linkPas}" download=""><img src="img/pdf.png" alt=""></a>
                  </div>
                  <div>
                    <p>Этикетка</p>
                    <a href="${el.lamp[atrTypeNum].linkEner}" download=""><img src="img/pdf.png" alt=""></a>
                  </div>
                </div>
                 `)
        });

        $('.download-wrap').replaceWith(mainDownloadInstructions);
      }

    })
  });
}


/*--tabs выбранного светильника с переключением кривой ККС и характеристиками--*/
const tabLinks = document.querySelectorAll(".tabs p");
const tabPanels = document.querySelectorAll(".tabs-panel");

for (let el of tabLinks) {
  el.addEventListener("click", e => {
    e.preventDefault();

    document.querySelector(".tabs li.active").classList.remove("active");
    document.querySelector(".tabs-panel.active").classList.remove("active");

    const parentListItem = el.parentElement;
    parentListItem.classList.add("active");
    const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

    const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
    panel[0].classList.add("active");
  });
}

/*--tabs выбора полных характеристик светильника--*/
const tabDescription = document.querySelectorAll(".tabs-description p");
const tabPanelsDescription = document.querySelectorAll(".tabs-panel-description");

for (let el of tabDescription) {
  el.addEventListener("click", e => {
    e.preventDefault();

    document.querySelector(".tabs-description li.active").classList.remove("active");
    document.querySelector(".tabs-panel-description.active").classList.remove("active");

    const parentListItem = el.parentElement;
    parentListItem.classList.add("active");
    const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

    const panel = [...tabPanelsDescription].filter(el => el.getAttribute("data-index") == index);
    panel[0].classList.add("active");
  });
}

/*--открытие закрытие подробных характеристик светильника--*/
let btnDiscriptionOpenClose = document.getElementById('btnDiscriptionOpenClose');

btnDiscriptionOpenClose.addEventListener('click', function () {

  let hideDiscription = document.getElementById('mainDiscription');
  hideDiscription.classList.toggle('hide');


  /*--задержка инициалицазии slickSlider после запуска ajax--*/
  setTimeout(function () {
    $(".sliсkSlider").slick(options)
  }, 100);
  /*----задержка инициалицазии slickSlider после запуска ajax----*/

});

/*--плавная прокрутка к новому окну характеристик "якорь"--*/
const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substring(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    })

  })
});
/*----плавная прокрутка к новому окну характеристик "якорь"----*/
/*--вертикальный slick Slider--*/
$(document).ready(function () {
  $('.owl-carousel').slick({
    loop: true,
    margin: 115,
    autoplay: true,
    autoplaySpeed: 50,
    vertical: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    speed: 7000,
    prevArrow: false,
    nextArrow: false,

  });
});
/*----вертикальный slick Slider----*/






