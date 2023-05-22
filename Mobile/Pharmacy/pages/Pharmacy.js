import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, SafeAreaView, ActivityIndicator, Image, Modal } from 'react-native';
import Cards from '../components/Cards';
import { useEffect, useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import apiUrl from '../api/api';
import MaterialCardWithTextOverImage from '../components/Cards';
import MapView from 'react-native-maps';

export default function Pharmacy({ navigation }) {
  const [ville, setVilledata] = useState([]);
  const [Zonedata, setZonedata] = useState([]);
  const [Gardedata, setGardedata] = useState([]);

  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedZone, setSelectedZone] = useState(null);
  const [selectedGarde, setSelectedGarde] = useState(null);

  useEffect(() => {
    if (selectedZone) {
      fetch(`${apiUrl}Garde/all`)
        .then((response) => response.json())
        .then((data) => setGardedata(data))
        .catch((error) => console.error('Error:', error));
    }
  }, [selectedZone]);

  useEffect(() => {
    fetch(`${apiUrl}Ville/all`)
      .then((response) => response.json())
      .then((data) => setVilledata(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const [Pharmaciedata, setPharmaciedata] = useState([]);




  useEffect(() => {
    fetch(`${apiUrl}Ville/v/${selectedCity}`)
      .then(response => response.json())
      .then(data => setZonedata(data))
      .catch((error) => console.error('Error:', error));
  }, [selectedCity]);

  useEffect(() => {
    fetch(`${apiUrl}Ville/Phar/${selectedCity}`)
      .then(response => response.json())
      .then(data => setPharmaciedata(data))
      .catch((error) => console.error('Error:', error));
  }, [selectedCity]);

  useEffect(() => {
    fetch(`${apiUrl}Ville/v/${selectedCity}/z/${selectedZone}`)
      .then(response => response.json())
      .then(data => setPharmaciedata(data))
      .catch((error) => console.error('Error:', error));
  }, [selectedZone]);

  useEffect(() => {
    fetch(`${apiUrl}Ville/v/${selectedCity}/z/${selectedZone}/garde/garde=${selectedGarde}`)
      .then(response => response.json())
      .then(data => setPharmaciedata(data))
      .catch((error) => console.error('Error:', error));
  }, [selectedGarde]);


  const [photoUrls, setPhotoUrls] = useState([]);

  const getPhoto = (id) => {
    console.log(id)
    return fetch(`${apiUrl}Photo/all`)
      .then(response => response.json())
      .then(data => {
        const photo = data.find(item => item.pharmacie.id === id);
        return photo ? photo.nom : null;
      });
  }

  useEffect(() => {
    const fetchPhotoUrls = async () => {
      const urls = await Promise.all(
        Pharmaciedata.map(pharmacie => getPhoto(pharmacie.id))
      );
      setPhotoUrls(urls);
    };

    fetchPhotoUrls();
  }, [Pharmaciedata]);


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ marginBottom: 5, overflow: 'hidden', borderRadius: 100, backgroundColor: "red" }}>
          <SelectDropdown
            style={styles.select}
            data={ville}
            onSelect={(selectedItem, index) => { setSelectedCity(selectedItem.nom) }}
            buttonTextAfterSelection={(selectedItem, index) => { return selectedItem.nom }}
            rowTextForSelection={(item, index) => { return item.nom }}
          />
        </View>
        <View style={{ marginBottom: 5, overflow: 'hidden', borderRadius: 100, backgroundColor: "red" }}>
          <SelectDropdown
            style={styles.select}
            data={Zonedata}
            onSelect={(selectedItem, index) => {setSelectedZone(selectedItem.nom) }}
            buttonTextAfterSelection={(selectedItem, index) => { return selectedItem.nom }}
            rowTextForSelection={(item, index) => { return item.nom }}
          />
        </View>
      </View>
      <View style={styles.header}>
        <View style={{ marginBottom: 5, overflow: 'hidden', borderRadius: 100, backgroundColor: "red" }}>
          <SelectDropdown
            style={styles.select}
            data={Gardedata}
            onSelect={(selectedItem, index) => { setSelectedGarde(selectedItem.nom) }}
            buttonTextAfterSelection={(selectedItem, index) => { return selectedItem.nom }}
            rowTextForSelection={(item, index) => { return item.nom }}
          />
        </View>
 
      </View>
      <View style={styles.body}>
        <SafeAreaView style={styles.scrol}>
          <ScrollView style={{flex:1}}>
          {Pharmaciedata.map((item,index) => (
            
         <MaterialCardWithTextOverImage key={index} data={item} photo={photoUrls[index]} navigation={navigation} />
         
         ))}
          </ScrollView>

  
          </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  header: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row"
  },
  select: {
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 100,
    width: 100,
    height: 40,
    marginHorizontal: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginRight: 10
  },
  body: {
    margin:10,
    padding:10,
    flex: 8,
    backgroundColor: "white",
    borderRadius: 20,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 30,
    shadowOpacity: 0.9,
    shadowRadius: 10,
    flexDirection: "column",
    paddingTop:10,
  },scrol:{
    flex:1,
  },  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  }, map: {
    width: '100%',
    height: '90%',
  },
 
});


// {Pharmaciedata.map((item) => (
//   <View style={styles.card}>
//     </View>
//   ))}