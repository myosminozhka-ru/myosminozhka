class Map {
    constructor() {
        this.mapId = 'map';
    }

    onInit() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZGVubnk3NDMiLCJhIjoiY2w2ZW9pcjk3MjhrcDNqcnozZmVweThkYiJ9.WY4UqSfHsmv4noUwv5pePQ';
        const map = new mapboxgl.Map({
            container: this.mapId, // container ID
            style: 'mapbox://styles/denny743/clacm072x001m14o3xsdw1pwl', // style URL
            center: [37.601402, 55.782552], // starting position [lng, lat]
            zoom: 17, // starting zoom
        });
    }
}

const map = new Map();
map.onInit()