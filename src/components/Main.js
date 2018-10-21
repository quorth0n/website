import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
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
            <img src={pic01} alt="" />
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
            appropriately-named <a href="TODO fix">Work</a> page. Some
            information about me personally is available on the{' '}
            <a href="TODO fix">About</a> page, and lastly feel free to{' '}
            <a href="TODO fix">Contact</a> me as well.
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
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
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
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
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
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/liam-oflynn/"
                target="_blank"
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
