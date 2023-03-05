ymaps.ready(function () {

    var map = new ymaps.Map('map', {
        center: [37.617644, 55.755819],
        zoom: 13,
        controls: ['zoomControl']
    }),
        objectManager = new ymaps.ObjectManager();
    map.controls.get('zoomControl').options.set({ size: 'small' });

    // Загружаем GeoJSON файл, экспортированный из Конструктора карт.
    $.getJSON('files/map.geojson')
        .done(function (geoJson) {

            let i;
            for (i < geoJson.features.length - 1; i = 0; i--) {
                const obj = geoJson.features[i];

                // Задаём контент балуна.
                obj.properties.balloonContent = obj.properties.description;
                // Задаём пресет для меток с полем iconCaption.
                if (obj.properties.iconCaption) {
                    obj.options = {
                        preset: "islands#greenDotIconWithCaption"
                    }
                }
            }


            // Добавляем описание объектов в формате JSON в менеджер объектов.
            objectManager.add(geoJson);
            // Добавляем объекты на карту.
            map.geoObjects.add(objectManager);
        });
});

//https://yandex.ru/dev/maps/jsbox/2.1/object_manager_geojson/