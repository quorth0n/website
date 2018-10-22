import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.png'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="minecraft" />
          </span>
          <p>Hi, I'm Liam.</p>
          <p>
            I've kept myself busy over the years. Aside from visual languages
            (Scratch, et al.), I wrote my first program at the age of 10. It was
            a simple address book in Java using the Swing toolkit. It was by no
            means a complicated application, but it gave me enough hands-on
            experience to satisfy my youthful curiosity for some time, and it's
            a feeling that's stuck with me as I pushed on through the rest of my
            projects.
          </p>
          <p>
            While I was still in elementary or early middle school and life was
            rife with time to spend on side projects, I wrote my first{' '}
            <a href="https://github.com/whirish/Dont_Starve_Wiki_Searcher">
              Chrome extension
            </a>
            , built a{' '}
            <a href="https://github.com/whirish/TheMythologyMod">
              Minecraft mod
            </a>{' '}
            (why else would I start with Java?), and wrote a{' '}
            <a href="https://github.com/whirish/VagrantGUI">
              Vagrant GUI control tool
            </a>{' '}
            before a plethora of them came to exist. It was around this time
            when I started what I would consider to be my first large-scale (at
            least by comparison) project,{' '}
            <a href="https://github.com/whirish/Collab.Center">Collab.Center</a>
            , a realtime collaborative coding editor. Sure, it was all PHP
            spaghetti code and the CSS was uglier than a monkey's armpit, but it
            did get me a tour of Firebase HQ (before they were bought by Google,
            heh) and more importantly gave me the experience of working on a
            larger project that was used around the world. I even had a few
            contributions to the repo, which made my 13 year old self nothing
            short of ecstatic.
          </p>
          <p>
            Anyway, I include these projects because they were in a way the last
            of my hobby projects. My later, more serious work is included on the
            appropriately-named{' '}
            <a
              href="#void"
              onClick={() => {
                this.props.onCloseArticle()
                setTimeout(() => this.props.onOpenArticle('work'), 500)
              }}
            >
              Work
            </a>{' '}
            page. Some information about me personally is available on the{' '}
            <a
              href="#void"
              onClick={() => {
                this.props.onCloseArticle()
                setTimeout(() => this.props.onOpenArticle('about'), 500)
              }}
            >
              About
            </a>{' '}
            page, and lastly feel free to{' '}
            <a
              href="#void"
              onClick={() => {
                this.props.onCloseArticle()
                setTimeout(() => this.props.onOpenArticle('contact'), 500)
              }}
            >
              Contact
            </a>{' '}
            me as well.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            For some time, I got involved in mobile app development using
            Apache's Cordova framework. One of the first applications I built
            with this was a{' '}
            <a href="https://github.com/whirish/T905-Library">
              library checkout system
            </a>{' '}
            for my local Boy Scouts troop, which also served as my earliest
            introduction to Bootstrap. I also wrote a{' '}
            <a href="https://github.com/whirish/book-me-now">
              meeting room reservation app
            </a>{' '}
            in a psuedo-internship for Veeva Systems. Lastly, I recieved my
            first taste of local fame with the{' '}
            <a href="https://github.com/whirish/Tri-Valley-Buses">
              Tri-Valley Buses
            </a>{' '}
            app, which tracked the location of buses along their various routes
            with stop times. The data was returned directly from the
            organization's API, which I obtained by reverse engineering their
            website. I was pleasantly suprised when I learned of the coverage
            that it had recieved in local newspapers.
          </p>
          <p>
            Past mobile development, I continued development with Firebase that
            I'd started with Collab.Center with a new project,{' '}
            <a href="https://github.com/whirish/KingdomMaps">KingdomMaps</a>, an
            interactive timeline of the world. The main vision at the time was
            being able to select any date and seeing the historical political
            borders for that time. I was greatly passionate about this project
            due to my love for history, but unfortunately its ambition proved to
            be its downfall. Nevertheless, after taking a year-long break from
            the project to join{' '}
            <a href="https://github.com/whirish/lend">Lend Technologies</a>, I
            found myself getting in touch with others who shared similar ideals.
            From this, <a href="https://github.com/chronoscio/">ChronoScio</a>{' '}
            was born, development for which I continue to this day.
          </p>
          <p>
            Many of these projects (and this website itself!) have used
            technologies such as JS/TS, React, GraphQL, and Bootstrap on the
            frontend. On the backend, I'm quite comfortable with Django,
            Express, and am looking into Rust with the Rocket framework. I've
            also done a lot of GIS work, primarily with Mapbox.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            I like to think I do more than just code. I'm active in my Boy
            Scouts Troop (served as Senior Patrol Leader and am one requirement
            away from Eagle) and love the outdoors. California is a great
            location for hiking, amping, backpacking, and all the rest. I'm also
            very passionate about the humanities; I crave episodes of Dan
            Carlin's history podcast.
          </p>
          <p>
            I tend to value giving back to others and the community as well as
            general open-mindedness. Of course, it's only natural to brush with
            the{' '}
            <a href="https://www.gnu.org/philosophy/free-sw.en.html">
              Free Software movement
            </a>{' '}
            as a result. I think the movement has its merits but isn't something
            to be followed unwaveringly. Nonetheless I generally chose the GPL
            for most of my projects and release the source for as much as I
            reasonably can. I've spent my share of time with the Tri-Valley{' '}
            <a href="https://coderdojo.com/">CoderDojo</a>, especially in its
            early stages, but found myself spending less time as the
            organization grew. I've been involved with clubs at my school, such
            as the Cybersecurity club and the Computer Science Association, to
            indulge in the pleasure of teaching others, a persistent challenge
            in the constantly-evolving technical climate of today.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form
            method="post"
            action="https://formspree.io/lpoflynn@protonmail.ch"
          >
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://github.com/whirish"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/liam-oflynn/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-linkedin-square"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:lpoflynn@protonmail.ch"
                className="icon fa-envelope-o"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
