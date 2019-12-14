import React from 'react';
import useSignUpForm from './InputHooks';

import { Form, Input, Button } from 'antd';

const Skills = () => {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm({
    skills: '',
  });

  return (
    <div>
      Skills
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Item label="Describe Your Skills">
          <Input
            placeholder="Team player, ..."
            name="skills"
            onChange={handleInputChange}
            value={inputs.skills}
            required
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary submit">
            <a href="../profile">Next</a>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Skills;
