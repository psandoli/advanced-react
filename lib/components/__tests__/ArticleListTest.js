import React from "react"
import ArticleList from "../ArticleList"
import Article from "../Article"

import Adapter from "enzyme-adapter-react-16"
import Enzyme, { shallow } from "enzyme"

describe("ArticleList", () => {
  const testProps = {
    articles: { a: { id: "a" }, b: { id: "b" } },
  }

  Article.propTypes = {}

  it("renders correctly", () => {
    Enzyme.configure({ adapter: new Adapter() })
    const wrapper = shallow(<ArticleList {...testProps} />)

    expect(wrapper.find("Article").length).toBe(2)

    expect(wrapper).toMatchSnapshot()
  })
})
