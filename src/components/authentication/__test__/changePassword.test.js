import React from "react";
import { shallow, configure } from "enzyme";
import ChangePassword from "../ChangePassword";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

// React 16 Enzyme adapter
configure({ adapter: new Adapter() });
const mockStore = configureStore();
const store = mockStore();

describe("<ChangePassword />", () => {
  describe("render()", () => {
    test("renders the component", () => {
      const wrapper = shallow(
        <Provider store={store}>
          <ChangePassword />
        </Provider>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
