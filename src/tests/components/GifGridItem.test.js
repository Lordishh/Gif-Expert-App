import React from "react";

import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem />", () => {
  test("debe de mostrar el componente correctamente", () => {
    const title = "Un título";
    const url = "https://localhost/algo.jpg";

    const wrapper = shallow(<GifGridItem url={url} title={title} />);
    console.log(wrapper);
    expect(wrapper).toMatchSnapshot();
  });
});
