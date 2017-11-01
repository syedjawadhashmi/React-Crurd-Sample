import React from 'react';
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-native-elements';
import  createMeetupValidations  from './validations';
import  renderFieldWithValidations  from './renderField';
import Colors from '../../../constants/colors';
import styles from './style';


const CreateMeetupForm = ({
  createMeetup,
  checkTitle,
  showDateTimePicker,
  handleSubmit,
  invalid,
  submitting,
}) => (
  <View style={styles.container}>
    <Field
      component={renderFieldWithValidations}
      name="title"
      label="Title"
      selectionColor={Colors.redColor}
      containerStyle={styles.item}
    />
    <Field
      component={renderFieldWithValidations}
      name="description"
      label="Description"
      multiline
      selectionColor={Colors.redColor}
      containerStyle={styles.item}
    />
    <View style={styles.item}>
      <Button
        raised
        onPress={showDateTimePicker}
        title={checkTitle}
      />
    </View>
    <View style={styles.buttonCreate}>
      <Button
        backgroundColor={Colors.blackBlueColor}
        title="Create Meetup"
        raised
        disabled={invalid || submitting}
        onPress={handleSubmit(createMeetup)}
      />
    </View>
  </View>
);

export default reduxForm({
  form: 'createMeetup',
  validate: createMeetupValidations,
})(CreateMeetupForm);