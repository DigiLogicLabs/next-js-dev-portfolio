import Bar from "../components/Bar";
import { languages, tools, containers } from "../data";

const Resume = () => {
  return (
    <div className="text-base font-hpr font-medium tracking-wider">
      <div className="grid">
        <details
          open
          className="cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200"
        >
          <summary className="font-semibold p-2 text-2xl">Software Engineer</summary>
          <div
            className="
              container
              px-4
              py-4
              mx-auto
              flex
              md:items-center
              lg:items-start
              md:flex-row md:flex-nowrap
              "
          >
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto md:text-left">
              <span className="text-xl text-blue">Earthscout</span>
              <p className="mt-2 text-md">
                Responsibilities include, but not limited to:
                <br />
                - Atlassian Account Administration 
                <br />
                - Confluence Organization & documentation
                <br />
                - Confluence Organization & documentation
                - Lead offshore software development team while utilizing
                collaboration tools for regular communication and task
                management
                <br />
                - Help build and implement better software development processes
                for rapid application
                <br />
                development
                <br />
                - Work with back-end developers to maintain, modify and create
                databases with restful API's (C#)
                <br />
                - Creating back-end requirements as needed UI/UX
                <br />
                - Create quality assurance through test-based development as
                well as backward compatibility (functions) retainment process
                <br />
                - Create development processes and follow best practices to
                ensure data security
                <br />
                - Work with cross functional team leaders to understand software
                requirements, plan and execute development and launch on a
                timely basis.
                <br />
                - Work with customers directly to understand their needs and
                provide support
                <br />- Create new procedures, processes and relationships
              </p>
            </div>
            <div
              className="
                flex-grow flex flex-wrap
                -mb-10
                md:mt-0
                mt-10
                md:text-left
                text-center
                "
            >
              {containers.map((container) => (
                <div className="container mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                    <div className="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                      <div className="m-3">
                        <h2 className="text-lg mb-2">
                          {container.title}
                          <span className="text-md text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse text-blue">
                            {container.environment}
                          </span>
                        </h2>
                        <p className="font-light font-mono text-md hover:text-blue transition-all duration-200">
                          {container.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </details>
        <div>
          <div className="grid md:grid-cols-1">
            <details className="cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
              <summary className="font-semibold p-2 text-2xl">Freelance Work</summary>
              <p className="my-3">
                <br />
                <h2 className="font-semibold p-2">The Poster Children Web</h2>
                <ul className="list-none hover:list-disc">
                  <li>
                    - Created a Wordpress website for The Poster Children - a 2d cartoon universe driven by decentralized blockchain technology (in development). Utilized solidity contract development knowledge for a basic Binance Smart Chain liquidity contract.
                  </li>
                  <li>
                    - Applied knowledge of CSS, HTML, Solidity, and some basic Javascript to get the correct look and feel based on the style guide provided.
                    <br />
                  </li>
                  <li>
                    - Applied practical knowledge on SEO optimizations and project cleanliness, used 3d particle effects for an interactive background, and created graphics (as well as a logo) to match the intended overall style for the project.
                    <br />
                  </li>
                </ul>
                <br />
                <h2 className="font-semibold p-2">
                  Third Eye Equestrian
                </h2>
                <ul className="list-none hover:list-disc">
                  <li>
                    - Created a website using Wordpress and WooCommerce for a horse training business (Service based), this includes a home, about, contact, shop, cart, checkout, and detail pages. Scaffolding the UI with HTML, custom Wordpress widgets, and CSS for a personalized feel according to the style guide provided.
                    <br />
                  </li>
                  <li>
                    - Products are sold via Woocommerce as virtual goods (aka a service) where the buyer can add items to their cart and checkout with a credit card, Apple Pay, Google Pay, or PayPal.
                    <br />
                  </li>
                  <li>
                    - Optimized for SEO performance for google searchibility. This provides a better likelihood of the client getting online exposure and traffic to their website, which in turn, generates more leads and more sales.
                    <br />
                  </li>
                </ul>
                <br/>
                <h2 className="font-semibold p-2">Odd Jobs</h2>
                <ul className="list-none hover:list-disc">
                  <li>
                    - Revitalized Horseplay Ranch's (horseplayranchmn.com) website for better performance, searchability, a more modern UI, and updated business information. 
                    <br />
                  </li>
                  <li>
                    - Deployed a BSC smart contract using Solidity for The Poster Children (theposterchildren.com) using Remix - the popular Ethereum IDE. This smart contract is based off the Open Zepplin contracts to create a liquidity token.
                    <br />
                  </li>
                  <li>
                    - Helped fix multiple issues on a Personal Trainer Wordpress website (no longer the original host (https://www.dabrown.co/elite-ats)) in regards to shopping, cart status, and checkout payment methods.
                    <br />
                  </li>
                </ul>
              </p>
            </details>
          </div>
          <div className="grid md:grid-cols-1">
            <details className="cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
              <summary className="font-semibold p-2 text-2xl">
                Junior Software Developer
              </summary>

              <p className="font-semibold">The Software Guild (2016-2017)</p>
              <p className="my-3">
                <br />
                <h2 className="font-semibold p-2">Space-Blog Web App</h2>
                <ul className="list-none hover:list-disc">
                  <li>
                    - Successfully pulled API data through requests to a web
                    server from multiple sources
                  </li>
                  <li>
                    - Developed a web application for bloggers with the theme
                    based in space. Tied to a back-end database allowing CRUD
                    functionality throughout the app and including tight
                    security based on permissions and roles
                    <br />
                  </li>
                  <li>
                    - Applied skills with HTML, CSS, and Bootstrap to create a
                    friendly and interactive UI
                    <br />
                  </li>
                </ul>
                <br />
                <h2 className="font-semibold p-2">
                  Hotel Reservation Database
                </h2>
                <ul className="list-none hover:list-disc">
                  <li>
                    - Successfully created a Database in SQL Server Management
                    Studio that appropriately fit the needs of the business
                    request, while allowing queried test data
                    <br />
                  </li>
                  <li>
                    - Used ERD diagram design to plan out what exactly the
                    Database needed to encapsulate, prior to building the
                    database
                    <br />
                  </li>
                  <li>
                    - Compiled the Database into a shareable script that
                    re-created the Database to default values, allowing for
                    multiple instances
                    <br />
                  </li>
                </ul>
                <br />
                <h2 className="font-semibold p-2">Car Dealership Web App</h2>
                <ul className="list-none hover:list-disc">
                  <li>
                    - Created a Multi-tier solution compiled of a Data layer,
                    Models layer, Testing layer, and UI layer
                    <br />
                  </li>
                  <li>
                    - Strongly secured my web app with Microsoft OWIN security,
                    implementing 3 different roles; an administrator, a
                    contributor, and a visitor
                    <br />
                  </li>
                  <li>
                    - Used CRUD functionality with Entity Framework Database
                    creation
                    <br />
                  </li>
                  <li>
                    - Fully featured Car Dealership that allowed for adding,
                    removing, selling, and tracking cars/ the sales
                    <br />
                  </li>
                </ul>
              </p>
            </details>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
