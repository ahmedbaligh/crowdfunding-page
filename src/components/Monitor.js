import React from 'react';
import { Container, Image, Button, Progress } from 'semantic-ui-react';

import '../stylesheets/Monitor.scss';
import { mastercraftLogo, bookmarkIcon } from '../assets';
import { formatCurrency, formatDecimal } from '../utils/helps';
import Stand from './Stand';

const Monitor = ({ data: { backed, backers, daysLeft, stands } }) => {
  const backProject = () => console.log('Back project!');

  return (
    <Container as="main">
      <div className="monitor-wrapper">
        <header className="monitor-header wrap">
          <Image className="monitor-logo" src={mastercraftLogo} />

          <h1>Mastercraft Bamboo Monitor Riser</h1>
          <p>
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>

          <div className="actions">
            <Button className="back" onClick={backProject}>
              Back this project
            </Button>
            <Button className="bookmark">
              <Image className="bookmark-icon" src={bookmarkIcon} />
              <span className="bookmark-text">Bookmark</span>
            </Button>
          </div>
        </header>

        <section className="watcher wrap">
          <div className="stats">
            <div className="stat backed">
              <span className="num">{formatCurrency(backed.current)} </span>
              <span className="description">
                of {formatCurrency(backed.total)} backed
              </span>
            </div>
            <div className="stat backers">
              <span className="num">{formatDecimal(backers)} </span>
              <span className="description">total backers</span>
            </div>
            <div className="stat days-left">
              <span className="num">{daysLeft} </span>
              <span className="description">days left</span>
            </div>
          </div>

          <Progress
            className="backed-progress"
            size="small"
            value={backed.current}
            total={backed.total}
          />
        </section>

        <section className="project wrap">
          <h2>About this project</h2>
          <p className="about">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p>
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>

          <div className="stands">
            {stands.map(stand => (
              <Stand key={stand.name} stand={stand} backProject={backProject} />
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
};

export default Monitor;
