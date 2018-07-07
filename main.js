/*
  Создайте компонент галлереи изображений следующего вида.
  
    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>   
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
    { preview: 'img/photo_1_sm.jpeg', fullview: 'img/photo_1_big.jpeg', alt: "alt text 1" },
    { preview: 'img/photo_2_sm.jpeg', fullview: 'img/photo_2_big.jpeg', alt: "alt text 2" },
    { preview: 'img/photo_3_sm.jpeg', fullview: 'img/photo_3_big.jpeg', alt: "alt text 3" },
    { preview: 'img/photo_4_sm.jpeg', fullview: 'img/photo_4_big.jpeg', alt: "alt text 4" },
  ];

const gallery = document.querySelector('.js-image-gallery');

const fullview = document.querySelector('.js-fullview>img');
const preview = document.querySelector('.preview');

function createList(){
    galleryItems.forEach(item=>{
        let el=document.createElement('li');
        let el_img=document.createElement('img');
        el_img.setAttribute('src', item.preview);
        el_img.setAttribute('data-fullview', item.fullview);
        el_img.setAttribute('alt', item.alt)
        el.appendChild(el_img);
        preview.appendChild(el);
    })
}

fullview.setAttribute('src', galleryItems[0].fullview);
fullview.setAttribute('alt', galleryItems[0].alt);

function changeFullView(e){
fullview.setAttribute('src', e.target.dataset.fullview);
fullview.setAttribute('alt', e.target.getAttribute('alt'));
listLi.forEach(img=>img.style.outline='');
// listLi.forEach(img=>console.log(img));
e.target.style.outline = '10px solid green';
}

createList();
let listLi = document.querySelectorAll('li>img');
gallery.addEventListener('click', changeFullView);
  /*
    ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
    
    Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так, 
    чтобы можно было создать любое количество галлерей на странице. Функционал плагина 
    аналогичный заданию выше.
    
    При создании экземпляра конструктор получает:
      - items - список элементов для preview
      - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
      - defaultActiveItem - номер активного элемента preview по умолчанию
      
    Тогда создание экземпляра будет выглядеть следующим образом.
  */
  
//   new Gallery({
//     items: galleryItems,
//     parentNode: document.querySelector('.image-gallery'),
//     defaultActiveItem: 1
//   });
  
  /* Далее плагин работает в автономном режиме */