import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainBlock: {
    width: 234,
    height: 236,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderSquare: {
    width: 210,
    height: 210,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstRow: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  titleBlock: {
    width: 25,
    height: 18,
    backgroundColor: 'black',
  },
  titleBlock1: {
    width: 15,
    height: 25,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  character: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  whiteBlock: {
    width: 25,
    height: 25,
    backgroundColor: 'white',
  },
  blackBlock: {
    width: 25,
    height: 25,
    backgroundColor: 'black',
  },
  row: {
    flexDirection: 'row',
  },
  pieces: {
    width: 18,
    height: 18,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'black',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
