import {Marker} from "./api/models/mapMarkerModel";

const fillMarkerDBIfIsEmpty = () => {
  Marker.find({}, (err, markers)  => {
    if (err) {
      console.log(err);
    }
    if (!markers.length) {
      const defaultMarkers = [
        {name: 'Panda', description: 'Monday 11AM–11PM \n Tuesday 11AM–11PM \n Wednesday 11AM–11PM \n Thursday 11AM–11PM \n Friday 11AM–11PM \n Saturday 11AM–11PM \n Sunday 11AM–11PM', latitude: 45.81948249, longitude: 16.0113106, rating: 4.5, address:'Crnčićeva ul. 29, 10000, Zagreb', type: 'restaurant'},
        {name: 'Time Restaurant', description: 'Monday 7AM–2AM \n Tuesday 7AM–2AM \n Wednesday 7AM–2AM \n Thursday 7AM–2AM \n Friday 7AM–2AM \n Saturday 8AM–4AM \n Sunday Closed', latitude: 45.8113478, longitude: 15.9797499, rating: 4.4, address: 'Petrinjska ul. 7, 10000, Zagreb', type: 'restaurant'},
        {name: 'Ginger Sushi', description: 'Monday 11AM–11PM \n Tuesday 11AM–11PM \n Wednesday 11AM–11PM \n Thursday 11AM–11PM \n Friday 11AM–12AM \n Saturday 11AM–12AM \n Sunday Closed', latitude: 45.8103112, longitude: 15.97154929, rating: 4.5, address: 'Masarykova ul. 21, 10000, Zagreb', type: 'fastFood'},
        {name: 'Beijing Duck', description: 'Monday 9AM–8PM \n Tuesday 9AM–8PM \n Wednesday 9AM–8PM \n Thursday 9AM–8PM \n Friday 9AM–8PM \n Saturday 9AM–2PM \n Sunday Closed', latitude: 45.8137592, longitude: 15.9902993, rating: 4.5, address: 'Vlaška ul. 78, 10000, Zagreb', type: 'shop'},
        {name: 'Spice Up', description: 'Monday 10AM–8PM \n Tuesday 10AM–8PM \n Wednesday 10AM–8PM \n Thursday 10AM–8PM \n Friday 10AM–8PM \n Saturday 9AM–3PM \n Sunday Closed', latitude: 45.8091215, longitude: 15.98163869, rating: 4.7, address: 'Ul. Matije Mrazovića 9, 10000, Zagreb', type: 'shop'},
        {name: 'Asia store', description: 'Monday 8AM–8PM \n Tuesday 8AM–8PM \n Wednesday 8AM–8PM \n Thursday 8AM–8PM \n Friday 8AM–8PM \n Saturday 9AM–5PM \n Sunday Closed', latitude: 45.8133128, longitude: 15.967959, rating: 4.8, address: 'Ilica 54, 10000, Zagreb', type: 'shop'},
        {name: 'Cro.K 한식당', description: 'Monday Closed \n Tuesday 11:30AM–11PM \n Wednesday 11:30AM–11PM \n Thursday 11:30AM–11PM \n Friday 11:30AM–11PM \n Saturday 11:30AM–11PM \n Sunday 11:30AM–11PM', latitude: 45.8136696, longitude: 15.97713759, rating: 3.8, address: 'Ul. Pod zidom 4, 10000, Zagreb', type: 'restaurant'},
        {name: 'Walking Wok', description: 'Monday 10AM–12AM \n Tuesday 10AM–12AM \n Wednesday 10AM–12AM \n Thursday 10AM–12AM \n Friday 10AM–12AM \n Saturday 10AM–12AM \n Sunday Closed', latitude: 45.8177611, longitude: 16.007133, rating: 4.1, address: 'Jordanovac ul. 1, 10000, Zagreb', type: 'fastFood'},
        {name: 'Asian Cash & Carry', description: 'Thursday 9AM–8PM \n Tuesday 9AM–8PM \n Wednesday 9AM–8PM \n Thursday 9AM–8PM \n Friday 9AM–8PM \n Saturday 9AM–1PM \n Sunday Closed', latitude: 45.8088494, longitude: 16.0172466, rating: 4.7, address: 'Ivanićgradska ul. 33, 10000, Zagreb', type: 'shop'},
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
