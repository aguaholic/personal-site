import React from 'react'
import Project from '../Projects/Project'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styles from '../../css/courses.module.css'
import Title from '../Title'

const query = graphql`
    {
        allStrapiProject(sort: { fields: published, order: DESC }, limit: 3) {
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

const LatestProjects = () => {
    const {
        allStrapiProject: { nodes: projects },
    } = useStaticQuery(query)
    return (
        <section className={styles.courses}>
            <Title title="Top" subtitle="Projects" />
            <div className={styles.center}>
                {projects.map(item => {
                    return <Project key={item.id} {...item} />
                })}
            </div>
            <Link to="/projects" className="btn-primary">
                all projects
            </Link>
        </section>
    )
}

export default LatestProjects
