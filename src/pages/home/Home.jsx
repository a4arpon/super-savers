import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import useTitle from '../../hooks/useTitle'
import Hero from './Hero'
import Toys from './Toys'

const Home = () => {
  useTitle('Home | SuperSaver')
  const tabInActive =
    'btn btn-outline-accent border-2 border-gray-700 text-gray-700 lg:px-10 hover:bg-gray-800 hover:text-white'
  const tabActive = 'btn btn-accent text-white lg:px-10'
  return (
    <div className="container mx-auto">
      <Hero />
      <div className="mt-20 px-5">
        <Tabs>
          <TabList className="flex flex-col lg:flex-row justify-center gap-2">
            <Tab className={tabActive}>Recommend</Tab>
            <Tab className={tabInActive}>Avengers</Tab>
            <Tab className={tabInActive}>Justice League</Tab>
            <Tab className={tabInActive}>Titans</Tab>
          </TabList>

          <TabPanel>
            <Toys ins="This is 1" />
          </TabPanel>
          <TabPanel>
            <Toys ins="This is 2" />
          </TabPanel>
          <TabPanel>
            <Toys ins="This is 3" />
          </TabPanel>
          <TabPanel>
            <Toys ins="This is 4" />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default Home
