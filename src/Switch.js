import React, { Component } from 'react'
import { Switch as RNSwitch, Text, View } from 'react-native'
import { withFormikControl } from 'react-native-formik'

class Switch extends Component {
  render() {
    const { error, value, setFieldValue, label } = this.props;
    return (
      <View>
        <RNSwitch value={value} ios_backgroundColor={error ? "red" : "transparent"} onValueChange={setFieldValue} />
        <Text>{label}</Text>
      </View>
    );
  }
}

export default withFormikControl(Switch);