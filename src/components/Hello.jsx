// eslint-disable-next-line import/no-extraneous-dependencies
import { string } from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

function Hello(props) {
  const { children } = props;
  return (
    <View>
      <Text style={styles.text}>
        {`Hello ${children}`}
      </Text>
    </View>
  );
}

Hello.propTypes = {
  children: string.isRequired,
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
});

export default Hello;
