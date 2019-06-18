import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import validate from './validate';

import Multiselect from 'react-widgets/lib/Multiselect'
import 'react-widgets/dist/css/react-widgets.css'


const renderTextField = (
  { input, label, meta: { touched, error }, ...custom },
) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);


const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

const renderSelectField = (
  { input, label, meta: { touched, error }, children, ...custom },
) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
);




const MaterialUiForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="Name"
          component={renderTextField}
          label="Name"
        />
      </div>
      <div>
        <Field
          name="number"
          component={renderTextField}
          label="Mobile Number"
        />
      </div>
     
      <div>
        <Field name="email" component={renderTextField} label="Email" />
      </div>
      <div>
      <Field
        name="age"
        type="number"
        component={renderTextField}
        label="Age"
      /></div>
      <div><label>Sex</label>
        <Field name="sex" component={renderRadioGroup}>
          <RadioButton value="male" label="male" />
          <RadioButton value="female" label="female" />
        </Field>
      </div>
     
      <div>
        <Field
          name="Category"
          component={renderSelectField}
          label="Category"
        >
          <MenuItem value="id 1" primaryText="Category 1" />
          <MenuItem value="id 2" primaryText="Category 2" />
          <MenuItem value="id 3" primaryText="Category 3" />
        </Field>
      </div>
      
      <div><label>Hobbies</label>
        <Field name="hobbies" component={renderRadioGroup}>
          <RadioButton value="A" label="Cycling" />
          <RadioButton value="B" label="Singing" />
          <RadioButton value="C" label="Reading" />
        </Field>
      </div>
      
      <div>
        <label>Multi select component</label>
        <Field
          name="multi"
          component={Multiselect}
          defaultValue={[]}
          onBlur={() => props.onBlur()}
          data={[ 'A', 'B', 'C' ]}/>
      </div>
      <div>
        <Field
          name="notes"
          component={renderTextField}
          label="Notes"
          multiLine={true}
          rows={1}
        />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
         Reset
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'MaterialUiForm', // a unique identifier for this form
  validate,
})(MaterialUiForm);
