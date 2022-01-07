import React from "react";

import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem />", () => {
  const title = "Un título";
  const url = "https://localhost/algo.jpg";
  const wrapper = shallow(<GifGridItem url={url} title={title} />);

  test("debe de mostrar el componente correctamente", () => {
    console.log(wrapper);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de tener un párrafo con el título", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("debe tener la imagen igual al url y alt de los props", () => {
    const img = wrapper.find("img");
    // Los img vienen con propiedades como "src y alt", la mismas se podrían acceder como img.props()
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("debe de tener animate__fadeIn", () => {
    const div = wrapper.find("div");
    const className = div.prop("className");

    expect(className.includes("animate__bounce")).toBe(true);
  });
});
