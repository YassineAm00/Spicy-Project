import React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";

import {
  AntDesign,
  FontAwesome,
  Foundation,
  Feather,
} from "@expo/vector-icons";

export default function profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-left" size={25} color="#FF3B3C" />
      </View>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row" }}>
          <Avatar.Image
            source={{
              uri: "https://api.adorable.io/avatars/80/abott@adorable.png",
            }}
            size={45}
          />
          {/* <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              John Doe
            </Title>
            <Caption style={styles.caption}>@j_doe</Caption>
          </View> */}
        </View>
      </View>
      <View
        style={{
          padding: 15,
          borderRadius: 5,
          shadowColor: "#777",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 7,
        }}
      >
        <View style={styles.Descrow}>
          <AntDesign
            name="user"
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: 10,
              marginRight: 5,
            }}
            color="#FF3B3C"
            size={25}
          />
          {/* <Icon name="user-marker-radius"  /> */}
          <View>
            <Text
              style={{
                color: "#777777",
                marginLeft: 20,
                fontWeight: "bold",
                fontSize: 12,
              }}
            >
              Name
            </Text>
            <Text style={{ color: "#777777", marginLeft: 20, fontSize: 15 }}>
              Yassine Test
            </Text>
          </View>
        </View>
        <View style={styles.Descrow}>
          <Feather
            name="calendar"
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: 10,
              marginRight: 5,
            }}
            color="#FF3B3C"
            size={25}
          />
          {/* <Icon name="map-marker-radius"  /> */}
          <View>
            <Text
              style={{
                color: "#777777",
                marginLeft: 20,
                fontWeight: "bold",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              DATE OF BIRTH
            </Text>
            <Text style={{ color: "#777777", marginLeft: 20, fontSize: 15 }}>
              Yassine Test
            </Text>
          </View>
        </View>
        <View style={styles.Descrow}>
          <FontAwesome
            name="envelope-o"
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: 10,
              marginRight: 5,
            }}
            color="#FF3B3C"
            size={25}
          />
          <View>
            <Text
              style={{
                color: "#777777",
                marginLeft: 20,
                fontWeight: "bold",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              EMAIL
            </Text>
            <Text style={{ color: "#777777", marginLeft: 20, fontSize: 15 }}>
              Yassine Test
            </Text>
          </View>
        </View>
        <View style={styles.Descrow}>
          <AntDesign
            name="phone"
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: 10,
              marginRight: 5,
            }}
            color="#FF3B3C"
            size={25}
          />
          <View>
            <Text
              style={{
                color: "#777777",
                marginLeft: 20,
                fontWeight: "bold",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              TELEPHONE
            </Text>
            <Text style={{ color: "#777777", marginLeft: 20, fontSize: 15 }}>
              Yassine Test
            </Text>
          </View>
        </View>
      </View>

      {/* ::::::::: Images :::::::: */}
      <View style={styles.changeImages}>
        <View
          style={{
            textAlign: "center",
            // backgroundColor:'red'
          }}
        >
          <Image
            style={{
              height: 200,
              width: 150,
              borderRadius: 10,
              position: "relative",
            }}
            source={require("../assets/250px-Image_created_with_a_mobile_phone.png")}
          />
          <View style={styles.ImageAction}>
            <Feather name="image" size={20} color="white" />
            <Text
              style={{ textAlign: "center", marginLeft: 5, color: "white" }}
            >
              Change
            </Text>
          </View>
        </View>
        <View
          style={{ flexDirection: "column", justifyContent: "space-between" }}
        >
          <View
            style={{
              height: "47%",
              width: 90,
              borderRadius: 8,
              marginLeft: 15,
            }}
          >
            <Image
              style={{
                height: "100%",
                width: "100%",
                borderRadius: 8,
              }}
              source={require("../assets/250px-Image_created_with_a_mobile_phone.png")}
            />
            <View style={styles.ImageAction}>
              <Feather name="image" size={20} color="white" />
              <Text
                style={{ textAlign: "center", marginLeft: 5, color: "white" }}
              >
                Change
              </Text>
            </View>
          </View>
          <View
            style={{
              height: "47%",
              width: 90,
              borderRadius: 8,
              marginLeft: 15,
            }}
          >
            <Image
              style={{
                height: "100%",
                width: "100%",
                borderRadius: 8,
              }}
              source={require("../assets/250px-Image_created_with_a_mobile_phone.png")}
            />
            <View style={styles.ImageAction}>
              <Feather name="image" size={20} color="white" />
              <Text
                style={{ textAlign: "center", marginLeft: 10, color: "white" }}
              >
                Add
              </Text>
            </View>
          </View>
          {/* <Image
            style={{
              height: "47%",
              width: 90,
              borderRadius: 10,
              marginLeft: 15,
            }}
            source={require("../assets/250px-Image_created_with_a_mobile_phone.png")}
          /> */}
        </View>
      </View>

      {/* :::::::::: Button :::::::: */}
      <Pressable style={styles.button}>
        <Text style={styles.text}>Click</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    width: "100%",
    height: "100%",
    padding: 20,
  },
  header: {
    // backgroundColor: "white",
    padding: 10,
    marginTop: 20,
  },
  profile_edit: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    position: "relative",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  profile_item: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: 5,
  },
  profile_icon: {
    width: "20%",
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
  profile_text: {
    width: "80%",
    color: "gray",
    // backgroundColor: "red",
  },
  edit: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    position: "absolute",
    top: 10,
    right: 10,
    elevation: 10,
  },
  penIcon: {
    marginTop: 3,
  },
  bio: {
    padding: 10,
    borderWidth: 1,
  },
  bio_Text: {
    width: "100%",
  },
  text: {
    display: "flex",
    flexDirection: "row",
  },

  // :::::::::::::::::::::::

  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 10,
    // backgroundColor: 'red'
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  Descrow: {
    marginBottom: 5,
    // backgroundColor:"red",
    flexDirection: "row",
  },
  changeImages: {
    marginTop: 20,
    flexDirection: "row",
    // backgroundColor: "red",
    justifyContent: "center",
    height: 200,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  ImageAction: {
    position: "relative",
    bottom: 45,
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "row",
    width: 90,
    padding: 7,
    backgroundColor: "rgba(52, 52, 52, 0.6)",
    borderRadius: 50,
  },
  MainButton: {
    backgroundColor: "red",
    position: "absolute",
    bottom: 0,
  },
  button: {
    position:'absolute',
    bottom:0 ,
    width:"100%",
    margin:'auto',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: '#FF3B3C',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
