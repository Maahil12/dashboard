import Link from "next/link";
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <main className="showcase">
        <h1 className="showcase-header h-color">/ a r o x</h1>
        <h2 className="showcase-header-text h-color">
          The only discord bot you need!
        </h2>
        <p className="showcase-para p-color">
          One of the awesome discord bot with the best of the music commands that will fill
          your music needs in your discord server.
        </p>

        <span className="p-color">Bot is online!</span>
        <div className="showcase-btn">
          <button className="btn">
            <Link
                className="h-color no-decoration"
                href="https://discord.com/api/oauth2/authorize?client_id=1210843900223291392&permissions=8&scope=bot%20applications.commands"
                target="_blank"
            >
              Invite now!
            </Link>
          </button>

          <button className="btn">
            <Link
                className="h-color no-decoration"
                href="https://discord.gg/bSdZKdGkKm"
                target="_blank"
            >
              Join server!
            </Link>
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;
