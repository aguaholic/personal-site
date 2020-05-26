import React from 'react'
import Layout from '../components/layout'
import HomeBanner from '../components/Home/HomeBanner'
import LatestProjects from '../components/Home/LatestProjects'

const IndexPage = () => (
    <Layout>
        <HomeBanner />
        <LatestProjects />
    </Layout>
)

export default IndexPage
