import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-left" size={25} color="#D31245" />
      </View>
      <View style={styles.profile_edit}>
        <View style={styles.profile_item}>
          <View style={styles.profile_icon}>
            <Icon
              name="user"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginTop: "auto",
                marginBottom: "auto",
              }}
              size={30}
              color="#D31245"
            />
          </View>
          <View style={styles.profile_text}>
            <Text style={{ fontWeight: "bold" }}>Name</Text>
            <Text style={{ fontWeight: "100", color: "gray" }}>
              Mustapha Amengaye
            </Text>
          </View>
        </View>
        <View style={styles.profile_item}>
          <View style={styles.profile_icon}>
            <Icon
              name="calendar"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginTop: "auto",
                marginBottom: "auto",
              }}
              size={30}
              color="#D31245"
            />
          </View>
          <View style={styles.profile_text}>
            <Text style={{ fontWeight: "bold" }}>Name</Text>
            <Text style={{ fontWeight: "100", color: "gray" }}>
              Mustapha Amengaye
            </Text>
          </View>
        </View>
        <View style={styles.profile_item}>
          <View style={styles.profile_icon}>
            <Icon
              name="envelope"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginTop: "auto",
                marginBottom: "auto",
              }}
              size={30}
              color="#D31245"
            />
          </View>
          <View style={styles.profile_text}>
            <Text style={{ fontWeight: "bold" }}>EMAIL</Text>
            <Text style={{ fontWeight: "100", color: "gray" }}>
              Mustapha.Amengaye@Gmail.com
            </Text>
          </View>
        </View>
        <View style={styles.profile_item}>
          <View style={styles.profile_icon}>
            <Icon
              name="phone"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginTop: "auto",
                marginBottom: "auto",
              }}
              size={30}
              color="#D31245"
            />
          </View>
          <View style={styles.profile_text}>
            <Text style={{ fontWeight: "bold" }}>TELEPHONE</Text>
            <Text style={{ fontWeight: "100", color: "gray" }}>
              +33 2 34 56 78
            </Text>
          </View>
        </View>
        <View style={styles.edit}>
          <Icon
            name="pencil"
            style={styles.penIcon}
            size={30}
            color="#D31245"
          />
        </View>
      </View>
      <View style={styles.bio}>
        <View style={styles.bio_Text}>
          <View style={styles.text}>
            <Icon
              name="align-left"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: 22,
                marginRight: 22,
              }}
              size={25}
              color="#D31245"
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 25,
                color: "gray",
              }}
            >
              BIO
            </Text>
          </View>
          <Text style={{ fontWeight: "100", color: "gray" }}>
            oremtest text text text etxh tedk gdkmc kcdmcdl lkcdlcmd
          </Text>
        </View>
      </View>
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
});
