import React from "react"
import ArticleList from "../ArticleList"

import Adapter from "enzyme-adapter-react-16"
import Enzyme, { shallow } from "enzyme"

describe("ArticleList", () => {
  const testProps = {
    articles: { a: { id: "a" }, b: { id: "b" } },
  }

  it("renders correctly", () => {
    Enzyme.configure({ adapter: new Adapter() })
    const wrapper = shallow(<ArticleList {...testProps} />)

    expect(wrapper.find("ArticleContainer").length).toBe(2)

    expect(wrapper).toMatchSnapshot()
  })
})
