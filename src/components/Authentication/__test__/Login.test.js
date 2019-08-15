import React from "react";
import { shallow } from "enzyme";
import Login from "../Login";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import toJson from "enzyme-to-json";

const mockStore = configureStore();
const store = mockStore();

describe("<Login />", () => {
  describe("render()", () => {
    test("renders the component", () => {
      const wrapper = shallow(
        <Provider store={store}>
          <Login />
        </Provider>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
