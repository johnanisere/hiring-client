import React from "react";
import { shallow, configure } from "enzyme";
import Login from "../Login";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
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
      expect(wrapper).toMatchSnapshot();
    });
  });
});
