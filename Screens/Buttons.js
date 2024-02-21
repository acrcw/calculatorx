import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };
var calculate = function (s) {
  let stack = [];
  let num = "";
  let sign = null;
  // we loop till the full length of the array to account for last sign
  for (let i = 0; i <= s.length; i++) {
    const curr = s[i];
    //handle space
    if (curr === " ") continue;
    //if char is a number
    if (!isNaN(curr)) num += curr;
    //if we have a  sign + - / *
    if (isNaN(curr)) {
      num = Number(num);
      switch (sign) {
        case "+":
        case null:
          //we push the initial number into the stack
          stack.push(num);
          break;
        case "-":
          //we push any values after the subtraction sign as negative
          stack.push(-num);
          break;
        case "*":
          //we pop the stack then multiply and push back
          stack.push(stack.pop() * num);
          break;
        case "/":
          //we pop the stack then devide and push back
          stack.push(parseInt(stack.pop() / num, 10));
          break;
      }
      // sign becomes current sign
      sign = curr;
      // we reset num
      num = "";
    }
  }
  //we reduce the array adding positive and negative numbers
  return stack.reduce((a, b) => {
    return a + b;
  }, 0);
};
const Buttons = ({ data, setdata, op, setoperator, title }) => {
  const handlePress = (text) => {
    if (text >= 0 && text <= 9) {
      if (text == "0") {
        if (data != "0") {
          setdata(data + text);
        } else {
          setdata(text);
        }
      } else {
        if (data == "0") {
          setdata(text);
        } else setdata(data + text);
      }
    } else if (text === "AC") {
      setdata("0");
      setoperator(0);
    } else if (text == "D") {
      let val = Math.floor(Number(data) / 10);
      if (val == 0 || val == "0") {
        setdata("0");
      } else setdata(val);
    } else if (text == "*" || text == "/" || text == "-" || text == "+") {
      if (data == "0") {
        return;
      } else if (data != "0") {
          if (op > 0 && data!=undefined &&
            data.charAt(data.length - 1) == "*" ||
            data.charAt(data.length - 1) == "/" ||
            data.charAt(data.length - 1) == "-" ||
            data.charAt(data.length - 1) == "+"
          ) 
          {
            setdata(data.substring(0, data.length - 1) + text);
            return;
          }

          setdata(data + text);
          setoperator(op + 1);
        }
      
    } else if (text === "=") {
      
        setdata(calculate(data));
        setoperator(0);
    } else if (text == "%" && op == 0 && data != "0") {
      setdata(Number(data) / 100);
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => handlePress(title)}
      style={styles.appButtonContainer}
    >
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  appButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    // paddingVertical: 12,
    // paddingHorizontal: 32,
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 4,
    height: "20%",
    elevation: 8,
    backgroundColor: "#4a4948",
  },
  appButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
export default Buttons;
