import React, { useRef, useState, useCallback } from "react";
import {
  Alert,
  Button,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { ListItem, RadioButton } from "react-native-paper";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import { Feather, AntDesign } from "@expo/vector-icons";
// import Slider from "rn-range-slider";
import RangeSlider, { Slider } from "react-native-range-slider-expo";

const Filter = () => {
  let BS = useRef();
  let fall = new Animated.Value(1);

  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const [value, setValue] = useState(0);
  // const [value, setValue] = React.useState("first");
  // const _goBack = () => console.log("Went back");
  // const _handleSearch = () => console.log("Searching");
  // const _handleMore = () => console.log("Shown more");

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
          <Text style={{ color: "gray", fontWeight: "bold", marginLeft: 6 }}>
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
      <Pressable style={styles.button}>
        <Text style={styles.text}>DONE</Text>
      </Pressable>

      {/* <Slider
        // style={styles.slider}
        min={0}
        max={100}
        step={1}
      /> */}
      {/* <View>
        
        <RadioButton
          value="second"
          status={checked === "second" ? "checked" : "unchecked"}
          onPress={() => setChecked("second")}
        />
      </View> */}
      {/* <TouchableOpacity
        style={styles.panelButton}
        // onPress={takePhotoFromCamera}
      >
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        // onPress={choosePhotoFromLibrary}
      >
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        // onPress={() => this.bs.current.snapTo(1)}
      >
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity> */}
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  return (
    <View style={{ height: "100%", backgroundColor: "black" }}>
      <View style={{ marginTop: 40 }}>
        <TouchableHighlight
          style={styles.panelButton}
          // onPress={choosePhotoFromLibrary}
          // onPress={() => console.log("test")}
          onPress={() => BS.current.snapTo(0)}
          // onPress={() => console.log("test")}
        >
          <Text style={styles.panelButtonTitle}>Choose From Library</Text>
        </TouchableHighlight>
        {/* <Button
      title="Close Sheet"
    /> */}
      </View>
      <BottomSheet
        ref={BS}
        snapPoints={["70%", "0%"]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
        style={{ height: 700, backgroundColor: "red" }}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     backgroundColor: "grey",
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: "center",
//   },
// });

export default Filter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    // padding: 20,
    backgroundColor: "#FFFFFF",
    // backgroundColor: "red",
    // paddingTop: 20,
    height: "100%",
    overflow: "hidden",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // shadowColor: "#000000",
    // shadowOffset: { width: 0, height: 0 },
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
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
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
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
});
