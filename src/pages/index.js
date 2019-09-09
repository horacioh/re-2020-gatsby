import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Caroussel from 'components/caroussel'
import Meta from 'components/meta'
import Layout from 'components/layout'

const BlogIndex = ({ data, location }) => {
  const posts = get(data, 'remark.posts')
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <section class="react_section">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="react_text">
                <h2>The Original React Conference in Europe</h2>
                <h1>ReactEurope</h1>
                <div class="react_text_content">
                  <h3>
                    May 14-15th, 2020 <span>(conference)</span>
                  </h3>
                  <h3>
                    May 12-13th, 2020 <span>(workshops)</span>
                  </h3>
                  <h4>Paris, France</h4>
                </div>
              </div>
              <div class="react_btns">
                <a href="#conference" class="learn_more">
                  Learn More
                </a>
                <a href="#tickets" class="book_now">
                  Tickets
                </a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="react_image">
                <img src="images/banner-image.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="conference" id="conference">
        <div class="container">
          <div class="headings">
            <img src="images/react-europe-plain-round.png" alt="" />
            <h2>Conference Events</h2>
            <p
              style={{
                width: '100',
                margin: 0,
                'max-width': '100%',
                'text-align': 'justify',
              }}
            >
              ReactEurope is coming back on May 2020 with a new venue this year
              to provide more comfort and a whole new experience.
              <strong style={{ 'text-decoration': 'underline' }}>
                We've grown a lot these past 5 years along with the React
                community and our new venue will be more spacious and give
                people more room to socialize, learn, relax and have fun
              </strong>
              . We will bring you the best and most passionate people from the
              very <strong>core teams</strong> to the coolest people from the
              community we love.
            </p>
            <p
              style={{
                width: '100',
                margin: 0,
                'max-width': '100%',
                'text-align': 'justify',
              }}
            >
              After changing the way we think about state management in
              JavaScript applications, the way we write native mobile apps with
              React Native, how we interact with remote data with GraphQL or
              even how we manage CSS, the React community keeps innovating and
              its ecosystem growing.
            </p>
            <p
              style={{
                width: '100',
                margin: 0,
                'max-width': '100%',
                'text-align': 'justify',
              }}
            >
              At this conference, you will learn how new projects such as
              ReasonML will bring web and mobile React Native apps to the next
              level and how projects such as React Native Web, React Primitive
              and Expo make it easy to write, deploy and share code on all
              platforms quickly. The conference aims to give talks that inspire
              and explore new futuristic ideas dealing with all the techs we
              enjoy from the React ecosystem such as{' '}
              <strong>
                React.js, React Native, GraphQL, Relay, Universal apps,
                ReasonML, Webpack, inline CSS and more
              </strong>
              .
            </p>
            <p
              style={{
                width: '100',
                margin: 0,
                'max-width': '100%',
                'text-align': 'justify',
              }}
            >
              ReactEurope is also a great occasion to socialize, meet new people
              and old friends, hack together, taste delicious food and have fun
              in the beautiful city of Paris.
            </p>
            <p
              style={{
                width: '100',
                margin: 0,
                'max-width': '100%',
                'text-align': 'justify',
              }}
            >
              <strong>
                Join us at ReactEurope Conf to shape the future of client-side,
                mobile and universal applications!
              </strong>
            </p>
          </div>
        </div>
        <div class="conference_slider">
          <Caroussel />
          <div class="slick-carousel d-none">
            <div>
              <a
                href="#"
                data-toggle="modal"
                data-target="#event_popup"
                data-pic1="images/workshop1.png"
                data-pic2="images/Event_popup2.png"
                data-pic3="images/Event_popup3.png"
                class="event-popup-link"
                data-date="12th-13th"
                data-description="2 days to learn from the best ranging from topics such as React.js, SSR, hooks, suspense, graphql, TypeScript, React Native, Animations, next.js amplify and more! 2 days to learn from the best ranging from topics such as React.js, SSR, hooks, suspense, graphql, TypeScript, React Native, Animations, next.js amplify and more!"
                data-title="2-DAY WORKSHOPS"
                data-hours="8:45am to 5:30pm"
              >
                <div class="slider_box">
                  <h3>12th-13th</h3>
                  <h4>MAY</h4>
                  <img src="images/slider1.png" alt="" />
                  <h5>2-DAY WORKSHOPS</h5>
                  <h6>Palace of Paris-Est Congress</h6>
                  <p>8:45am to 5:30pm</p>
                </div>
              </a>
            </div>
            <div>
              <a
                href="#"
                class="event-popup-link"
                data-toggle="modal"
                data-target="#event_popup"
                data-pic1="images/bar1.jpeg"
                data-pic2="images/bar2.png"
                data-pic3="images/bar3.png"
                data-date="13th"
                data-description="A great occasion for people to meet, socialize and get to know each other before the conference. It will offer both alcoholic and non alcoholic drinks as well as food. The party will start at 18:45 Paris time just after our workshops. Location to be announced soon."
                data-title="BAR NIGHT"
                data-hours="6:45pm"
              >
                <div class="slider_box">
                  <h3>13th</h3>
                  <h4>MAY</h4>
                  <img src="images/slider2.png" alt="" />
                  <h5>BAR NIGHT</h5>
                  <h6 class="">More details coming soon</h6>
                  <p>6:45pm</p>
                </div>
              </a>
            </div>
            <div>
              <a
                href="#"
                data-toggle="modal"
                data-target="#event_popup"
                data-pic1="images/Event_popup1.png"
                data-pic2="images/conf2.jpg"
                data-pic3="images/conf3.jpg"
                class="event-popup-link"
                data-date="14th-15th"
                data-description="At this conference, you will learn how new projects such as ReasonML will bring web and mobile React Native apps to the next level and how projects such as React Native Web, React Primitive and Expo make it easy to write, deploy and share code on all platforms quickly. The conference aims to give talks that inspire and explore new futuristic ideas dealing with all the techs we enjoy from the React ecosystem such as React.js, React Native, GraphQL, Relay, Universal apps, ReasonML, Webpack, inline CSS and more."
                data-title="2-DAY CONFERENCE"
                data-hours="8:30am to 7:00pm"
              >
                <div class="slider_box">
                  <h3>14th-15th</h3>
                  <h4>MAY</h4>
                  <img src="images/slider3.png" alt="" />
                  <h5>2-DAY CONFERENCE</h5>
                  <h6>Palace of Paris-Est Congress</h6>
                  <p> 8:30am to 7:00pm</p>
                </div>
              </a>
            </div>
            <div>
              <a
                href="#"
                data-toggle="modal"
                data-target="#event_popup"
                data-pic1="images/food1.jpg"
                data-pic2="images/food2.png"
                data-pic3="images/food3.jpg?x=41"
                class="event-popup-link"
                data-date="12th-15th"
                data-description="During the whole week you will be enjoying quality buffets of delicious French food and more.
                Our French breakfasts include croissants but also scrambled eggs with bacon, fruits, cheese, yogurt and more.
                Our lunches include delicious French quiches, salades, smoked salmons, French cheese selection, charcuterie, sandwiches, mini-burgers with meat or veggies, sushi, belgium-style waffles, crepes, macarons, French pasteries and more. We also offer vegan and gluten free options! We also have a dinner on the 14th and a drinkup on the 15th.
                Last but not least, water and coffee will be flowing all day long. French wine and beer will also be available."
                data-title="Delicious food"
                data-hours="all workshops and conf days"
              >
                <div class="slider_box">
                  <h3>12th-15th</h3>
                  <h4>MAY</h4>
                  <img src="images/food.png" alt="" />
                  <h5>Delicious food buffets</h5>
                  <h6>Palace of Paris-Est Congress</h6>
                  <p> During conf &amp; workshop days</p>
                </div>
              </a>
            </div>
            <div>
              <a
                href="#"
                data-toggle="modal"
                data-target="#event_popup"
                data-pic1="images/Event_popup1.png"
                data-pic2="images/conf2.jpg"
                data-pic3="images/conf3.jpg"
                class="event-popup-link"
                data-date="14th-15th"
                data-description="Lightning talks are a great occasion to discover new ideas or projects in a short amount of time. Many of our earlier lightning talks speakers turned into great member of the community including Sunil Pai now part of the React core team or Brandon Dail now on the FE at Facebook."
                data-title="2-DAY CONFERENCE"
                data-hours="8:30am to 7:00pm"
              >
                <div class="slider_box">
                  <h3>14th-15th</h3>
                  <h4>MAY</h4>
                  <img src="images/lightnings.png" alt="" />
                  <h5>Lightning talks</h5>
                  <h6>Palace of Paris-Est Congress</h6>
                  <p> During conference days</p>
                </div>
              </a>
            </div>
            <div>
              <div class="slider_box">
                <h3>16th</h3>
                <h4>MAY</h4>
                <img src="images/hackathon.png" alt="" />
                <h5>Hackathon</h5>
                <h6>More details coming soon</h6>
                <p> 9:00am to 5:00pm</p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="event_popup" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-5">
                    <div class="event_popup_content">
                      <h3 id="event-date-popup">12th-13th</h3>
                      <h4>MAY</h4>
                      <h5 id="event-title-popup">2-DAY WORKSHOPS</h5>
                      <h6>
                        {' '}
                        <span id="event-hours-popup">8:30am to 7:00pm</span>
                      </h6>
                      <p id="event-description-popup">
                        2 days to learn from the best ranging from topics such
                        as React.js, SSR, hooks, suspense, graphql, TypeScript,
                        React Native, Animations, next.js amplify and more! 2
                        days to learn from the best ranging from topics such as
                        React.js, SSR, hooks, suspense, graphql, TypeScript,
                        React Native, Animations, next.js amplify and more!
                      </p>
                    </div>
                  </div>
                  <div class="col-md-7">
                    <div class="event_popup_images">
                      <ul>
                        <li>
                          <img
                            id="event-pic1-popup"
                            src="images/workshop-big.jpg"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            id="event-pic2-popup"
                            src="images/Event_popup2.png"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            id="event-pic3-popup"
                            src="images/Event_popup3.png"
                            alt=""
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="hackathon_popup" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-5">
                    <div class="event_popup_content">
                      <h3>12th-13th</h3>
                      <h4>MAY</h4>
                      <h5>2-DAY CONFERENCE</h5>
                      <h6>
                        {' '}
                        <span>8:30am to 7:00pm</span>
                      </h6>
                      <p>
                        2 days to learn from the best ranging from topics such
                        as React.js, SSR, hooks, suspense, graphql, TypeScript,
                        React Native, Animations, next.js amplify and more! 2
                        days to learn from the best ranging from topics such as
                        React.js, SSR, hooks, suspense, graphql, TypeScript,
                        React Native, Animations, next.js amplify and more!
                      </p>

                      <a href="#tickets">Get Your Ticket</a>
                    </div>
                  </div>
                  <div class="col-md-7">
                    <div class="event_popup_images">
                      <ul>
                        <li>
                          <img src="images/Event_popup1.png" alt="" />
                        </li>
                        <li>
                          <img src="images/Event_popup2.png" alt="" />
                        </li>
                        <li>
                          <img src="images/Event_popup3.png" alt="" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="lightnings_popup" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-5">
                    <div class="event_popup_content">
                      <h3>12th-13th</h3>
                      <h4>MAY</h4>
                      <h5>2-DAY CONFERENCE</h5>
                      <h6>
                        {' '}
                        <span>8:30am to 7:00pm</span>
                      </h6>
                      <p>
                        2 days to learn from the best ranging from topics such
                        as React.js, SSR, hooks, suspense, graphql, TypeScript,
                        React Native, Animations, next.js amplify and more! 2
                        days to learn from the best ranging from topics such as
                        React.js, SSR, hooks, suspense, graphql, TypeScript,
                        React Native, Animations, next.js amplify and more!
                      </p>

                      <a href="#tickets">Get Your Ticket</a>
                    </div>
                  </div>
                  <div class="col-md-7">
                    <div class="event_popup_images">
                      <ul>
                        <li>
                          <img src="images/Event_popup1.png" alt="" />
                        </li>
                        <li>
                          <img src="images/Event_popup2.png" alt="" />
                        </li>
                        <li>
                          <img src="images/Event_popup3.png" alt="" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="food_popup" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-5">
                    <div class="event_popup_content">
                      <h3>12th-13th</h3>
                      <h4>MAY</h4>
                      <h5>2-DAY CONFERENCE</h5>
                      <h6>
                        {' '}
                        <span>8:30am to 7:00pm</span>
                      </h6>
                      <p>
                        2 days to learn from the best ranging from topics such
                        as React.js, SSR, hooks, suspense, graphql, TypeScript,
                        React Native, Animations, next.js amplify and more! 2
                        days to learn from the best ranging from topics such as
                        React.js, SSR, hooks, suspense, graphql, TypeScript,
                        React Native, Animations, next.js amplify and more!
                      </p>

                      <a href="#tickets">Get Your Ticket</a>
                    </div>
                  </div>
                  <div class="col-md-7">
                    <div class="event_popup_images">
                      <ul>
                        <li>
                          <img src="images/Event_popup1.png" alt="" />
                        </li>
                        <li>
                          <img src="images/Event_popup2.png" alt="" />
                        </li>
                        <li>
                          <img src="images/Event_popup3.png" alt="" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="conf_popup" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-5">
                    <div class="event_popup_content">
                      <h3>12th-13th</h3>
                      <h4>MAY</h4>
                      <h5>2-DAY CONFERENCE</h5>
                      <h6>
                        {' '}
                        <span>8:30am to 7:00pm</span>
                      </h6>
                      <p>
                        2 days to learn from the best ranging from topics such
                        as React.js, SSR, hooks, suspense, graphql, TypeScript,
                        React Native, Animations, next.js amplify and more! 2
                        days to learn from the best ranging from topics such as
                        React.js, SSR, hooks, suspense, graphql, TypeScript,
                        React Native, Animations, next.js amplify and more!
                      </p>

                      <a href="#tickets">Get Your Ticket</a>
                    </div>
                  </div>
                  <div class="col-md-7">
                    <div class="event_popup_images">
                      <ul>
                        <li>
                          <img src="images/Event_popup1.png" alt="" />
                        </li>
                        <li>
                          <img src="images/Event_popup2.png" alt="" />
                        </li>
                        <li>
                          <img src="images/Event_popup3.png" alt="" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade event_popup" id="bar_popup" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-5">
                    <div class="event_popup_content">
                      <h3>12th-13th</h3>
                      <h4>MAY</h4>
                      <h5>2-DAY WORKSHOPS</h5>
                      <h6>
                        {' '}
                        <span>8:30am to 7:00pm</span>
                      </h6>
                      <p>
                        2 days to learn from the best ranging from topics such
                        as React.js, SSR, hooks, suspense, graphql, TypeScript,
                        React Native, Animations, next.js amplify and more! 2
                        days to learn from the best ranging from topics such as
                        React.js, SSR, hooks, suspense, graphql, TypeScript,
                        React Native, Animations, next.js amplify and more!
                      </p>
                      <p>
                        2 days to learn from the best ranging from topics such
                        as React.js, SSR, hooks, suspense, graphql, TypeScript,
                        React Native, Animations, next.js amplify and more! 2
                        days to learn from the best ranging from topics such as
                        React.js, SSR, hooks, suspense, graphql, TypeScript,
                        React Native, Animations, next.js amplify and more!
                      </p>
                      <p>
                        2 days to learn from the best ranging from topics such
                        as React.js, SSR, hooks, suspense, graphql, TypeScript,
                        React Native, Animations, next.js amplify and more! 2
                        days to learn from the best ranging from topics such as
                        React.js, SSR, hooks, suspense, graphql, TypeScript,
                        React Native, Animations, next.js amplify and more!
                      </p>
                      <p>
                        2 days to learn from the best ranging from topics such
                        as React.js, SSR, hooks, suspense, graphql, TypeScript,
                        React Native, Animations, next.js amplify and more! 2
                        days to learn from the best ranging from topics such as
                        React.js, SSR, hooks, suspense, graphql, TypeScript,
                        React Native, Animations, next.js amplify and more!
                      </p>
                      <p>
                        2 days to learn from the best ranging from topics such
                        as React.js, SSR, hooks, suspense, graphql, TypeScript,
                        React Native, Animations, next.js amplify and more! 2
                        days to learn from the best ranging from topics such as
                        React.js, SSR, hooks, suspense, graphql, TypeScript,
                        React Native, Animations, next.js amplify and more!
                      </p>
                      <p>
                        2 days to learn from the best ranging from topics such
                        as React.js, SSR, hooks, suspense, graphql, TypeScript,
                        React Native, Animations, next.js amplify and more! 2
                        days to learn from the best ranging from topics such as
                        React.js, SSR, hooks, suspense, graphql, TypeScript,
                        React Native, Animations, next.js amplify and more!
                      </p>

                      <a href="#tickets">Get Your Ticket</a>
                    </div>
                  </div>
                  <div class="col-md-7">
                    <div class="event_popup_images">
                      <ul>
                        <li>
                          <img src="images/Event_popup1.png" alt="" />
                        </li>
                        <li>
                          <img src="images/Event_popup2.png" alt="" />
                        </li>
                        <li>
                          <img src="images/Event_popup3.png" alt="" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <a id="speakers"></a>
      <section class="speaker" id="speaker">
        <div class="container">
          <div class="headings">
            <img src="images/head-2.png" alt="" />
            <h2>Our Speakers</h2>
            <p>
              Stay tuned for some awesome speakers announcements soon as well as
              our call for paper.
            </p>
          </div>
          <div class="speaker_profile">
            <div class="row">
              <div class="col-md-3 col-sm-4 col-xs-12">
                <div class="speaker_box left_box">
                  <div class="profile_image">
                    <img src="images/p1.png" alt="" />
                  </div>
                  <div class="profile_contnet">
                    <h3 class="speaker-name">Ives van Hoorne</h3>
                    <p
                      class="speaker-bio"
                      bio-full="Creator of @codesandbox and now working full-time on it!"
                    >
                      Creator of @codesandbox.
                    </p>
                    <ul>
                      <li>
                        <a
                          href="https://twitter.com/CompuIves"
                          class="icon-social-button"
                        >
                          <i class="fa fa-twitter icon-twitter"></i>
                          <span />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/CompuIves"
                          class="icon-social-button"
                        >
                          <i class="fa fa-github icon-github"></i>
                          <span />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://ivesvh.com/"
                          class="icon-social-button"
                        >
                          <i class="fa fa-link icon-link"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="#"
                    class="add_icon show-speaker"
                    data-toggle="modal"
                    data-target="#speaker_popup"
                  >
                    +
                  </a>
                </div>
              </div>
              <div class="col-md-3 col-sm-4 col-xs-12">
                <div class="speaker_box right_box">
                  <div class="profile_image">
                    <img src="images/shruti-round.png" alt="" />
                  </div>
                  <div class="profile_contnet">
                    <h3 class="speaker-name">Shruti Kapoor</h3>
                    <p
                      class="speaker-bio"
                      bio-full="🙋 Software Engineer @PayPal | GraphQL & React Developer | Speaker | DevJoke Connoisseur"
                    >
                      Software Engineer @PayPal
                    </p>
                    <ul>
                      <li>
                        <a
                          class="icon-social-button"
                          href="https://twitter.com/shrutikapoor08"
                        >
                          <i class="fa fa-twitter icon-twitter"></i>
                          <span />
                        </a>
                      </li>
                      <li>
                        <a
                          class="icon-social-button"
                          href="https://github.com/shrutikapoor08"
                        >
                          <i class="fa fa-github icon-github"></i>
                          <span />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="#"
                    class="add_icon show-speaker"
                    data-toggle="modal"
                    data-target="#speaker_popup"
                  >
                    +
                  </a>
                </div>
              </div>
              <div class="col-md-3 col-sm-4 col-xs-12">
                <div class="speaker_box left_box">
                  <div class="profile_image">
                    <img src="images/devon-round.png" alt="" />
                  </div>
                  <div class="profile_contnet">
                    <h3 class="speaker-name">Devon Govett</h3>
                    <p
                      class="speaker-bio"
                      bio-full="Engineer at Adobe working on the React design systems team. Lead of the Parcel bundler project."
                    >
                      Creator of Parceljs
                    </p>
                    <ul>
                      <li>
                        <a
                          class="icon-social-button"
                          href="https://twitter.com/devongovett"
                        >
                          <i class="fa fa-twitter icon-twitter"></i>
                          <span />
                        </a>
                      </li>
                      <li>
                        <a
                          class="icon-social-button"
                          href="https://github.com/devongovett"
                        >
                          <i class="fa fa-github icon-github"></i>
                          <span />
                        </a>
                      </li>
                      <li>
                        <a
                          class="icon-social-button"
                          href="https://badassjs.com/"
                        >
                          <i class="fa fa-link icon-link"></i>
                          <span />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="#"
                    class="add_icon show-speaker"
                    data-toggle="modal"
                    data-target="#speaker_popup"
                  >
                    +
                  </a>
                </div>
              </div>
              <div class="col-md-3 col-sm-4 col-xs-12">
                <div class="speaker_box right_box">
                  <div class="profile_image">
                    <img src="images/tim-round.png" alt="" />
                  </div>
                  <div class="profile_contnet">
                    <h3 class="speaker-name">Tim Neutkens</h3>
                    <p
                      class="speaker-bio"
                      bio-full="Software Engineer at ZEIT. Lead maintainer of Next.js. Co-author of Next.js, MDX and Micro. Has a passion for creating scalable applications and improving developer experience."
                    >
                      Co-author of Next.js
                    </p>
                    <ul>
                      <li>
                        <a
                          class="icon-social-button"
                          href="https://twitter.com/timneutkens"
                        >
                          <i class="fa fa-twitter icon-twitter"></i>
                          <span />
                        </a>
                      </li>
                      <li>
                        <a
                          class="icon-social-button"
                          href="https://github.com/timneutkens"
                        >
                          <i class="fa fa-github icon-github"></i>
                          <span />
                        </a>
                      </li>
                      <li>
                        <a
                          class="icon-social-button"
                          href="http://www.timneutkens.nl/"
                        >
                          <i class="fa fa-link icon-link"></i>
                          <span />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="#"
                    class="add_icon show-speaker"
                    data-toggle="modal"
                    data-target="#speaker_popup"
                  >
                    +
                  </a>
                </div>
              </div>
              <div class="col-md-3 col-sm-4 col-xs-12">
                <div class="speaker_box left_box">
                  <div class="profile_image">
                    <img
                      src="images/p2.png"
                      isrc="https://2019.react-europe.org/avatars/events/215/speakers/1495/avatar.png?u=2019-02-03%2016:28:40%20+0000%20UTC"
                      alt=""
                    />
                  </div>
                  <div class="profile_contnet">
                    <h3 class="speaker-name">Josh Comeau</h3>
                    <p
                      class="speaker-bio"
                      bio-full="Software engineer at DigitalOcean. Technological craftsman. Author of Guppy, contributes to many open source projects. Cat person."
                    >
                      Software engineer at DigitalOcean
                    </p>
                    <ul>
                      <li>
                        <a
                          class="icon-social-button"
                          href="https://twitter.com/joshwcomeau"
                        >
                          <i class="fa fa-twitter icon-twitter"></i>
                          <span />
                        </a>
                      </li>
                      <li>
                        <a
                          class="icon-social-button"
                          href="https://github.com/joshwcomeau"
                        >
                          <i class="fa fa-github icon-github"></i>
                          <span />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="#"
                    class="add_icon show-speaker"
                    data-toggle="modal"
                    data-target="#speaker_popup"
                  >
                    +
                  </a>
                </div>
              </div>
              <div class="col-md-3 col-sm-4 col-xs-12">
                <div class="speaker_box right_box">
                  <div class="profile_image">
                    <img src="images/you-round.png" alt="" />
                  </div>
                  <div class="profile_contnet">
                    <h3 class="speaker-name">You?</h3>
                    <p
                      class="speaker-bio"
                      bio-full="Software engineer at DigitalOcean. Technological craftsman. Author of Guppy, contributes to many open source projects. Cat person."
                    >
                      Stay tuned for more awesome speakers and our CFP!
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSejydjRdhyxE5sbzRqT93aHhx0PosforW88yZdem7HejNl-yA/viewform">
                        Subscribe here to not miss new announcements
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="get_your_ticket">
              <a href="#tickets">Get Your Ticket</a>
            </div>
          </div>
        </div>
        <div class="modal fade" id="speaker_popup" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body">
                <div class="icon_box">
                  <ul>
                    <li>
                      <a href="#" class="speaker-twitter-modal">
                        <img src="images/pt.png" alt="" />
                      </a>
                      <a href="#" class="speaker-github-modal">
                        <img src="images/pi.png" alt="" />
                      </a>
                      <a href="#" class="speaker-url-modal">
                        <img src="images/pl.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="speaker_popup_profile">
                  <img
                    src="images/popup_profile.png"
                    alt=""
                    class="speaker-avatar-modal"
                    width="200px"
                  />
                  <div class="popup_profile_content">
                    <h3 class="speaker-name-modal">Joshua Comeau</h3>
                    <h5 class="speaker-bio-modal">
                      Software engineer at Khan Academy
                    </h5>
                    <p class="speaker-bio-full-modal">
                      Software engineer at Khan Academy. Technological
                      craftsman. Author of Guppy, contributes to many open
                      source projects. Cat person.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="schedule" id="schedule">
        <div class="container">
          <div class="headings">
            <img src="images/scedual.png" alt="" />
            <h2>Schedule</h2>
            <p>Stay tuned for more update to our schedule.</p>
          </div>
          <div class="schedule_content">
            <div class="row">
              <div class="col-md-4">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                    >
                      <span>MAY 12TH</span> - DAY 1 WORKSHOPS
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                    >
                      <span>MAY 13TH</span> - DAY 2 WORKSHOPS
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#messages"
                      role="tab"
                      aria-controls="messages"
                    >
                      <span>MAY 14TH</span> - DAY 1 CONFERENCE
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#settings"
                      role="tab"
                      aria-controls="settings"
                    >
                      <span>MAY 15TH</span> - DAY 2 CONFERENCE
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-8">
                <div class="tab-content">
                  <div class="tab-pane active" id="home" role="tabpanel">
                    <div class="schedule_tab_box">
                      <div class="schedule_search">
                        <div class="search d-none">
                          <input
                            type="text"
                            name="search"
                            placeholder="Search events easy"
                          />
                          <button>
                            <i class="fa fa-search" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>
                      <div class="tab_content_inner">
                        <h3>Tuesday, 12 May</h3>
                        <div class="tab_scroller">
                          <div class="tab_text first-tab">
                            <div class="border_box_tab">
                              <h5>08:45 - 09:30</h5>
                              <h4>
                                <span>Workshop Checkin & French Breakfast</span>
                              </h4>
                              <p>Make sure to get in early.</p>
                            </div>
                          </div>
                          <div class="tab_text">
                            <h5>09:30 - 17:30</h5>
                            <h4>
                              <span>React.js Workshop - Day 1</span>
                            </h4>
                            <p>
                              Learn from the best with a 2-day workshop this May
                              12 and 13th from 8:45am to 5:30pm
                            </p>
                            <p>
                              Learn about the upcoming core features of React
                              such as concurrent mode, Suspense for Data
                              Fetching, server side rendering and strengthen
                              your knowledge of the latest patterns such as
                              hooks and other techniques in order to help you
                              take full advantage of the latest version of React
                              and build rock solid components with the best user
                              experience possible.
                            </p>
                            <p>
                              This workshop will be done by Nik Graf and another
                              awesome instructor to be announced soon.
                            </p>
                            <p>
                              The workshop requires an intermediary level in
                              React.js (>= 3month experience). More details
                              coming soon. Ticket includes breakfast and lunch.
                              It does not include the conference ticket.
                            </p>

                            <div class="tab_profile_inner_box">
                              <div class="row no-gutters">
                                <div class="col-md-2">
                                  <div class="tab_profile_inner_box_image">
                                    <img
                                      class="schedule-avatar"
                                      src="https://api.eventlama.com/avatars/events/279/speakers/1909/avatar.png?u={.UpdatedAt}"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div class="col-md-10">
                                  <div class="tab_profile_inner_box_content">
                                    <div class="name_icon">
                                      <div class="name">
                                        <h2>Nik Graf</h2>
                                      </div>
                                      <div class="tab_icons">
                                        <ul>
                                          <li>
                                            <a
                                              href="https://twitter.com/nikgraf"
                                              class="icon-social-button-small"
                                            >
                                              <i class="fa fa-twitter icon-twitter"></i>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="https://github.com/nikgraf"
                                              class="icon-social-button-small"
                                            >
                                              <i class="fa fa-github icon-github"></i>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <p>
                                      Nik is a software developer and passionate
                                      about good UX, functional programming and
                                      dev tools. He co-organizes ReasonConf and
                                      produced the free Egghead Reason course.
                                      In addition he co-created several popular
                                      open source projects like DraftJS Plugins
                                      & Polished. In his spare-time he enjoys
                                      cycling & skiing.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="tab_text">
                            <h5>09:30 - 17:30</h5>
                            <h4>
                              <span>React Native Workshop - Day 1</span>
                            </h4>
                            <p>
                              Learn from the best with a 2-day workshop this May
                              12th and 13th from 8:45am to 5:30pm with Eric
                              Vicenti, the creator of React Navigation and
                              aven.io, and Jon Samp, React Native dev at
                              CodeCademy and creator of
                              react-native-header-scroll-view. This workshop
                              will teach you how to write professional user
                              experience using React Native with animation, fast
                              navigation, transitions, performance, web and
                              more.
                            </p>
                            <p>
                              The workshop requires an intermediary level in
                              React.js and React Native (>= 3month experience).
                              More details coming soon. Ticket includes
                              breakfast and lunch. It does not include the
                              conference ticket.
                            </p>
                            <div class="tab_profile_inner_box">
                              <div class="row no-gutters">
                                <div class="col-md-2">
                                  <div class="tab_profile_inner_box_image">
                                    <img
                                      class="schedule-avatar"
                                      src="https://api.eventlama.com/avatars/events/279/speakers/1910/avatar.png?u={.UpdatedAt}"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div class="col-md-10">
                                  <div class="tab_profile_inner_box_content">
                                    <div class="name_icon">
                                      <div class="name">
                                        <h2>Eric Vicenti</h2>
                                      </div>
                                      <div class="tab_icons">
                                        <ul>
                                          <li>
                                            <a
                                              href="https://twitter.com/ericvicenti"
                                              class="icon-social-button-small"
                                            >
                                              <i class="fa fa-twitter icon-twitter"></i>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="https://github.com/ericvicenti"
                                              class="icon-social-button-small"
                                            >
                                              <i class="fa fa-github icon-github"></i>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <p>
                                      Creator of Aven, a full-stack framework
                                      for web and React Native apps. Author of
                                      React Navigation. Formerly on Facebook’s
                                      open source team and the React Native
                                      team.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="tab_profile_inner_box">
                              <div class="row no-gutters">
                                <div class="col-md-2">
                                  <div class="tab_profile_inner_box_image">
                                    <img
                                      class="schedule-avatar"
                                      src="https://api.eventlama.com/avatars/events/279/speakers/1911/avatar.png?u={.UpdatedAt}"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div class="col-md-10">
                                  <div class="tab_profile_inner_box_content">
                                    <div class="name_icon">
                                      <div class="name">
                                        <h2>Jon Samp</h2>
                                      </div>
                                      <div class="tab_icons">
                                        <ul>
                                          <li>
                                            <a
                                              href="https://twitter.com/jonsamp"
                                              class="icon-social-button-small"
                                            >
                                              <i class="fa fa-twitter icon-twitter"></i>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="https://github.com/jonsamp"
                                              class="icon-social-button-small"
                                            >
                                              <i class="fa fa-github icon-github"></i>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <p>
                                      Software engineer, @codecademy. Love
                                      JavaScript & React Native.
                                      singleoriginapp.com
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="tab_text">
                            <h5>09:30 - 17:30</h5>
                            <h4>
                              <span>
                                Full Stack React with GraphQL and AWS Amplify
                                Workshop
                              </span>
                            </h4>
                            <p>
                              Learn from the best with a 2-day workshop this May
                              12 and 13th from 8:45am to 5:30pm
                            </p>
                            <p>
                              In this workshop you’ll learn how to build a
                              serverless full stack React app using the Amplify
                              Framework by building an events app. You’ll learn
                              how to add authentication, protected client
                              routes, and an authenticated GraphQL back end
                              complete with user authorization and a profile
                              view.
                            </p>
                            <p>
                              The workshop requires an intermediary level in
                              React.js (>= 3month experience). More details
                              coming soon. Ticket includes breakfast and lunch.
                              It does not include the conference ticket.
                            </p>
                            <div class="tab_profile_inner_box">
                              <div class="row no-gutters">
                                <div class="col-md-2">
                                  <div class="tab_profile_inner_box_image">
                                    <img
                                      class="schedule-avatar"
                                      src="https://api.eventlama.com/avatars/events/279/speakers/1908/avatar.png?u={.UpdatedAt}"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div class="col-md-10">
                                  <div class="tab_profile_inner_box_content">
                                    <div class="name_icon">
                                      <div class="name">
                                        <h2>Nader Dabit</h2>
                                      </div>
                                      <div class="tab_icons">
                                        <ul>
                                          <li>
                                            <a
                                              href="https://twitter.com/dabit3"
                                              class="icon-social-button-small"
                                            >
                                              <i class="fa fa-twitter icon-twitter"></i>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="https://github.com/dabit3"
                                              class="icon-social-button-small"
                                            >
                                              <i class="fa fa-github icon-github"></i>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <p>
                                      Specializing in React, React Native, and
                                      cross-platform application development.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="profile" role="tabpane2">
                    <div class="schedule_tab_box">
                      <div class="schedule_search">
                        <div class="search">
                          <input
                            type="text"
                            name="search"
                            placeholder="Search events easy"
                          />
                          <button>
                            <i class="fa fa-search" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>
                      <div class="tab_content_inner">
                        <h3>Wednesday, 13 May</h3>
                        <div class="tab_scroller">
                          <div class="tab_text first-tab">
                            <div class="border_box_tab">
                              <h5>08:45 - 09:30</h5>
                              <h4>
                                <span>Workshop Checkin & French Breakfast</span>
                              </h4>
                              <p>Make sure to get in early.</p>
                            </div>
                          </div>
                          <div class="tab_text">
                            <h5>09:30 - 17:30</h5>
                            <h4>
                              <span>React.js Workshop - Day 2</span>
                            </h4>
                            <p>
                              Learn from the best with a 2-day workshop this May
                              12 and 13th from 8:45am to 5:30pm
                            </p>
                            <p>
                              Learn about the upcoming core features of React
                              such as concurrent mode, Suspense for Data
                              Fetching, server side rendering and strengthen
                              your knowledge of the latest patterns such as
                              hooks and other techniques in order to help you
                              take full advantage of the latest version of React
                              and build rock solid components with the best user
                              experience possible.
                            </p>
                            <p>
                              This workshop will be done by Nik Graf and another
                              awesome instructor to be announced soon.
                              <p>
                                The workshop requires an intermediary level in
                                React.js (>= 3month experience). More details
                                coming soon. Ticket includes breakfast and
                                lunch. It does not include the conference
                                ticket.
                              </p>
                            </p>
                            <div class="tab_profile_inner_box">
                              <div class="row no-gutters">
                                <div class="col-md-2">
                                  <div class="tab_profile_inner_box_image">
                                    <img
                                      class="schedule-avatar"
                                      src="https://api.eventlama.com/avatars/events/279/speakers/1909/avatar.png?u={.UpdatedAt}"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div class="col-md-10">
                                  <div class="tab_profile_inner_box_content">
                                    <div class="name_icon">
                                      <div class="name">
                                        <h2>Nik Graf</h2>
                                      </div>
                                      <div class="tab_icons">
                                        <ul>
                                          <li>
                                            <a
                                              href="https://twitter.com/nikgraf"
                                              class="icon-social-button-small"
                                            >
                                              <i class="fa fa-twitter icon-twitter"></i>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="https://github.com/nikgraf"
                                              class="icon-social-button-small"
                                            >
                                              <i class="fa fa-github icon-github"></i>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <p>
                                      Nik is a software developer and passionate
                                      about good UX, functional programming and
                                      dev tools. He co-organizes ReasonConf and
                                      produced the free Egghead Reason course.
                                      In addition he co-created several popular
                                      open source projects like DraftJS Plugins
                                      & Polished. In his spare-time he enjoys
                                      cycling & skiing.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="tab_text">
                            <h5>09:30 - 17:30</h5>
                            <h4>
                              <span>React Native Workshop - Day 2</span>
                            </h4>
                            <p>
                              Learn from the best with a 2-day workshop this May
                              12th and 13th from 8:45am to 5:30pm with Eric
                              Vicenti, the creator of React Navigation and
                              aven.io, and Jon Samp, React Native dev at
                              CodeCademy and creator of
                              react-native-header-scroll-view. This workshop
                              will teach you how to write professional user
                              experience using React Native with animation, fast
                              navigation, transitions, performance, web and
                              more.
                            </p>
                            <p>
                              The workshop requires an intermediary level in
                              React.js and React Native (>= 3month experience).
                              More details coming soon. Ticket includes
                              breakfast and lunch. It does not include the
                              conference ticket.
                            </p>
                            <div class="tab_profile_inner_box">
                              <div class="row no-gutters">
                                <div class="col-md-2">
                                  <div class="tab_profile_inner_box_image">
                                    <img
                                      class="schedule-avatar"
                                      src="https://api.eventlama.com/avatars/events/279/speakers/1910/avatar.png?u={.UpdatedAt}"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div class="col-md-10">
                                  <div class="tab_profile_inner_box_content">
                                    <div class="name_icon">
                                      <div class="name">
                                        <h2>Eric Vicenti</h2>
                                      </div>
                                      <div class="tab_icons">
                                        <ul>
                                          <li>
                                            <a
                                              href="https://twitter.com/ericvicenti"
                                              class="icon-social-button-small"
                                            >
                                              <i class="fa fa-twitter icon-twitter"></i>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="https://github.com/ericvicenti"
                                              class="icon-social-button-small"
                                            >
                                              <i class="fa fa-github icon-github"></i>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <p>
                                      Creator of Aven, a full-stack framework
                                      for web and React Native apps. Author of
                                      React Navigation. Formerly on Facebook’s
                                      open source team and the React Native
                                      team.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="tab_profile_inner_box">
                              <div class="row no-gutters">
                                <div class="col-md-2">
                                  <div class="tab_profile_inner_box_image">
                                    <img
                                      class="schedule-avatar"
                                      src="https://api.eventlama.com/avatars/events/279/speakers/1911/avatar.png?u={.UpdatedAt}"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div class="col-md-10">
                                  <div class="tab_profile_inner_box_content">
                                    <div class="name_icon">
                                      <div class="name">
                                        <h2>Jon Samp</h2>
                                      </div>
                                      <div class="tab_icons">
                                        <ul>
                                          <li>
                                            <a
                                              href="https://twitter.com/jonsamp"
                                              class="icon-social-button-small"
                                            >
                                              <i class="fa fa-twitter icon-twitter"></i>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="https://github.com/jonsamp"
                                              class="icon-social-button-small"
                                            >
                                              <i class="fa fa-github icon-github"></i>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <p>
                                      Software engineer, @codecademy. Love
                                      JavaScript & React Native.
                                      singleoriginapp.com
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="tab_text">
                            <h5>09:30 - 17:30</h5>
                            <h4>
                              <span>Modern Forms in React</span>
                            </h4>
                            <p>
                              This workshop will take the students from building
                              a two-field form using just useState() hooks
                              through to using a form library to manage complex
                              form data such as field arrays, with support for
                              field-level and record-level client-side
                              validation as well as submit validation, third
                              party input components and more. It will also
                              touch on more complex concepts like minimizing
                              field re-renders with a useField() hook, as well
                              as subscribing to certain parts of form state with
                              a useFormState() hook.
                            </p>
                            <p>
                              Beyond only forms, the app we build will talk to a
                              GraphQL backend to load data into the form and
                              mutate it upon form submission using Apollo
                              Client, using hooks, of course!
                            </p>
                            <p>
                              Students will walk away confident in their
                              knowledge of how to build forms of any complexity
                              with great UX.
                            </p>
                            <p>
                              The workshop requires an intermediary level in
                              React.js (>= 3month experience). More details
                              coming soon. Ticket includes breakfast and lunch.
                              It does not include the conference ticket.
                            </p>
                            <div class="tab_profile_inner_box">
                              <div class="row no-gutters">
                                <div class="col-md-2">
                                  <div class="tab_profile_inner_box_image">
                                    <img
                                      class="schedule-avatar"
                                      src="https://api.eventlama.com/avatars/events/279/speakers/1912/avatar.png?u={.UpdatedAt}"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div class="col-md-10">
                                  <div class="tab_profile_inner_box_content">
                                    <div class="name_icon">
                                      <div class="name">
                                        <h2>Erik Rasmussen</h2>
                                      </div>
                                      <div class="tab_icons">
                                        <ul>
                                          <li>
                                            <a
                                              href="https://twitter.com/erikras"
                                              class="icon-social-button-small"
                                            >
                                              <i class="fa fa-twitter icon-twitter"></i>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="https://github.com/erikras"
                                              class="icon-social-button-small"
                                            >
                                              <i class="fa fa-github icon-github"></i>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <p>
                                      American expat javascript developer,
                                      author of Redux Form and React Final Form.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="tab_text">
                            <h5>09:30 - 17:30</h5>
                            <h4>
                              <span>Next.js Workshop</span>
                            </h4>
                            <p>
                              Learn to build a professional Next.js app in a
                              day. More details coming soon on the program and
                              trainers.
                            </p>
                            <p>
                              The workshop requires an intermediary level in
                              React.js (>= 3month experience). More details
                              coming soon. Ticket includes breakfast and lunch.
                              It does not include the conference ticket.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="messages" role="tabpane3">
                    <div class="schedule_tab_box">
                      <div class="schedule_search">
                        <div class="search">
                          <input
                            type="text"
                            name="search"
                            placeholder="Search events easy"
                          />
                          <button>
                            <i class="fa fa-search" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>
                      <div class="tab_content_inner">
                        <h3>Thursday, 14 May</h3>
                        <div class="tab_scroller">
                          <div class="tab_text first-tab">
                            <div class="border_box_tab">
                              <h5>08:30 - 19:30</h5>
                              <h4>
                                <span>Keynote sessions</span>
                              </h4>
                              <p>
                                More details coming soon. Breakfast, lunch and
                                dinner included.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="settings" role="tabpane4">
                    <div class="schedule_tab_box">
                      <div class="schedule_search">
                        <div class="search">
                          <input
                            type="text"
                            name="search"
                            placeholder="Search events easy"
                          />
                          <button>
                            <i class="fa fa-search" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>
                      <div class="tab_content_inner">
                        <h3>Friday, 15 May</h3>
                        <div class="tab_scroller">
                          <div class="tab_text first-tab">
                            <div class="border_box_tab">
                              <h5>08:30 - 19:30</h5>
                              <h4>
                                <span>Keynote sessions</span>
                              </h4>
                              <p>
                                More details coming soon. Breakfast, lunch and
                                drink-up included.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <a id="tickets"></a>
      <div class="tickets-margin"></div>
      <section class="book_ticket" id="book_ticket">
        <div class="container">
          <div class="container">
            <div class="headings">
              <img src="images/ticket.png" alt="" />
              <h2>Get Your Tickets</h2>
              <h3>
                Tickets are now available for both conference and workshops.
              </h3>
              <h3 class="d-none">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSejydjRdhyxE5sbzRqT93aHhx0PosforW88yZdem7HejNl-yA/viewform">
                  Don't miss our tickets release by subscribing here.
                </a>
              </h3>
              <iframe
                src="https://www.react-europe.org?iframe=true"
                width="100%"
                style={{ border: '0px', height: '900px' }}
                iscrolling="no"
                class="tickets-iframe"
              ></iframe>
            </div>
          </div>
          <div class="book_ticket_box d-none">
            <div class="row ticket_first-row">
              <div class="col-md-6">
                <div class="ticket_heading">
                  <h4>Tickets Information</h4>
                </div>
              </div>
              <div class="col-md-6">
                <div class="powerd_text">
                  <p>
                    Powered by <a href="#">EventLama</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="row ticket_secound-row">
              <div class="col-md-6">
                <div class="early_bird">
                  <h3>Early Bird</h3>
                </div>
              </div>
              <div class="col-md-6">
                <div class="sold_out">
                  <a href="#">SOLD OUT</a>
                </div>
              </div>
              <div class="col-md-12">
                <div class="description_input">
                  <label>Description</label>
                  <input type="text" name="Description" />
                </div>
              </div>
              <div class="regular_tecket">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <div class="regular_tecket_heading">
                      <h3>Regular</h3>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="regular_right">
                      <h6 class="right-text">
                        &euro;475.00 <span>(&euro;73.00 VAT)</span>
                        <a href="#" class="close" data-dismiss="right-text">
                          &#10006;
                        </a>
                      </h6>
                      <div class="quantity">
                        <input
                          type="number"
                          min="1"
                          max="9"
                          step="1"
                          value="1"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="regular_ticket_content">
                      <div class="regular_ticket_links">
                        <ul>
                          <li>
                            <a href="#">Description</a>
                          </li>
                          <li>
                            <img src="images/time1.png" alt="" /> 16 days left
                          </li>
                          <li>
                            <img src="images/tciket.png" alt="" /> 20 tickets
                            left
                          </li>
                        </ul>
                      </div>
                      <div class="regular_ticket_input">
                        <input
                          type="text"
                          name="text"
                          placeholder="Our regular ticket to the conference."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="regular_tecket">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <div class="regular_tecket_heading">
                      <h3>Late bird</h3>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="regular_right">
                      <h6 class="right-text">
                        &euro;700.00 <span>(&euro;89.80 VAT)</span>
                        <a href="#" class="close" data-dismiss="right-text">
                          &#10006;
                        </a>
                      </h6>
                      <div class="sold_out soon">
                        <a href="#">SOON</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="regular_ticket_content">
                      <div class="regular_ticket_links">
                        <ul>
                          <li>
                            <a href="#">Description</a>
                          </li>
                          <li>
                            <img src="images/time1.png" alt="" /> 51 days left
                          </li>
                          <li>
                            <img src="images/tciket.png" alt="" /> 15 tickets
                            left
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="checkout">
                <div class="row no-gutters">
                  <div class="col-md-6">
                    <div class="discound_heading">
                      <h3>If you have a discount code</h3>
                    </div>
                    <div class="discount_code">
                      <input
                        type="text"
                        name="discount"
                        placeholder="Discount Code"
                      />
                      <button>Apply</button>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="checkout_btn">
                      <a href="#">Checkout</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a id="sprs"></a>
      <section class="sponser" id="sponser">
        <div class="container">
          <div class="headings">
            <img src="images/sponser.png" alt="" />
            <h2>Our Sponsors</h2>
            <p>
              <a
                href="mailto:reacteurope@eventlama.com?subject=sponsoring react-europe 2020"
                class="spr-link"
                target="_blank"
              >
                <i class="fa fa-envelope"></i>&nbsp;Want to get involved and
                help support ReactEurope? We'd love to hear from you.
              </a>
            </p>
          </div>
          <div class="platinium_box d-none">
            <div class="row">
              <div class="col-md-6">
                <div class="spnser_box">
                  <div class="sponser_image">
                    <img class="normal_image" src="images/dazn.png" alt="" />
                    <img
                      class="hover_img"
                      src="images/sponser-hover.png"
                      alt=""
                    />
                  </div>
                  <div class="work_withweb">
                    <a href="#">Website</a>
                    <a href="#">Work with us</a>
                  </div>
                  <a
                    href="#"
                    class="read_more"
                    data-toggle="modal"
                    data-target="#sponser_popup"
                  >
                    Read More
                  </a>
                  <div class="mobile_icons">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fa fa-link" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-handshake-o" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#sponser_popup"
                        >
                          <i
                            class="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="spnser_box">
                  <div class="sponser_image">
                    <img class="normal_image" src="images/ekino.png" alt="" />
                    <img class="hover_img" src="images/ekino.png" alt="" />
                  </div>
                  <div class="work_withweb">
                    <a href="#">Website</a>
                    <a href="#">Work with us</a>
                  </div>
                  <a href="#" class="read_more">
                    Read More
                  </a>
                  <div class="mobile_icons">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fa fa-link" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-handshake-o" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#sponser_popup"
                        >
                          <i
                            class="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="vertical_text">
                <h3>PLATINUM</h3>
              </div>
            </div>
          </div>
          <div class="platinium_box gold_box">
            <div class="row">
              <div class="col-md-4">
                <div class="spnser_box">
                  <div class="sponser_image">
                    <img class="normal_image" src="images/gold1.png" alt="" />
                    <img class="hover_img" src="images/gold1.png" alt="" />
                  </div>
                  <div class="work_withweb">
                    <a href="https://aws-amplify.github.io/?utm_source=reacteurope&utm_medium=banner&utm_campaign=reacteurope-sponsor-banner">
                      Website
                    </a>
                    <a href="https://www.amazon.jobs/en/business_categories/amazon-web-services?utm_source=reacteurope&utm_medium=banner&utm_campaign=reacteurope-sponsor-banner">
                      Work with us
                    </a>
                  </div>
                  <a href="#" class="read_more d-none">
                    Read More
                  </a>
                  <div class="mobile_icons">
                    <ul>
                      <li>
                        <a href="https://aws-amplify.github.io/?utm_source=reacteurope&utm_medium=banner&utm_campaign=reacteurope-sponsor-banner">
                          <i class="fa fa-link" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.amazon.jobs/en/business_categories/amazon-web-services?utm_source=reacteurope&utm_medium=banner&utm_campaign=reacteurope-sponsor-banner">
                          <i class="fa fa-handshake-o" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li class="d-none">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#sponser_popup"
                        >
                          <i
                            class="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  <a
                    href="mailto:reacteurope@eventlama.com?subject=sponsoring react-europe 2020"
                    class="spr-link"
                    target="_blank"
                  >
                    <i class="fa fa-envelope"></i>&nbsp; If you would like to
                    sponsor us, we'd love to hear from you.
                  </a>
                </p>
              </div>
              <div class="vertical_text gold">
                <h3>GOLD</h3>
              </div>
            </div>
          </div>
          <div class="platinium_box gold_box brunse_box d-none">
            <div class="row">
              <div class="col-md-4">
                <div class="spnser_box">
                  <div class="sponser_image">
                    <img class="normal_image" src="images/brunse1.png" alt="" />
                    <img class="hover_img" src="images/brunse1.png" alt="" />
                  </div>
                  <div class="work_withweb">
                    <a href="https://aws-amplify.github.io/?utm_source=reacteurope&utm_medium=banner&utm_campaign=reacteurope-sponsor-banner">
                      Website
                    </a>
                    <a href="https://www.amazon.jobs/en/business_categories/amazon-web-services?utm_source=reacteurope&utm_medium=banner&utm_campaign=reacteurope-sponsor-banner">
                      Work with us
                    </a>
                  </div>
                  <a href="#" class="read_more d-none">
                    Read More
                  </a>
                  <div class="mobile_icons">
                    <ul>
                      <li>
                        <a href="https://aws-amplify.github.io/?utm_source=reacteurope&utm_medium=banner&utm_campaign=reacteurope-sponsor-banner">
                          <i class="fa fa-link" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.amazon.jobs/en/business_categories/amazon-web-services?utm_source=reacteurope&utm_medium=banner&utm_campaign=reacteurope-sponsor-banner">
                          <i class="fa fa-handshake-o" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li class="d-none">
                        <a href="#">
                          <i
                            class="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="spnser_box">
                  <div class="sponser_image">
                    <img class="normal_image" src="images/brunse2.png" alt="" />
                    <img class="hover_img" src="images/brunse2.png" alt="" />
                  </div>
                  <div class="work_withweb">
                    <a href="#">Website</a>
                    <a href="#">Work with us</a>
                  </div>
                  <a href="#" class="read_more">
                    Read More
                  </a>
                  <div class="mobile_icons">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fa fa-link" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-handshake-o" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            class="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="vertical_text gold">
                <h3>BRUNSE</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="sponser_popup" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-3">
                    <div class="sponser_popup_left">
                      <img src="images/dazn.png" alt="" />
                      <div class="sponser_popup_link">
                        <a href="#">Website</a>
                        <a href="#">Work with us</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-9">
                    <div class="sponser_popup_right">
                      <h3>
                        DAZN is a tech-first live streaming service for sports
                        fans.
                      </h3>
                      <p>
                        We use a very modern tech stack to stream content to
                        millions of concurrent viewers globally across multiple
                        platforms and devices. The architecture of DAZN is based
                        on Micro Frontends and unifies a range of technologies
                        in order to deliver a seamless user experience.
                      </p>
                      <p>
                        This is an ambitious project with a fast release cycle
                        that has scalability not only from a user point of view
                        but also from a developer perspective. Imagine a tech
                        start up culture but with the security and backing from
                        a well established content and media agency. Our
                        engineers work in small teams and are given freedom and
                        autonomy when it comes to the code that they write. If
                        you like solving technical problems then this is the
                        place to be. We have a community that is here to help.
                        We have a large network of
                      </p>
                    </div>
                  </div>
                  <div class="vertical_text">
                    <h3>PLATINUM</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="support">
        <div class="container">
          <div class="headings">
            <h2>Supporters</h2>
          </div>
          <div class="supporters_logo">
            <ul>
              <li>
                <img src="images/support2.png" alt="" />
              </li>
              <li>
                <img src="images/support4.png" alt="" />
              </li>
              <li>
                <img src="images/support6.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="location" id="location">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="location_content">
                <div class="location_heading">
                  <img src="images/location.png" alt="" />
                  <h2>Location</h2>
                </div>

                <div class="office_address">
                  <h3>Palace of Paris-Est Congress</h3>
                  <h5>128 Rue de Paris</h5>
                  <h6>Montreuil, France</h6>
                </div>
                <p>
                  Both workshops and conference will take place at the same
                  venue.
                </p>
                <div class="airport">
                  <h5>
                    The venue is close to both the
                    <b>CDG & ORY airports</b>
                  </h5>
                </div>
                <div class="airport train">
                  <h5>
                    Is accessible by <b>subway, bus & ring road</b>
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="map_location">
                <img src="images/map-montreuil.png" alt="" />
                <a href="https://goo.gl/maps/3w2z8ZMszLtzGSD76">View on Map</a>
              </div>
              <div class="map_box">
                <img src="images/image003.jpg" alt="" />
                <h2>Palace of Paris-Est Congress</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="people-behind" id="people-behind">
          <div class="container">
            <div class="headings">
              <img src="images/people.png" alt="" />
              <h2>People Behind ReactEurope</h2>
              <p class="d-none">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet{' '}
              </p>
            </div>
            <div class="speaker_profile" id="mobile-organizers">
              <div class="row">
                <div class="col-md-3 col-sm-4 col-xs-12">
                  <div class="speaker_box left_box">
                    <div class="profile_image">
                      <img src="images/pb1.png" alt="" />
                    </div>
                    <div class="profile_contnet">
                      <h3 class="speaker-name">Patrick Aljord</h3>
                      <p>Organizer</p>
                      <ul>
                        <li>
                          <a
                            href="https://twitter.com/patcito"
                            class="icon-social-button"
                          >
                            <i class="fa fa-twitter icon-twitter"></i>
                            <span />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/patcito"
                            class="icon-social-button"
                          >
                            <i class="fa fa-github icon-github"></i>
                            <span />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4 col-xs-12">
                  <div class="speaker_box right_box">
                    <div class="profile_image">
                      <img src="images/pb2.png" alt="" />
                    </div>
                    <div class="profile_contnet">
                      <h3 class="speaker-name">Katiuska Gamero</h3>
                      <p>co-organizer</p>
                      <ul>
                        <li>
                          <a
                            class="icon-social-button"
                            href="https://twitter.com/katy_gca"
                          >
                            <i class="fa fa-twitter icon-twitter"></i>
                            <span />
                          </a>
                        </li>
                        <li>
                          <a
                            class="icon-social-button"
                            href="https://github.com/katcita"
                          >
                            <i class="fa fa-github icon-github"></i>
                            <span />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4 col-xs-12">
                  <div class="speaker_box left_box">
                    <div class="profile_image">
                      <img src="images/pb3.png" alt="" />
                    </div>
                    <div class="profile_contnet">
                      <h3 class="speaker-name">React.js Paris</h3>
                      <ul>
                        <li>
                          <a
                            href="https://twitter.com/reactjsparis"
                            class="icon-social-button"
                          >
                            <i class="fa fa-twitter icon-twitter"></i>
                            <span />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://meetup.com/reactjs-paris"
                            class="icon-social-button"
                          >
                            <i class="fa fa-link icon-link"></i>
                            <span />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4 col-xs-12">
                  <div class="speaker_box right_box">
                    <div class="profile_image">
                      <img src="images/pb4.png" alt="" />
                    </div>
                    <div class="profile_contnet">
                      <h3 class="speaker-name">ReasonML Paris</h3>
                      <ul>
                        <li>
                          <a
                            class="icon-social-button"
                            href="https://twitter.com/reasonmlparis"
                          >
                            <i class="fa fa-twitter icon-twitter"></i>
                            <span />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://meetup.com/reasonml-paris"
                            class="icon-social-button"
                          >
                            <i class="fa fa-link icon-link"></i>
                            <span />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="people-behind-colums">
              <div class="row">
                <div class="col-md-3 col-sm-4 col-xs-6">
                  <div class="speaker_box left_box">
                    <div class="profile_image">
                      <img src="images/pb1.png" alt="" />
                    </div>
                    <div class="profile_contnet">
                      <h3>Patrick Aljord</h3>
                      <ul>
                        <li>
                          <a
                            href="https://twitter.com/patcito"
                            class="icon-social-button-small"
                          >
                            <i class="fa fa-twitter icon-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/patcito"
                            class="icon-social-button-small"
                          >
                            <i class="fa fa-github icon-github"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4 col-xs-6">
                  <div class="speaker_box right_box">
                    <div class="profile_image">
                      <img src="images/pb2.png" alt="" />
                    </div>
                    <div class="profile_contnet">
                      <h3>Katiuska Gamero</h3>
                      <ul>
                        <li>
                          <a
                            href="https://twitter.com/katy_gca"
                            class="icon-social-button-small"
                          >
                            <i class="fa fa-twitter icon-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/katcita"
                            class="icon-social-button-small"
                          >
                            <i class="fa fa-github icon-github"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4 col-xs-6">
                  <div class="speaker_box left_box">
                    <div class="profile_image">
                      <img src="images/pb3.png" alt="" />
                    </div>
                    <div class="profile_contnet">
                      <h3>React.js Paris</h3>
                      <ul>
                        <li>
                          <a
                            href="https://twitter.com/reactjsparis"
                            class="icon-social-button-small"
                          >
                            <i class="fa fa-twitter icon-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.meetup.com/ReactJS-Paris/"
                            class="icon-social-button-small"
                          >
                            <i class="fa fa-link icon-link"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4 col-xs-6">
                  <div class="speaker_box right_box">
                    <div class="profile_image">
                      <img src="images/pb4.png" alt="" />
                    </div>
                    <div class="profile_contnet">
                      <h3>ReasonML Paris</h3>
                      <ul>
                        <li>
                          <a
                            href="https://twitter.com/reasonmlparis"
                            class="icon-social-button-small"
                          >
                            <i class="fa fa-twitter icon-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.meetup.com/Reasonml-Paris/"
                            class="icon-social-button-small"
                          >
                            <i class="fa fa-link icon-link"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="behind_people_slider d-none">
              <div class="people_slick-carousel">
                <div>
                  <div class="speaker_box left_box">
                    <div class="profile_image">
                      <img src="images/pb1.png" alt="" />
                    </div>
                    <div class="profile_contnet">
                      <h3>Patrick Aljordi</h3>
                      <ul>
                        <li>
                          <a
                            href="https://twitter.com/patcito"
                            class="icon-social-button-small"
                          >
                            <i class="fa fa-twitter icon-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/patcito"
                            class="icon-social-button-small"
                          >
                            <i class="fa fa-github icon-github"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="speaker_box right_box">
                    <div class="profile_image">
                      <img src="images/pb2.png" alt="" />
                    </div>
                    <div class="profile_contnet">
                      <h3>Katiuska Gamero</h3>
                      <ul>
                        <li>
                          <a
                            href="https://twitter.com/katy_gca"
                            class="icon-social-button-small"
                          >
                            <i class="fa fa-twitter icon-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/katcita"
                            class="icon-social-button-small"
                          >
                            <i class="fa fa-github icon-github"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="speaker_box left_box">
                    <div class="profile_image">
                      <img src="images/pb3.png" alt="" />
                    </div>
                    <div class="profile_contnet">
                      <h3>React.js Paris</h3>
                      <ul>
                        <li>
                          <a
                            href="https://twitter.com/reactjsparis"
                            class="icon-social-button-small"
                          >
                            <i class="fa fa-twitter icon-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.meetup.com/ReactJS-Paris/"
                            class="icon-social-button-small"
                          >
                            <i class="fa fa-link icon-link"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="speaker_box right_box">
                    <div class="profile_image">
                      <img src="images/pb4.png" alt="" />
                    </div>
                    <div class="profile_contnet">
                      <h3>ReasonML Paris</h3>
                      <ul>
                        <li>
                          <a
                            href="https://twitter.com/reasonmlparis"
                            class="icon-social-button-small"
                          >
                            <i class="fa fa-twitter icon-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.meetup.com/Reasonml-Paris/"
                            class="icon-social-button-small"
                          >
                            <i class="fa fa-link icon-link"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="peaople_said">
        <div class="container">
          <div class="headings">
            <img src="images/testimonial.png" alt="" />
            <h2>What People Said</h2>
            <p>
              What our previous attendants had to say about ReactEurope 2019.
            </p>
          </div>
          <div class="testimonials-slider">
            <div class="slick-carousel_testimonial">
              <div>
                <div class="testimonial_box">
                  <img src="images/test_qoute.png" />
                  <p>
                    Thanks for the time @ReactEurope and for the knowledge
                    during the Hackathon today. Falling in love with #awsamplify
                    and #graphql. Thanks for the help @dabit3
                  </p>
                  <h5>- D/S (@dsbrux) May 25, 2019</h5>
                </div>
              </div>
              <div>
                <div class="testimonial_box">
                  <img src="images/test_qoute.png" />
                  <p>
                    Heading back home from #ReactEurope in Paris. Thanks, folks,
                    I had a blast! Fantastic talks. Especially the ones by @leeb
                    and @paularmstrong blew me away.
                  </p>
                  <h5>- Timo Stollenwerk (@timostollenwerk) May 25, 2019</h5>
                </div>
              </div>
              <div>
                <div class="testimonial_box">
                  <img src="images/test_qoute.png" />
                  <p>
                    Thanks for such a great time @ReactEurope! Learned a ton and
                    met so many great people. I hope everyone returns to the
                    office Monday and sets up their git hooks and performance
                    budgets!
                  </p>
                  <h5>- Paul Armstrong (@paularmstrong) May 25, 2019</h5>
                </div>
              </div>
              <div>
                <div class="testimonial_box">
                  <img src="images/test_qoute.png" />
                  <p>
                    Great conference @ReactEurope! Great organisation and
                    awesome crowd! 👏👏👏 See you next year! 😉
                  </p>
                  <h5>- Vesko Kolev (@VeskoKolev) May 24, 2019</h5>
                </div>
              </div>
              <div>
                <div class="testimonial_box">
                  <img src="images/test_qoute.png" />
                  <p>
                    This past few days, I spent at @ReactEurope. This was the
                    first tech conference I have attended, and I got incredible
                    value out of meeting such a diverse group of React engineers
                    from around the world. Thank you! #conferences #reactjs
                    #reacteurope
                  </p>
                  <h5>- Roo Shivkumar (@InationRoo) May 25, 2019</h5>
                </div>
              </div>
              <div>
                <div class="testimonial_box">
                  <img src="images/test_qoute.png" />
                  <p>
                    I've been to @reacteurope ⚛️🇪🇺 had an awesome time, here's a
                    break down with the things I loved the most 💕 A BIG
                    SHOUTOUT TO @reacteurope STAFF FOR ORGANISING SUCH AN
                    AWESOME EVENT! 🙌🏼
                  </p>
                  <h5>- Dennis Bruijn 🤖 (@0x1ad2) May 20, 2018</h5>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
      <section class="our_article d-none">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="article_heading">
                <h4>ReactEurope Articles</h4>
              </div>
            </div>
            <div class="col-md-6">
              <div class="article_btn">
                <a href="#">View All Articles</a>
              </div>
            </div>
          </div>
          <div class="article_boxes">
            <div class="row">
              <div class="col-md-4">
                <div class="article_inner">
                  <div class="article_image">
                    <img src="images/article1.png" alt="" />
                  </div>
                  <div class="article_full_contet">
                    <div class="article_boxes_content">
                      <div class="artcile_profile_image">
                        <img src="images/article_profile.png" />
                      </div>
                      <div class="article_profile_content">
                        <h3>Leimonis Konstantinos</h3>
                        <h4>May 23, 2018 · 3 min read</h4>
                      </div>
                    </div>
                    <div class="article_content_bottom">
                      <h5>React Europe 2018 - TLDR;</h5>
                      <p>
                        the organization of the conference was really good,
                        shout out to @ReactEurope’s team! The schedule was
                        followed with
                      </p>
                      <a href="#">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="article_inner">
                  <div class="article_image">
                    <img src="images/article2.png" alt="" />
                  </div>
                  <div class="article_full_contet">
                    <div class="article_boxes_content">
                      <div class="artcile_profile_image">
                        <img src="images/article_profile.png" />
                      </div>
                      <div class="article_profile_content">
                        <h3>Leimonis Konstantinos</h3>
                        <h4>May 23, 2018 · 3 min read</h4>
                      </div>
                    </div>
                    <div class="article_content_bottom">
                      <h5>React Europe 2018 - TLDR;</h5>
                      <p>
                        the organization of the conference was really good,
                        shout out to @ReactEurope’s team! The schedule was
                        followed with
                      </p>
                      <a href="#">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="article_inner">
                  <div class="article_image">
                    <img src="images/article3.png" alt="" />
                  </div>
                  <div class="article_full_contet">
                    <div class="article_boxes_content">
                      <div class="artcile_profile_image">
                        <img src="images/article_profile.png" />
                      </div>
                      <div class="article_profile_content">
                        <h3>Leimonis Konstantinos</h3>
                        <h4>May 23, 2018 · 3 min read</h4>
                      </div>
                    </div>
                    <div class="article_content_bottom">
                      <h5>React Europe 2018 - TLDR;</h5>
                      <p>
                        the organization of the conference was really good,
                        shout out to @ReactEurope’s team! The schedule was
                        followed with
                      </p>
                      <a href="#">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="event_moments">
        <div class="container">
          <div class="headings">
            <h2>Event Moments</h2>
          </div>
        </div>
        <div class="events_images d-sm-none">
          <ul class="">
            <li>
              <img src="images/ourjourney-mobile.png" />
            </li>
          </ul>
        </div>
        <div class="events_images d-none d-sm-block">
          <ul class="">
            <li>
              <img src="images/events1.png" alt="" />
            </li>
            <li>
              <img src="images/events2.png" alt="" />
            </li>
            <li>
              <img src="images/events3.png" alt="" />
            </li>
            <li>
              <img src="images/events4.png" alt="" />
            </li>
            <li>
              <img src="images/events5.png" alt="" />
              <img src="images/events5-2.png" alt="" />
            </li>
            <li>
              <img src="images/events6.png" alt="" />
            </li>
            <li>
              <img src="images/events7.png" alt="" />
              <img src="images/events7-2.png" alt="" />
            </li>
            <li>
              <img src="images/events8.png" alt="" />
            </li>
            <li>
              <img src="images/events9.png" alt="" />
              <img src="images/events9-2.png" alt="" />
            </li>
          </ul>
        </div>
      </section>
      <section class="subscribe_bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="subscribe_img">
                <img src="images/subscribe_img.png" />
              </div>
            </div>
            <div class="col-md-8">
              <div class="subscribe_right" id="subscribe">
                <div class="headings">
                  <h2>Subscribe</h2>
                  <p>
                    Subscribe to our{' '}
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSejydjRdhyxE5sbzRqT93aHhx0PosforW88yZdem7HejNl-yA/viewform">
                      mailing list to get the latest news here
                    </a>
                  </p>
                </div>
                <div class="subscibe_form d-none">
                  <button href="">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="site_footer">
        <div class="container">
          <div class="footer_top">
            <div class="footer_social">
              <ul>
                <li>
                  <a href="https://www.facebook.com/ReactEurope">
                    <img src="images/facebook.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/ReactEurope">
                    <img src="images/twitter.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/c/ReacteuropeOrgConf">
                    <img src="images/youtube.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/@reacteurope">
                    <img src="images/m.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer_nav">
              <ul>
                <li>
                  <a class="nav-link" href="#conference">
                    Events
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="#speakers">
                    Speakers
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="#schedule">
                    Schedule
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="#sprs">
                    Sponsors
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="#location">
                    Location
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="#people-behind">
                    Organizers
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="https://medium.com/@reacteurope">
                    Blog
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="mailto:reacteurope@eventlama.com">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-8">
              <h4>FAQ</h4>
              <div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                      <button
                        class="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Why attend?
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseOne"
                    class="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <div class="panel-body-faq">
                        <h3 class="panel-body-title">The Sessions</h3>
                        <ul>
                          <li>Inspiring Keynotes</li>
                          <li>Expert Panel Discussions</li>
                          <li>New Announcements</li>
                          <li>Hands-On Workshops</li>
                        </ul>
                        <h3 class="panel-body-title">The People</h3>
                        <ul>
                          <li>
                            <b>Exchange</b> best practices with peers.
                          </li>
                          <li>
                            <b>Interact</b> with our amazing speakers.
                          </li>
                          <li>
                            <b>Network</b> and meet new people.
                          </li>
                          <li>
                            <b>Engage</b> experts in their respective fields.
                          </li>
                        </ul>
                        <h3 class="panel-body-title">The Topics</h3>
                        <ul>
                          <li>
                            Authoring Mobile React Native Apps That Also Compile
                            to Web
                          </li>
                          <li>Cutting-edge Universal apps techniques</li>
                          <li>
                            Improving Performance and animation in your apps
                          </li>
                          <li>Querying your data with Apollo and GraphQL</li>
                          <li>
                            Learn about how ReasonML brings powerful typing,
                            functional programming and easy JavaScript interop.
                          </li>
                          <li>Understanding design methods</li>
                          <li>Smart tools for creation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <h2 class="mb-0">
                      <button
                        class="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Do you do refunds?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <h3 class="panel-body-title">Ticket Refund</h3>
                      <p>
                        We do refund tickets with a 5% fee until December 15,
                        2019. However, it is possible to transfer your ticket at
                        all time.
                      </p>
                      <h3 class="panel-body-title">Ticket Transfer</h3>
                      <p>
                        It is possible to transfer your ticket to a peer. Just
                        open the email you received when you bought your ticket
                        and follow the link to edit your ticket details.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingThree">
                    <h2 class="mb-0">
                      <button
                        class="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        What do I get for each conference ticket?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      All tickets called "Round X Conference" (such as Round 1
                      Conference and Round 2 Conference) give access to the
                      two-day conference, this includes typical French
                      breakfasts, tasty lunches and refreshments through the day
                      (both alcoholic and not). We also have swag such as
                      t-shirts, prizes and more, not to forget - the Pre-Party
                      on May 13th. Entrance to social events around the
                      conference to be announced later. Workshops are sold
                      separately and do not include access to the conference,
                      these are the tickets that start with "One-day" or
                      "Two-day workshop".
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 coc-diversity">
              <h4 class="footer-title">Code of Conduct</h4>
              <p>
                Yes, we want everyone to have a safe, productive, enjoyable time
                at the conference.{' '}
                <a href="/coc.html" target="_blank">
                  Here's the Code of Coduct for ReactEurope
                </a>
                .
              </p>
              <h4 class="footer-title">Scholarship program</h4>
              <p>
                You can apply for a diversity scholarship that will give you
                free access to the conference, learn more about how to apply{' '}
                <a
                  href="http://bit.ly/reacteu-2020-scholarship"
                  target="_blank"
                >
                  here
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <div class="footer_bottom">
          <div class="container">
            <p>
              Copyrights © 2019 - Design by{' '}
              <a href="https://eventlama.com" target="_blank">
                EventLama
              </a>
            </p>
          </div>
        </div>
      </footer>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        adsense
      }
    }
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: edges {
        post: node {
          html
          frontmatter {
            layout
            title
            path
            category
            tags
            description
            date(formatString: "YYYY/MM/DD")
            image {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
