import React, { useState, useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign, Feather } from "@expo/vector-icons";
import {
  Platform,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Alert,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Pressable,
} from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";
import Icon from "react-native-vector-icons/FontAwesome";
import { ListItem, RadioButton } from "react-native-paper";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import RangeSlider, { Slider } from "react-native-range-slider-expo";
// import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
// import { useNavigation } from "@react-navigation/native";

export default function App() {
  // Navigation
  // const navigation = useNavigation();
  // const navigateToProfile = () => {
  //   navigation.navigate("Profile");
  // };

  // Current Location Js
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

  // Bottom sheet
  let BS = useRef();
  let fall = new Animated.Value(1);

  const renderInner = () => (
    <View style={styles.panel}>
      <View
        style={{
          alignItems: "center",
          // backgroundColor: "yellow",
          borderBottomWidth: 1,
          borderBottomColor: "#E5E5E5",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 15,
          paddingHorizontal: 20,
        }}
      >
        <Feather name="x" size={24} color="#FF0031" />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <AntDesign name="filter" size={24} color="#FF0031" />
          <Text
            style={{
              color: "gray",
              // fontFamily: "Inter_900Black",
              fontWeight: "bold",
              marginLeft: 6,
            }}
          >
            FILTER
          </Text>
        </View>
      </View>
      <Text
        style={{
          paddingHorizontal: 25,
          paddingTop: 20,
          paddingBottom: 20,
          fontWeight: "bold",
          color: "gray",
          marginBottom: 0,
        }}
      >
        INTERESTING
      </Text>
      <View
        style={{
          // backgroundColor: "red",
          alignSelf: "center",
          flexDirection: "row",
          justifyContent: "space-around",
          // paddingHorizontal: 20,
          width: "90%",
          borderBottomWidth: 2,
          borderBottomColor: "#E5E5E5",
          paddingBottom: 5,
        }}
      >
        {/* Man */}
        <View
          style={{
            // backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            width: "30%",
          }}
        >
          <Image
            style={{
              height: 50,
              width: 50,
              // borderRadius: 10,
              // position: "relative",
            }}
            source={require("../assets/Man.png")}
          />

          <View
            style={{
              // backgroundColor: "green",
              // justifyContent: "flex-end",
              flexDirection: "row",
              alignItems: "center",
              // backgroundColor: "red",
              padding: 0,
            }}
          >
            <RadioButton
              value="first"
              // style={{ backgroundColor: "red" }}
              // status={checked === "first" ? "checked" : "unchecked"}
              // onPress={() => setChecked("first")}
            />
            <Text style={{ fontSize: 15, color: "gray" }}>Man</Text>
          </View>
        </View>

        {/* Woman */}
        <View
          style={{
            // backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            width: "30%",
          }}
        >
          <Image
            style={{
              height: 50,
              width: 50,
              // borderRadius: 10,
              // position: "relative",
            }}
            source={require("../assets/Woman.png")}
          />

          <View
            style={{
              // backgroundColor: "green",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              // backgroundColor: "red",
            }}
          >
            <RadioButton
              value="first"
              // style={{ backgroundColor: "red" }}
              // status={checked === "first" ? "checked" : "unchecked"}
              // onPress={() => setChecked("first")}
            />
            <Text style={{ fontSize: 15, color: "gray" }}>Woman</Text>
          </View>
        </View>
      </View>

      {/* Age  */}
      <View>
        <Text
          style={{
            paddingHorizontal: 25,
            paddingTop: 20,
            paddingBottom: 0,
            fontWeight: "bold",
            color: "gray",
            marginBottom: 0,
          }}
        >
          AGE
        </Text>
        <RangeSlider
          min={18}
          max={100}
          step={1}
          fromValueOnChange={(value) => setFromValue(value)}
          toValueOnChange={(value) => setToValue(value)}
          initialFromValue={11}
          styleSize={15}
          fromKnobColor="#FF0031"
          toKnobColor="#FF0031"
          inRangeBarColor="#FF0031"
          outOfRangeBarColor="gray"
          valueLabelsBackgroundColor="#FF0031"
          initialFromValue={18}
          initialToValue={100}
        />
      </View>

      {/* Button  */}
      <Pressable style={styles.buttonSheet}>
        <Text style={styles.text}>DONE</Text>
      </Pressable>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.headersheet}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  // Age
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <View style={styles.container}>
      {/*  Header  */}
      <View style={styles.header}>
        <TouchableOpacity
          // title="test"
          style={styles.headerItem}
          className="col-lg-4"
          onPress={() => BS.current.snapTo(0)}
        >
          {/* <Icon name="filter" size={30} color="#D31245" /> */}
          <AntDesign name="filter" size={30} color="#D1D3D4" />
          <Text style={styles.header__text} style={{ color: "#D1D3D4" }}>
            FILTER
          </Text>
        </TouchableOpacity>
        <View style={styles.headerItem} className=" col-lg-4 ">
          {/* <Icon name="comment" size={30} color="#D1D3D4" /> */}
          {/* <AntDesign name="message-circle" size={32} color="green" /> */}
          <Feather name="message-circle" size={30} color="#D1D3D4" />
          <Text style={styles.header__text}>MESSENGER</Text>
        </View>
        <TouchableOpacity
          style={styles.headerItem}
          className=" col-lg-4 "
          // onPress={navigateToProfile}
        >
          <AntDesign name="user" size={30} color="#D1D3D4" />

          <Text style={styles.header__text}>PROFILE</Text>
        </TouchableOpacity>
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

      {/* Search Bar */}
      <View style={styles.search__bar}>
        {/* <Icon
          name="search"
          size={25}
          style={styles.search__icon}
          color="#D31245"
        /> */}
        <AntDesign
          name="search1"
          size={24}
          color="#D31245"
          style={styles.search__icon}
        />
        <TextInput style={styles.input} placeholder="Type here to search" />
      </View>
      {/* <MapView style={styles.map}></MapView> */}
      <BottomSheet
        ref={BS}
        snapPoints={["80%", "0%"]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
        style={{ height: 700 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    zIndex: 0,
  },
  header: {
    width: "80%",
    padding: 7,
    zIndex: 999999,
    position: "absolute",
    top: 50,
    // display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
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
    backgroundColor: "white",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    borderColor: "transparent",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    // elevation: 5,
    zIndex: 2,
  },
  input: {
    height: "100%",
    width: "90%",
    padding: 10,
    backgroundColor: "transparent",
  },
  search__icon: {
    width: "10%",
    // height: "100%",
    // marginTop: 15,
    marginLeft: 10,
    justifyContent: "center",
    // alignItems: "center",
    // textAlign: "center",
    alignSelf: "center",
    // backgroundColor: "red",
  },

  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    // width: "100%",
    // height: "100%",
    // position: "absolute",
    zIndex: 2,
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

  // BottomSheet
  panel: {
    // padding: 20,
    backgroundColor: "#FFFFFF",
    // backgroundColor: "red",
    // paddingTop: 20,
    height: "100%",
    overflow: "hidden",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 3,
    // shadowColor: "#000000",
    // shadowOffset: { width: 0, height: 0 },
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  headersheet: {
    // backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "gray",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  buttonSheet: {
    width: "80%",
    margin: "auto",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: "#FF0031",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
  },
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
