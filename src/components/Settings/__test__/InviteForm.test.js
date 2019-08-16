import React from "react";
import { Provider } from "react-redux";
import { shallow, configure } from "enzyme";
import InviteForm from "../InviteForm";
import configureStore from "redux-mock-store";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

// React 16 Enzyme adapter
configure({ adapter: new Adapter() });
const mockStore = configureStore();
const store = mockStore();

describe("InviteForm component", () => {
  it("renders", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <InviteForm />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
