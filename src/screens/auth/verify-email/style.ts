import {StyleSheet} from 'react-native';
import {HEIGHT, WIDTH} from '../../../constants/size';
import {
  CHECK_GREY,
  PRIMARY_COLOR,
  PRIMARY_COLOR2,
  TEXT_GREY2,
  WHITE,
} from '../../../constants/color';
import {outfit, outfit_medium} from '../../../constants/font';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: WIDTH,
    height: HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WHITE,
  },
  viewContainer: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: WHITE,
    height: 498,
  },
  view1: {
    width: 438,
    alignSelf: 'center',
    position: 'relative',
    flex: 1,
    height: '100%',
  },
  formContainer: {
    flex: 1,
    marginTop: 24,
  },
  inputContainer: {
    gap: 16,
  },
  button: {
    alignSelf: 'flex-end',
  },
  text1: {
    fontFamily: outfit,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
    color: PRIMARY_COLOR2,
  },
  headerStyleText: {
    textAlign: 'center',
    color: CHECK_GREY,
    fontSize: 20,
    fontFamily: outfit,
    lineHeight: 54,
    marginTop: 16,
  },
  bottomButton: {
    width: '100%',
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 27,
    fontFamily: outfit_medium,
    color: TEXT_GREY2,
  },
  currentUser: {
    color: PRIMARY_COLOR,
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'center',
    fontFamily: outfit,
  },
});
