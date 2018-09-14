import React from 'react';
import { Header } from 'semantic-ui-react';

const Title = (props) => {
  return (
    <div>
      <Header as='h1' textAlign='center' color='blue'>
        <Header.Content className='header'>
        {props.title}
          <Header.Subheader>{props.subTitle}</Header.Subheader>
        </Header.Content>
     </Header>
    </div>
  );
}

export default Title;