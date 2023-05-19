import { useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Toys from './Toys'

import 'react-tabs/style/react-tabs.css'

const ToyContainer = () => {
  const [queryCategory, setQueryCategory] = useState(null)
  const tabClasses = {
    inactive:
      'btn btn-outline-accent border-2 border-gray-700 text-gray-700 lg:px-10 hover:bg-gray-800 hover:text-white',
    active: 'btn-accent text-white'
  }
  return (
    <>
      <Tabs>
        <TabList className="flex flex-col lg:flex-row justify-center gap-2">
          <Tab
            className={tabClasses.inactive}
            selectedClassName={tabClasses.active}
            onClick={() => setQueryCategory(null)}
          >
            Recommend
          </Tab>
          <Tab
            className={tabClasses.inactive}
            selectedClassName={tabClasses.active}
            onClick={() => setQueryCategory('avengers')}
          >
            Avengers
          </Tab>
          <Tab
            className={tabClasses.inactive}
            selectedClassName={tabClasses.active}
            onClick={() => setQueryCategory('Justice League')}
          >
            Justice League
          </Tab>
          <Tab
            className={tabClasses.inactive}
            selectedClassName={tabClasses.active}
            onClick={() => setQueryCategory('Titans')}
          >
            Titans
          </Tab>
        </TabList>

        <TabPanel>
          <Toys queryCategory={queryCategory} />
        </TabPanel>
        <TabPanel>
          <Toys queryCategory={queryCategory} />
        </TabPanel>
        <TabPanel>
          <Toys queryCategory={queryCategory} />
        </TabPanel>
        <TabPanel>
          <Toys queryCategory={queryCategory} />
        </TabPanel>
      </Tabs>
    </>
  )
}

export default ToyContainer
