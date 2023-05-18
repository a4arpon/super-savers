import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import useTitle from '../../hooks/useTitle'
import Hero from './Hero'
import Toys from './Toys'

const Home = () => {
  useTitle('Home | SuperSaver')
  return (
    <div className="container mx-auto">
      <Hero />
      <div className="mt-20 px-5">
        <Tabs>
          <TabList className="flex justify-center gap-2">
            <Tab className="btn btn-accent text-white lg:px-10">Recommend</Tab>
            <Tab className="btn btn-accent text-white lg:px-10">Avengers</Tab>
            <Tab className="btn btn-accent text-white lg:px-10">
              Justice League
            </Tab>
            <Tab className="btn btn-accent text-white lg:px-10">Titans</Tab>
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
