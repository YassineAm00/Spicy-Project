import * as React from "react";
import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native";
import MapScreen from "./components/MapScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Callout, Circle, Marker } from "react-native-maps";

export default function App() {
  const [pin, setPin] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  const [region, setRegion] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.container}>
      {/*  Header  */}

      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }}
        query={{
          key: "KEY",
          language: "en",
          components: "country:us",
          types: "establishment",
          radius: 30000,
          location: `${region.latitude}, ${region.longitude}`,
        }}
        styles={styles.search}
      />
      <View style={styles.header}>
        <View style={styles.headerItem} className=" col-lg-4 ">
          <Icon name="filter" size={30} color="#D31245" />
          <Text style={styles.header__text} style={{ color: "#D31245" }}>
            FILTER
          </Text>
        </View>
        <View style={styles.headerItem} className=" col-lg-4 ">
          <Icon name="comment" size={30} color="#D1D3D4" />
          <Text style={styles.header__text}>MESSENGER</Text>
        </View>
        <View style={styles.headerItem} className=" col-lg-4 ">
          <Icon name="user" size={25} color="#D1D3D4" />

          <Text style={styles.header__text}>PROFILE</Text>
        </View>
      </View>

      {/* <MapScreen /> */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
      />

      {/* Search Bar  */}
      <View style={styles.search__bar}>
        <Icon
          name="search"
          size={30}
          style={styles.search__icon}
          color="#D31245"
        />
        <TextInput style={styles.input} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "80%",
    padding: 7,
    zIndex: 2,
    position: "absolute",
    top: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    borderRadius: 5,
  },
  header__text: {
    color: "#D1D3D4",
    marginTop: 3,
  },
  headerItem: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  search__bar: {
    height: "10%",
    zIndex: 2,
    backgroundColor: "white",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    borderColor: "transparent",
  },
  input: {
    height: "100%",
    width: "90%",
    padding: 10,
    backgroundColor: "white",
  },
  search__icon: {
    width: "10%",
    marginTop: 15,
    marginLeft: 10,
    alignItems: "center",
  },

  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "absolute",
    zIndex: 1,
  },
  search: {
    height: "50%",
    flex: 0,
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 6,
    backgroundColor: "red",
  },
  listView: { backgroundColor: "white" },
});
