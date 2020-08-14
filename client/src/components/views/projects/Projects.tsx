import React from 'react';
import {
  Route,
  Link,
  Switch,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

// =============================================================================
// Types
// ============================================================================
interface MyProjectProps {
  id: number;
  title: string;
  image: string;
  date: string;
  description: string | string[];
  link: string;
  type: 'personal' | 'professional' | 'scholar';
}

interface MyProjectsProps {
  projects: MyProjectProps[];
}

// One project

const TheProject = () => {
  const myProjects: MyProjectProps[] = [
    {
      id: 0,
      title: 'project0',
      image: 'image0',
      date: 'date0',
      description: 'description0',
      link: 'link0',
      type: 'personal',
    },
    {
      id: 1,
      title: 'project1',
      image: 'image1',
      date: 'date1',
      description: 'description1',
      link: 'link1',
      type: 'scholar',
    },
    {
      id: 2,
      title: 'project2',
      image: 'image2',
      date: 'date2',
      description: 'description2',
      link: 'link2',
      type: 'professional',
    },
  ];

  const { projectId } = useParams();
  const projectIdNum: number = +projectId;
  const project: MyProjectProps = myProjects[projectIdNum] || null;

  if (project === null) {
    return (
      <div className='project-container'>
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <div className='project-container'>
      <article>
        <header>
          <h3>
            <a href={project.link}>{project.title}</a>
          </h3>
          <time>{project.date}</time>
        </header>
        <a href={project.link}>
          <img src={project.image} alt={project.title} />
        </a>
        <div>
          <p>{project.description}</p>
        </div>
      </article>
    </div>
  );
};

// All projects

// export const Projects = ({ projects }: MyProjectsProps) => {
export const Projects = () => {
  const myProjects: MyProjectProps[] = [
    {
      id: 0,
      title: 'project0',
      image: 'image0',
      date: 'date0',
      description: 'description0',
      link: 'link0',
      type: 'personal',
    },
    {
      id: 1,
      title: 'project1',
      image: 'image1',
      date: 'date1',
      description: 'description1',
      link: 'link1',
      type: 'scholar',
    },
    {
      id: 2,
      title: 'project2',
      image: 'image2',
      date: 'date2',
      description: 'description2',
      link: 'link2',
      type: 'professional',
    },
  ];

  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        {myProjects.map((project) => (
          <Link key={project.title} to={`${path}/${project.id}`}>
            {project.title}
          </Link>
        ))}
      </Route>

      <Route path={`${path}/:projectId`} component={TheProject} />
    </Switch>
  );
};
