import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from '../utils/constants';

interface IButtonProps {
  title: string;
  onPress: any;
}

const Button = (props: IButtonProps) => {
  const {title, onPress} = props;

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    borderRadius: 12,
    maxWidth: 97,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 22,
    color: COLORS.WHITE,
    textAlign: 'center',
    fontFamily: FONTS.BOLD,
  },
});

export default Button;
