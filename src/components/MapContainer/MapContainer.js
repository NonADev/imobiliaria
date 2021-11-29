import GoogleMapReact from 'google-map-react';

function MapContainer() {
    let key = "";

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '300px', width: '70%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: key}}
                defaultCenter={{lat: 59.95,lng: 30.33}}
                defaultZoom={11}
            >
            </GoogleMapReact>
        </div>
    );
}

export default MapContainer;
