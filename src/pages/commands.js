import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function Commands() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Commands | a r o x</title>
        <meta
          name="description"
          content="Commands page | Minimal and awesome discord bot dashboard created by manta maahil using NextJS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              ⚡ Commands
            </label>
          </header>
          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
              Utilities ⚙️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$help</kbd> -{" "}
                  <span className="p-color">Gives a list of command with instructions on how to use them</span>
                </li>
                <li>
                  <kbd>$urban</kbd> -{" "}
                  <span className="p-color">Get the Urban Dictionary definition of a term.</span>
                </li>
                <li>
                  <kbd>$weather</kbd> -{" "}
                  <span className="p-color">Gets the weather of the country of your choice</span>
                </li>
                <li>
                  <kbd>$coming soon...</kbd> -{" "}
                  <span className="p-color">All the commands listed in this category hasn't been released yet</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb2"/>
          <section className="box">
            <label className="box-title p-color" htmlFor="cb2">
              Music 🎶
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$play</kbd> -{" "}
                  <span className="p-color">Plays audio from YouTube</span>
                </li>
                <li>
                  <kbd>$playlist</kbd> -{" "}
                  <span className="p-color">Play a playlist from youtube</span>
                </li>
                <li>
                  <kbd>$queue</kbd> -{" "}
                  <span className="p-color">Show the music queue and now playing</span>
                </li>
                <li>
                  <kbd>$remove</kbd> -{" "}
                  <span className="p-color">Remove song from the queue</span>
                </li>
                <li>
                  <kbd>$resume</kbd> -{" "}
                  <span className="p-color">Resume currently playing music</span>
                </li>
                <li>
                  <kbd>$shuffle</kbd> -{" "}
                  <span className="p-color">Shuffle queue</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb3"/>
          <section className="box">
          <label className="box-title p-color" htmlFor="cb3">
              Fun 🐛
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$hangman</kbd> -{" "}
                  <span className="p-color">Starts a game of hangman</span>
                </li>
                <li>
                  <kbd>$meme</kbd> -{" "}
                  <span className="p-color">Gets a random meme for you</span>
                </li>
                <li>
                  <kbd>$color</kbd> -{" "}
                  <span className="p-color">Gets the colour info of the colour you choose</span>
                </li>
                <li>
                  <kbd>$coming soon...</kbd> -{" "}
                  <span className="p-color">All the commands listed in this category hasn't been released yet</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb4"/>
          <section className="box">
            <label className="box-title p-color" htmlFor="cb4">
              Gameplay 🎲
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$userinfo</kbd> -{" "}
                  <span className="p-color">Gets the info of a user</span>
                </li>
                <li>
                  <kbd>$stats</kbd> -{" "}
                  <span className="p-color">Gets the server stats</span>
                </li>
                <li>
                  <kbd>$invites</kbd> -{" "}
                  <span className="p-color">Gets the amount of invites someone has</span>
                </li>
                <li>
                  <kbd>$coming soon...</kbd> -{" "}
                  <span className="p-color">All the commands listed in this category hasn't been released yet</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb5"/>
          <section className="box">
            <label className="box-title p-color" htmlFor="cb5">
              Image 🖼️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$cat</kbd> -{" "}
                  <span className="p-color">Gets a picture of a cat</span>
                </li>
                <li>
                  <kbd>$dog</kbd> -{" "}
                  <span className="p-color">Gets a picture of a dog</span>
                </li>
                <li>
                  <kbd>$image</kbd> -{" "}
                  <span className="p-color">Gets a random image from the web</span>
                </li>
                <li>
                  <kbd>$coming soon...</kbd> -{" "}
                  <span className="p-color">All the commands listed in this category hasn't been released yet</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="acc-close"/>
        </nav>
      </section>
      <Footer/>
    </motion.div>
  );
}
