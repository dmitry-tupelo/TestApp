import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "./utils/constants";

export const globalStyles = StyleSheet.create({
    keyboardAwareWrapper: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    container: {
      paddingHorizontal: 35,
      paddingVertical: 20,
    },
    title: {
      fontSize: 48,
      marginBottom: 10,
      letterSpacing: -2,
      fontFamily: FONTS.SEMI_BOLD,
    },
    paragraph: {
      fontSize: 16,
      lineHeight: 22,
      fontFamily: FONTS.REGULAR,
      marginBottom: 10,
    },
    image: {
      marginVertical: 20,
    },
    formWrap: {
      marginVertical: 10,
    },
    inputWrap: {
      marginBottom: 15,
    },
    input: {
      paddingVertical: 12,
      paddingHorizontal: 18,
      borderWidth: 1,
      borderColor: COLORS.GRAY,
      backgroundColor: COLORS.WHITE,
      borderRadius: 12,
      fontSize: 16,
      lineHeight: 22,
      fontFamily: FONTS.REGULAR,
    },
    inputError: {
      color: COLORS.RED,
      marginTop: 5
    },
  });