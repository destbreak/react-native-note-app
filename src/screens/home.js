import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import CustomButton from "../components/customButton";

const NoteCard = ({ item, setCurrentPage, setNoteToEdit, deleteNote }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text>{item.desc}</Text>
    <View style={styles.buttons}>
      <CustomButton
        backgroundColor="#ffc300"
        color="#151d3b"
        text="Ubah"
        fontSize={12}
        width={100}
        onPress={() => {
          setNoteToEdit(item);
          setCurrentPage("edit");
        }}
      />
      <CustomButton
        backgroundColor="#d82148"
        color="#fff"
        text="Hapus"
        fontSize={12}
        width={100}
        onPress={() => deleteNote(item.id)}
      />
    </View>
  </View>
);

const Home = ({ noteList, setCurrentPage, setNoteToEdit, deleteNote }) => (
  <View style={styles.container}>
    <CustomButton
      backgroundColor="#ddd"
      color="#203239"
      text="Tambahkan Note"
      width="100%"
      onPress={() => {
        setCurrentPage("add");
      }}
    />
    <FlatList
      showsVerticalScrollIndicator={false}
      data={noteList}
      renderItem={({ item }) => (
        <NoteCard item={item} setCurrentPage={setCurrentPage} setNoteToEdit={setNoteToEdit} deleteNote={deleteNote} />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    padding: 10,
    marginVertical: 15,
    borderColor: "#ddd",
    borderWidth: 2,
    borderRadius: 5,
  },
  buttons: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default Home;
