import MapView, { Marker } from "react-native-maps";
import React, { useState, useEffect } from "react";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign , Feather  } from '@expo/vector-icons'; 
import {
  Platform,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
} from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS === "android" && !Constants.isDevice) {
        setErrorMsg(
          "Oops, this will not work on Snack in an Android emulator. Try it on your device!"
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting...";
  let { latitude, longitude } = {};
  if (errorMsg) {
    alert(errorMsg);
  } else if (location) {
    latitude = location.coords.latitude;
    longitude = location.coords.longitude;
    // alert(JSON.stringify(location));
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerItem} className=" col-lg-4 ">
          {/* <Icon name="filter" size={30} color="#D31245" /> */}
          <AntDesign name="filter" size={30} color="green" />
          <Text style={styles.header__text} style={{ color: "#D31245" }}>
            FILTER
          </Text>
        </View>
        <View style={styles.headerItem} className=" col-lg-4 ">
          {/* <Icon name="comment" size={30} color="#D1D3D4" /> */}
          {/* <AntDesign name="message-circle" size={32} color="green" /> */}
          <Feather name="message-circle" size={30} color="black" />
          <Text style={styles.header__text}>MESSENGER</Text>
        </View>
        <View style={styles.headerItem} className=" col-lg-4 ">
          <Icon name="user" size={25} color="#D1D3D4" />

          <Text style={styles.header__text}>PROFILE</Text>
        </View>
      </View>
      {location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.004757,
            longitudeDelta: 0.006866,
          }}
        >
          <Marker
            coordinate={{ latitude: latitude, longitude: longitude }}
          ></Marker>
        </MapView>
      ) : (
        <Text>{text}</Text>
      )}
      {/* Search Bar  */}
      <View style={styles.search__bar}>
        <Icon
          name="search"
          size={25}
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
    zIndex: 0,
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
    // position: "absolute",
    zIndex: 1,
  },
  search: {
    height: "50%",
    flex: 0,
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 2,
    backgroundColor: "red",
  },
  listView: { backgroundColor: "white" },
});

// import React, { useState, useEffect } from "react";
// import { Platform, Text, View, StyleSheet } from "react-native";
// import Constants from "expo-constants";
// import * as Location from "expo-location";
// import MapView, { Callout, Circle, Marker } from "react-native-maps";

// export default function App() {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);

//   useEffect(() => {
//     (async () => {
//       if (Platform.OS === "android" && !Constants.isDevice) {
//         setErrorMsg(
//           "Oops, this will not work on Snack in an Android emulator. Try it on your device!"
//         );
//         return;
//       }
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         setErrorMsg("Permission to access location was denied");
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//     })();
//   }, []);

//   let text = "Waiting...";
//   if (errorMsg) {
//     alert(errorMsg);
//   } else if (location) {
//     alert(JSON.stringify(location.coords.latitude));
//   }

//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       >
//         <Marker
//           coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
//         ></Marker>
//       </MapView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   map: {
//     width: "100%",
//     height: "100%",
//   },
// });
