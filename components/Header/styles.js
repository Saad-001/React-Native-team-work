styles.js

Type
Javascript
Size
463 bytes
Storage used
463 bytes
Location
anikvai
Owner
Sa'ad
Modified
2:09 PM by Sa'ad
Opened
4:24 PM by me
Created
4:20 PM
No description
Viewers can download
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  logo: {
    width: 130,
    height: 25,
    resizeMode: 'contain',
  },
  menu: {
    width: 25,
    height: 35,
    resizeMode: 'contain',
  }
});

export default styles;