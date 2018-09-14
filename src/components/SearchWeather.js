import React from 'react';
import { Button, Form, Label } from 'semantic-ui-react';

const SearchWeather = (props) => {
  return (
    <div className='form'>
      <Form onSubmit={props.onSubmit}>
        <Form.Field>
          {props.error && <Label pointing='below'>Please enter a value</Label>}
          <Form.Input label='City name' placeholder='City name' width={6}  onChange={props.city}  name='city' />
          </Form.Field>
          <Form.Field>
          {props.error && <Label pointing='below'>Please enter a value</Label>}
          <Form.Input label='Country code' placeholder='Country code' width={6} onChange={props.country} name='country'/>
          </Form.Field>
        <Button type='submit' positive>Submit</Button>
     </Form>
    </div>
  );
}

export default SearchWeather;