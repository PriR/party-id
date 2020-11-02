import AsyncStorage from '@react-native-community/async-storage';

const setStringValue = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
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

const getStringValue = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    console.log('value: ', value);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
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
