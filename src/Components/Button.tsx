import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from '../utils/constants';
import LinearGradient from 'react-native-linear-gradient';

interface IButtonProps {
  title: string;
  onPress: any;
}

const Button = (props: IButtonProps) => {
  const {title, onPress} = props;

  return (
    <LinearGradient

    start={{x: 0.15, y: 0}}
    end={{x: 0, y: 1}}
      angle={15}
      colors={['#0098EA', '#0087DB', '#0068BF']}
      style={styles.linearGradient}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
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
