import React from "react";
import { shallow } from "enzyme";
import Login from "../Login";
import toJson from "enzyme-to-json";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
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
      const component = wrapper.dive();

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
