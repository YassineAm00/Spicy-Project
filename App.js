import * as React from "react";
import {useState , useEffect} from "react";
import { StyleSheet, Text, View, Dimensions, TextInput, SafeAreaView } from "react-native";
// import MapScreen from "./components/MapScreen";
// import Profile from "./components/Profile";
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import ProfileScreen from "./components/ProfileScreen";
import Profile from "./components/Profile";

export default function App() {


  // const [originPlace, setOriginPlace] = useState(null);
  // const [destinationPlace, setDestinationPlace] = useState(null);

  // const navigation = useNavigation();

  // const checkNavigation = () => {
  //   if (originPlace && destinationPlace) {
  //     navigation.navigate('SearchResults', {
  //       originPlace,
  //       destinationPlace,
  //     })
  //   }
  // }

  // useEffect(() => {
  //   checkNavigation();
  // }, [originPlace, destinationPlace]);


  return (
    <View >
      {/* <MapScreen /> */}
      {/* <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      styles={{ backgroundColor : "red"}}
      query={{
        key: 'AIzaSyDFhFUaYpyAjNE4Eq-sWCGWjrr6kyGnhbQ',
        language: 'en',
      }}
    /> 
    <Text style={{marginTop:120}}>Test</Text>
    <TextInput />
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      styles={{ height: "100%"}}
      query={{
        key: 'AIzaSyBN4O9Z7RZyE7dNco2-yCsqMDpCBM4ORrg',
        language: 'en',
      }}
    /> */}
          {/* <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          // enablePoweredByContainer={false}
          suppressDefaultStyles
          // currentLocation={true}
          currentLocationLabel='Current location'
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyBN4O9Z7RZyE7dNco2-yCsqMDpCBM4ORrg',
            language: 'en',
          }}
          // renderRow={(data) => <PlaceRow data={data} />}
          // renderDescription={(data) => data.description || data.vicinity}
          // predefinedPlaces={[homePlace, workPlace]}
        /> */}
        <Profile />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },
  textInput: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
    marginLeft: 20,
  },

  separator: {
    backgroundColor: '#efefef',
    height: 1,
  },
  listView: {
    position: 'absolute',
      top: 105,
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: '#a2a2a2',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {

  },

  circle: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 20,
    left: 15,
    borderRadius: 5,
  },
  line: {
    width: 1,
    height: 50,
    backgroundColor: '#c4c4c4',
    position: 'absolute',
    top: 28,
    left: 17,
  },
  square: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 80,
    left: 15,
  },
});


// import React, { useState } from 'react';
// import { Text, View, StyleSheet, Slider } from 'react-native';

// const ShadowPropSlider = ({ label, value, ...props }) => {
//   return (
//     <>
//       <Text>
//         {label} ({value.toFixed(2)})
//       </Text>
//       <Slider step={1} value={value} {...props} />
//     </>
//   );
// };

// const App = () => {
//   const [shadowOffsetWidth, setShadowOffsetWidth] = useState(0);
//   const [shadowOffsetHeight, setShadowOffsetHeight] = useState(0);
//   const [shadowRadius, setShadowRadius] = useState(0);
//   const [shadowOpacity, setShadowOpacity] = useState(0.1);

//   return (
//     <View style={styles.container}>
//       <View
//         style={[
//           styles.square,
//         ]}
//       />
//       <View style={styles.controls}>
//         <ShadowPropSlider
//           label="shadowOffset - X"
//           minimumValue={-50}
//           maximumValue={50}
//           value={shadowOffsetWidth}
//           onValueChange={val => setShadowOffsetWidth(val)}
//         />
//         <ShadowPropSlider
//           label="shadowOffset - Y"
//           minimumValue={-50}
//           maximumValue={50}
//           value={shadowOffsetHeight}
//           onValueChange={val => setShadowOffsetHeight(val)}
//         />
//         <ShadowPropSlider
//           label="shadowRadius"
//           minimumValue={0}
//           maximumValue={100}
//           value={shadowRadius}
//           onValueChange={val => setShadowRadius(val)}
//         />
//         <ShadowPropSlider
//           label="shadowOpacity"
//           minimumValue={0}
//           maximumValue={1}
//           step={0.05}
//           value={shadowOpacity}
//           onValueChange={val => setShadowOpacity(val)}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-around',
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   square: {
//     alignSelf: 'center',
//     backgroundColor: 'white',
//     borderRadius: 4,
//     height: 150,
//     shadowColor: 'black',
//     width: 150,
//     shadowOffset: { width: 19, height: 19 },
//     shadowColor: 'gray',
//     shadowOpacity: 9,
//     elevation: 5,
//     // background color must be set
//     backgroundColor : "#0000" // invisible color
//   },
//   controls: {
//     paddingHorizontal: 12,
//   },
// });

// export default App;