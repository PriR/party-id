import AsyncStorage from '@react-native-community/async-storage';

const getStringValue = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

const getObjectValue = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

const setStringValue = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
};

const setObjectValue = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const removeItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // clear error
  }

  console.log('Done.');
};

export {
  getStringValue,
  getObjectValue,
  setStringValue,
  setObjectValue,
  removeItem,
};
