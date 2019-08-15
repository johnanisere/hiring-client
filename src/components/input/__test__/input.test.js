import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Input from "../index";

describe("<Input />", () => {
  describe("render()", () => {
    test("renders the component", () => {
      const onChange = jest.fn();

      const wrapper = shallow(
        <Input
          validate={{
            regexp: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message:
              "Password must contain at least 8 characters, 1 letter, and 1 number"
          }}
          placeholder="dummyPlaceholder"
          value="dummyValue"
          name="dummyName"
          type="dummyType"
          onChange={onChange}
        />
      );
      const component = wrapper.dive();

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
