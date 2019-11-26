import shallow from 'enzyme'
import FilterMenu from '.'

describe("Filter Menu", () => {
    it("should render tabs, tab", () => {
        const component = shallow(<FilterMenu />);

        const tab = component.find({id: "searchStyledTabs"});

        const tabs = component.find({id: "searchStyledTab"});

        expect()
    })
})