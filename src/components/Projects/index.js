import React from 'react'
import Project from './Project'
import { useStaticQuery, graphql } from 'gatsby'
import styles from '../../css/courses.module.css'
import Title from '../Title'

const query = graphql`
    {
        allStrapiProject(sort: { fields: published, order: DESC }) {
            nodes {
                title
                size
                published
                id
                url
                image {
                    childImageSharp {
                        fluid(maxWidth: 600) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

const Projects = () => {
    const {
        allStrapiProject: { nodes: projects },
    } = useStaticQuery(query)
    return (
        <section className={styles.courses}>
            <Title title="All" subtitle="Projects" />
            <div className={styles.center}>
                {projects.map(item => {
                    return <Project key={item.id} {...item} />
                })}
            </div>
        </section>
    )
}

export default Projects
