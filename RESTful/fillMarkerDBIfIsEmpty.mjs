import {Marker} from "./api/models/mapMarkerModel";

const fillMarkerDBIfIsEmpty = () => {
  Marker.find({}, (err, markers)  => {
    if (err) {
      console.log(err);
    }
    if (!markers.length) {
      const defaultMarkers = [
        {name: 'Panda', description: '1', latitude: 45.81948249, longitude: 16.0113106, rating: 4.5, address:'Crnčićeva ul. 29, 10000, Zagreb', type: 'restaurant'},
        {name: 'Time Restaurant & Bar', description: '2', latitude: 45.8113478, longitude: 15.9797499, rating: 4.4, address: 'Petrinjska ul. 7, 10000, Zagreb', type: 'restaurant'},
        {name: 'Ginger Sushi', description: '3', latitude: 45.8103112, longitude: 15.97154929, rating: 4.5, address: 'Masarykova ul. 21, 10000, Zagreb', type: 'fastFood'},
        {name: 'Beijing Duck', description: '4', latitude: 45.8137592, longitude: 15.9902993, rating: 4.5, address: 'Vlaška ul. 78, 10000, Zagreb', type: 'shop'},
        {name: 'Spice Up', description: '5', latitude: 45.8091215, longitude: 15.98163869, rating: 4.7, address: 'Ul. Matije Mrazovića 9, 10000, Zagreb', type: 'shop'},
        {name: 'Asia store', description: '6', latitude: 45.8133128, longitude: 15.967959, rating: 4.8, address: 'Ilica 54, 10000, Zagreb', type: 'shop'},
        {name: 'Cro.K 한식당', description: '7', latitude: 45.8136696, longitude: 15.97713759, rating: 3.8, address: 'Ul. Pod zidom 4, 10000, Zagreb', type: 'restaurant'},
        {name: 'Walking Wok', description: '8', latitude: 45.8177611, longitude: 16.007133, rating: 4.1, address: 'Jordanovac ul. 1, 10000, Zagreb', type: 'fastFood'},
        {name: 'Asian Cash & Carry', description: '9', latitude: 45.8088494, longitude: 16.0172466, rating: 4.7, address: 'Ivanićgradska ul. 33, 10000, Zagreb', type: 'shop'},
        // {name: '', description: '', latitude: , longitude: , rating: , address: '', type: ''},
      ];
      defaultMarkers.forEach((marker) => {
        const newMarker = new Marker(marker);
        newMarker.save((err, marker) => {
          if (err) {
            console.log(err)
          }
          console.log(`Added marker: ${marker.name} @ lat: ${marker.latitude} lng: ${marker.longitude}`);
        });
      })
    } else {
      console.log(`You are good to go ${markers.length} markers in DB`)
    }
  });
};

export default fillMarkerDBIfIsEmpty;
