ymaps.ready(['polylabel.create']).then(function () {

    if (document.querySelector('#map')) {
        var textLayouts = {
            label: '<div>{{properties.hintContent}}</div>',
            hint: ymaps.templateLayoutFactory.createClass('<div>{{properties.hintContent}}</div>')
        };

        var map = new ymaps.Map('map', {
            center: [60.220148, 30.517438],
            zoom: 19,
            controls: ['zoomControl']
        }, {
            maxZoom: 19,
            minZoom: 14
        }),
            objectManager = new ymaps.ObjectManager();
        map.controls.get('zoomControl').options.set({ size: 'small' });

        // Загружаем GeoJSON файл, экспортированный из Конструктора карт.
        $.getJSON('files/map.geojson')
            .done(function (geoJson) {

                var options = {
                    // Стандартный вид текста будет темный с белой обводкой.
                    labelDefaults: 'dark',
                    // Макет подписи.
                    labelLayout: textLayouts.label,
                    // Цвет заливки.
                    fillColor: 'rgba(27, 125, 190, 0.7)',
                    // Цвет обводки.
                    strokeColor: 'rgba(255, 255, 255, 0.8)',
                    // Отключим показ всплывающей подсказки при наведении на полигон.
                    openHintOnHover: false,
                    // Размер текста подписей зависит от масштаба.
                    // На уровнях зума 3-6 размер текста равен 12, а на уровнях зума 7-18 равен 14.
                    labelTextSize: { '6_10': 14, '12_24': 19 },
                    cursor: 'pointer',
                    labelDotCursor: 'pointer',
                    // Допустимая погрешность в расчете вместимости подписи в полигон.
                    labelPermissibleInaccuracyOfVisibility: 4
                };




                // Добавляем описание объектов в формате JSON в менеджер объектов.
                objectManager.add(geoJson.features.map(function (feature) {
                    feature.options = options;
                    return feature;
                }));
                // Добавляем объекты на карту.
                map.geoObjects.add(objectManager);

                var polylabel = new ymaps.polylabel.create(map, objectManager);
            });

        map.geoObjects.events.add('click', function (e) {
            var target = e.get('target');

            console.log(1111);

           

        });

    }
});

