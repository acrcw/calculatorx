import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Buttons from "./Buttons";
import { useState,useEffect } from "react";


const MainScreen = () => {
    const [op,setoperator]=useState(0);
    const [data,setData] = useState("0");
  
  return (
    <View style={styles.mainContainer}>
      <ScrollView ref={ref =>{this.ScrollView=ref}} style={styles.calculationContainer}>
       
        <Text style={styles.calculatedText}>{data}</Text>
      </ScrollView>
      <View style={styles.keyContainer}>
      <Buttons setdata={setData} data={data} op={op} setoperator={setoperator} title="AC"/>
      <Buttons setdata={setData} data={data} op={op} setoperator={setoperator} title="D"/>
      <Buttons setdata={setData} data={data} op={op} setoperator={setoperator} title="%"/>
      <Buttons setdata={setData} data={data} op={op} setoperator={setoperator} title="/"/>
      <Buttons setdata={setData} data={data} op={op} setoperator={setoperator} title="7"/>
      <Buttons setdata={setData} data={data} op={op} setoperator={setoperator} title="8"/>
      <Buttons setdata={setData} data={data} op={op} setoperator={setoperator} title="9"/>
      <Buttons setdata={setData} data={data} op={op} setoperator={setoperator} title="*"/>
      <Buttons setdata={setData} data={data} op={op} setoperator={setoperator} title="4"/>
      <Buttons setdata={setData} data={data} op={op} setoperator={setoperator} title="5"/>
      <Buttons setdata={setData} data={data} op={op} setoperator={setoperator} title="6"/>
      <Buttons setdata={setData} data={data} op={op} setoperator={setoperator} title="-"/>
      <Buttons setdata={setData} data={data} op={op} setoperator={setoperator} title="1"/>
      <Buttons setdata={setData} data={data} op={op} setoperator={setoperator} title="2"/>
      <Buttons setdata={setData} data={data} op={op} setoperator={setoperator} title="3"/>
      <Buttons setdata={setData} data={data} op={op} setoperator={setoperator} title="+"/>
      <Buttons setdata={setData} data={data} op={op} setoperator={setoperator} title="="/>
      <Buttons setdata={setData} data={data} op={op} setoperator={setoperator} title="0"/>
      <Buttons setdata={setData} data={data} op={op} setoperator={setoperator} title="."/>
      <Buttons setdata={setData} data={data} op={op} setoperator={setoperator} title="="/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  calculatedText:{
    fontSize:50,
    textAlign:"right"
  },
  calculationContainer: {
    flex: 1,
    padding:20,
    borderWidth:1,
    flexDirection:"column-reverse",
    // elevation:2,
    // backgroundColor: "red",
    paddingHorizontal:20,
    marginHorizontal:10,
    borderRadius:20,
    borderColor:"black",
   
  },
  keyContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap:"wrap",
    justifyContent: "space-evenly",
    backgroundColor: "white",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginHorizontal: 5,
    marginVertical:10,
    borderRadius: 4,
    height: 55,
    elevation: 8,
    backgroundColor: "#4a4948",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default MainScreen;
