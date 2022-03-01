import { RiComputerLine } from "react-icons/ri";
import { FaAdobe, FaAtlassian, FaFileAudio, FaGamepad, FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill, Snippet, Container, CryptoWallet, SideBarIcon, SupportMe } from "./types";
import { BsCircleFill } from "react-icons/bs";
import { SiAdobecreativecloud, SiAngular, SiAtlassian, SiAuth0, SiAzuredevops, SiAzurepipelines, SiCplusplus, SiCsharp, SiHtml5, SiMicrosoftsqlserver, SiNextDotJs, SiReact, SiTailwindcss, SiUnrealengine } from "react-icons/si";
import { GiTreeGrowth } from "react-icons/gi";

export const repositories: string[] = [
  'https://github.com/spectrexyz/use-nft'
]
export const supportSites: SupportMe[] = [
  {
    title: 'Buy me a coffee',
    url: 'https://www.buymeacoffee.com/csharpener22',
    image: '/images/bmac.png',
  }
]
export const wallets: CryptoWallet[] = [
  {
    network:'Bitcoin',
    symbol: 'BTC',
    address: 'bc1qz36jaaas6qhvmfl2m4czl07fcrnk7vs64jrwgt',
    url: 'https://www.blockchain.com/btc/address/bc1qz36jaaas6qhvmfl2m4czl07fcrnk7vs64jrwgt',
    image: '/images/btc.png',
  },
  {
    network:'Ethereum',
    symbol: 'ETH',
    address: '0x4d6cdD279FeC9587bb2648967499E950C89cc1D9',
    url: 'https://etherscan.io/address/0x4d6cdd279fec9587bb2648967499e950c89cc1d9',
    image: '/images/eth.png',
  },
  {
    network:'Cardano',
    symbol: 'ADA',
    address: 'addr1q8eecxan54lgwnd9rncmty3slugyvkn9aedzcx59y5mqel4q50d34dx6w8wpv2vckumde59drsf6tycqwmhwmgkfwqasp8w6f2',
    url: 'https://cardanoscan.io/address/01f39c1bb3a57e874da51cf1b59230ff10465a65ee5a2c1a8525360cfea0a3db1ab4da71dc162998b736dcd0ad1c13a5930076eeeda2c9703b',
    image: '/images/cardano.png',
  }
]
export const services: Service[] = [
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "REST APIs using <b>C# .NET controllers</b>  & <b>Node API controllers</b> for the required software environments. Experience working <b>Object Oriented Programming</b> principles like inheritance, interfaces, factories, and other C# methodologies.",
      url: '/images/csharp.jpg',
    tags: ['C#', 'REST API', '.NET', 'Node', 'JS']
  },
  {
    Icon: RiComputerLine,
    title: "Front-End Development",
    about:
      "I can build a modern, mobile-friendly, and scalable SPA using <b> HTML</b>,<b>CSS</b> and <b>Angular 10 +</b>. Now learning React's Next js framework for fast server side rendered applications. ",
      url: '/images/angularreact.png',
    tags: ['C#', 'API', '.NET']
  },
  {
    Icon: FaServer,
    title: "SQL Server Development",
    about:
      "Experience creating, managing, scaling, and deploying to a database server and api using <b>C# .NET ORM's</b>, <b>SQL Server Management Studio</b>, & <b>Azure Architecture</b>. As well as personal experience in AWS & Firebase server configuration environments.",
    url: '/images/sql-server.png',
    tags: ['C#', '.NET Core', 'SSMS', 'SQL', 'EF Core', 'Entity Framework' ,'Dapper', 'Azure Functions', 'Serverless']
  },
  {
    Icon: SiAzurepipelines,
    title: "Azure SAAS Architecture",
    about: "Create, manage, and maintain Azure Architecture following current best practices (Hosted by Microsoft docs) like <b>Subscriptions and permissions</b>, <b>Resource Groups</b>  and <b>Service hosting</b>. With experience in B2C IEF as well, I have confidence in most  areas of Azure Architecture.",
    url: '/images/microsoft_azure.png',
    tags: ['Directories', 'Tenants', 'Groups', 'Subscriptions', 'Permissions', 'Auth', 'Server']
  },
  {
    Icon: SiAuth0,
    title: "Azure B2C IEF",
    about:
      "In depth knowledge around advanced authentication using B2C IEF (Identity Experience Framework) on custom login policies. These login policies can be tailored towards the business needs for collecting additional attributes within the B2C AAD directory.",
      url: '/images/b2c.png',
    tags: ['B2C', 'IEF', 'Auth']
  },
  {
    Icon: FaAtlassian,
    title: "Atlassian Tools",
    about: "Create, manage, and maintain Azure Architecture following current best practices (Hosted by Microsoft docs) like <b>Subscriptions and permissions</b>, <b>Resource Groups</b>  and <b>Service hosting</b> ",
    url: '/images/atlassian.jpg',
    tags: ['Confluence', 'JIRA', 'Bitbucket']
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI & UX Designer",
    about:
      "Experience using design tools like Adobe Photoshop, Illustrator, In-Design, and Adobe Xd to create website and mobile app wireframes. This helps the developers and engineers for laying out the app and it's functions. Exporting standard formats like SVG (scalable vector graphics), pdf, and other light weight file formats.  ",
      url: '/images/ui-ux.png',
    tags: ['Adobe Creative Cloud', 'API', '.NET']
  },
  {
    Icon: FaAdobe,
    title: "Adobe Creative Cloud Products",
    about:
      "I have extensive experience with Photoshop, After Effects, and Character Animator. Adobe Xd, Illustrator, and photoshop can be combined to create custom web experiences with their own look and feel",
      url: '/images/adobe.jpg',
    tags: ['Xd', 'Ps', 'Ai', 'Ch', 'Ae', 'SVG Export']
  },
  {
    Icon: FaFileAudio,
    title: "Audio Production",
    about:
      "Albeton Live 11 is my current DAW of choice for all stages of music production from staging, instrumentation, mixing, and mastering audio. I have experience with EDM, Rap, Trap, and Audio Books.",
      url: '/images/ableton-live-11.jpg',
    tags: ['ALS 10', 'ALS 11', 'Logix Pro X', 'DAWs', 'Meta Sounds UE5']
  },
  {
    Icon: FaGamepad,
    title: "UE4 C++",
    about:
      "UE4 C++ is great for data visualization and experimentation through code. A great medium that allows artists and programmers to set up scenes, games, renders, and much more.",
      url: '/images/ILoveLamp.png',
    tags: ['UE4', 'UE5', 'C++', 'Blueprints']
  },
];

export const barIcons: SideBarIcon[] =[
  {
    Icon: SiCsharp,
    title: 'C#',
    url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    style: {
      color: 'purple'
    }
  },
  {
    Icon: SiAngular,
    title: 'Angular',
    url: 'https://angular.io/docs',
    style: {
      color: 'crimson'
    }
  },
  {
    Icon: SiNextDotJs,
    title: 'Next.js',
    url: 'https://nextjs.org/docs',
    style: {
      color: '#7c7c7c'
    }
  },
  {
    Icon: SiReact,
    title: 'React',
    url: 'https://reactjs.org/docs/getting-started.html',
    style: {
      color: 'light blue'
    }
  },
  {
    Icon: SiTailwindcss,
    title: 'Tailwind',
    url: 'https://tailwindcss.com/docs/installation',
    style: {
      color: 'light blue'
    }
  },
  {
    Icon: SiMicrosoftsqlserver,
    title: 'SQL',
    url: 'hhttps://www.microsoft.com/en-us/sql-server/sql-server-downloads',
    style: {
      color: 'gray'
    }
  },
  {
    Icon: SiCplusplus,
    title: 'C++',
    url: 'https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/ProgrammingWithCPP/',
    style: {
      color: 'green'
    }
  },
  {
    Icon: SiHtml5,
    title: 'HTML',
    url: 'https://www.w3docs.com/learn-html/html5-introduction.html',
    style: {
      color: '#ef4b00'
    }
  },
  {
    Icon: SiAdobecreativecloud,
    title: 'Creative Cloud',
    url: 'https://www.adobe.io/creative-cloud-libraries/docs/',
    style: {
      color: '#d18a3a'
    }
  },
  {
    Icon: SiAzuredevops,
    title: 'Azure',
    url: 'https://docs.microsoft.com/en-us/azure/devops/?view=azure-devops',
    style: {
      color: '#29ABE2'
    }
  },
  {
    Icon: SiAtlassian,
    title: 'Atlassian Tools',
    url: 'https://www.atlassian.com/',
    style: {
      color: '#29ABE2'
    }
  },
  {
    Icon: SiUnrealengine,
    title: 'Unreal Engine',
    url: 'https://docs.unrealengine.com/4.27/en-US/',
    style: {
      color: 'gray'
    }
  },
]
export const containers: Container[] = [
  {
    title: 'API',
    environment: 'C# .NET',
    description: `Utilized both .NET Core and .NET Framework for building API's. Deployed a .NET EFCore solution with Azure Trigger Functions for a scalable and low cost solution. Utilized the .NET Framework with Entity Framework to deploy web app API controllers and a database schema.`,
  },
  {
    title: 'Server',
    environment: 'SSMS',
    description: `Using SSMS I've created, updated, managed, and deleted databases in development, staging, and production environments.`,
  },
  {
    title: 'Web SPA',
    environment: 'Angular',
    description: `Originally using AngularJS and now using Angular 12+ to build internal front end management interfaces that are connected to the backend services. Moving development into React and Next.js with Tailwind for Server Side rendering capabilities`,
  },
  {
    title: 'Authentication',
    environment: 'B2C IEF',
    description: `B2C is a scalable authentication solution for Azure that can be extended by using Identity Experience Framework custom policies. I built custom policies for terms of use user acceptance checking on each login, sign-up, sign-in, and forgot password.`,
  },
  {
    title: 'CI/CD Deployment',
    environment: 'Azure/Bitbucket',
    description: `Utilizing Azure pipelines for .NET core and bitbucket pipelines for .NET framework and the Front-End apps, we use these build tools to monitor our realeses and automate the deployment process when happy. `,
  },
  {
    title: 'Agile/SCRUM Development',
    environment: 'Atlassian Tools',
    description: `Responsible for managing and organizing tasks, pages, and spaces within Confluence, Bitbucket, and JIRA. Creating structure within each of these for the differing project types and user roles.`,
  },
]

export const snippets: Snippet[] = [
  {
    language: 'react',
    environment: 'React, Next.js, & Tailwind Card',
    description: 'A React, Next.js, & Tailwind card component used in this project.',
    snippet: `
    import { FunctionComponent } from "react";
import { Service } from "../types";
// import { motion } from 'framer-motion'

const ServiceCard: FunctionComponent<{ service: Service }> = ({
  service: { Icon, title, about, url, tags },
}) => {
  //XSS attack :( on our portfolio btw, as an alternate use npm i dom purify
  function createMarkup() {
    return {
      __html: about,
    };
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg card cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200 m-auto font-hpr">
      <img src={url} alt="avatar" className="w-full" />
      <details className="cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
        <summary className="font-bold text-xl mb-2">{title}</summary>
        <div className="px-6 py-4">
          <p
            className="dark:text-blue text-base"
            dangerouslySetInnerHTML={createMarkup()}
          />
        </div>
        <div className="px-6 pt-4 pb-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:bg-gray-200 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <Icon className="px-2 py-1 my-3 w-24 h-24 text-blue mx-auto" />
      </details>
    </div>
  );
};

export default ServiceCard;
`
  },
  {
    language: 'c#',
    environment: 'C# API Entity Controller',
    description: 'Basic CRUD entity controller - coould make it take a generic type and cast to the specific table, but this would operate as a db table api.',
    snippet: `
    [ApiController]
    [Route("[controller]")]
    public class EntityController : ControllerBase
    {
        private readonly DbContext _dbContext;
        public EntityController(DbContext dbContext)
        {
            _dbContext = dbContext;
        }
    
        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            var entitys = await _dbContext.Entity.ToListAsync();
            return Ok(entitys);
        }
    
        [HttpGet]
        [Route("get-entity-by-id")]
        public async Task<IActionResult> GetEntityByIdAsync(int id)
        {
            var entity = await _dbContext.Entity.FindAsync(id);
            return Ok(entity);
        }
    
        [HttpPost]
        public async Task<IActionResult> PostAsync(Entity entity)
        {
            _dbContext.Entity.Add(entity);
            await _dbContext.SaveChangesAsync();
            return Created($"/get-entity-by-id?id={entity.Id}", entity);
        }
    
        [HttpPut]
        public async Task<IActionResult> PutAsync(Entity entityToUpdate)
        {
            _dbContext.Entity.Update(entityToUpdate);
            await _dbContext.SaveChangesAsync();
            return NoContent();
        }
    
        [Route("{id}")]
        [HttpDelete]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var entityToDelete = await _dbContext.Entity.FindAsync(id);
            if (entityToDelete == null)
            {
                return NotFound();
            }
            _dbContext.Entity.Remove(entityToDelete);
            await _dbContext.SaveChangesAsync();
            return NoContent();
        }
    }`
  },
  {
    language: 'javascript',
    environment: 'Visual Studio Code',
    description: 'Boolean Number Comparison.',
    snippet: `1 == true;
    1 == Number(true);
    1 == 1; // -> true
    // but…
    1.1 == true;
    1.1 == Number(true);
    1.1 == 1; // -> false`
  },
]


export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Azure Architecture",
    level: "76",
  },
  {
    Icon: BsCircleFill,
    name: "C# .NET",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Angular",
    level: "73",
  },
  {
    Icon: BsCircleFill,
    name: "SSMS",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "HTML",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "B2C IEF",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Typescript",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "UE4 C++",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Next.js",
    level: "54",
  },
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "52",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Plutus",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "Solidity",
    level: "40",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Ableton Live DAW",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Character Animator",
    level: "86",
  },
  {
    Icon: BsCircleFill,
    name: "Unreal Engine",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Logic DAW",
    level: "74",
  },
  {
    Icon: BsCircleFill,
    name: "After Effects",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Premiere Pro",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "SVG Graphics",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "65",
  },
];

export const projects: IProject[] = [
  { 
    name: "Roots App",
    description:
      "This app is an administrator app meant for seting up proprietary hardware devices - linked to Azure authentication. Example page posted to github.",
    image_path: "/images/roots-login.png",
    deployed_url: "https://test.admin.earthscout.com",
    github_url: "https://github.com/csharpener22/B2C-IEF-Custom-Policies-LocalwithTOS.git",
    category: ["angular"],
    key_techs: ["Angular 10+", "d3.js", "Material UI", "CSS"],
  },
  {
    name: "B2C Login Policies",
    image_path: "/images/earthscout-login.png",
    deployed_url: "https://scout.earthscout.com/",
    github_url: "https://github.com/csharpener22/B2C-IEF-Custom-Policies-LocalwithTOS.git",
    category: ["azure"],
    description:
      "Login page displaying the implementation of B2C IEF custom login policies - implementing Terms of Use acceptance on all User Flows. Example set of policies (similar but not the same) hosted on github.",
    key_techs: ["Azure", "B2C", "HTML", "CSS"],
  },

  {
    name: "Generative Characters",
    image_path: "/images/generative-art-cover.png",
    deployed_url: "https://dev-talks.herokuapp.com/",
    github_url: "https://github.com/csharpener22/B2C-IEF-Custom-Policies-LocalwithTOS.git",
    category: ["node", "mongo", "react"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },

  {
    name: "Next.js Portfolio",
    image_path: "/images/self.png",
    deployed_url: "https://sumit-chat.netlify.app/",
    github_url: "https://github.com/csharpener22/B2C-IEF-Custom-Policies-LocalwithTOS.git",
    category: ["node", "react"],
    description:
      "The Code for how this repo was built",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    name: "The Poster Children",
    image_path: "/images/tpc-main.png",
    deployed_url: "http://www.theposterchildren.com/",
    github_url: "https://github.com/csharpener22/B2C-IEF-Custom-Policies-LocalwithTOS.git",
    category: ["wordpress"],
    description:
      "A website that encapsulates a big idea that's being worked on for an automated online blockchain experience.",
    key_techs: ["Wordpress"],
  },

  {
    name: "Third Eye Equestrian",
    image_path: "/images/Logo_ThirdEyeEquestrian_Desktops.png",
    deployed_url: "http://www.thirdeyeequestrian.com/",
    github_url: "https://github.com/csharpener22/B2C-IEF-Custom-Policies-LocalwithTOS.git",
    category: ["wordpress"],
    description:
      "A wordpress website that's under construction for a forward thinking equestrian business.",
    key_techs: ["Wordpress"],
  },

  {
    name: "Plutus Pioneer Contracts",
    image_path: "/images/cardano.jpg",
    deployed_url: "!#",
    github_url: "https://github.com/csharpener22/plutus-pioneer-homework.git",
    category: ["blockchain"],
    description:
      "Took the Functional programming course for Plutus, the smart contract platform of Cardano (ADA).",
    key_techs: ["Blockchain", "Plutus", "Haskel"],
  },
  {
    name: "(Ethereum) Solidity Contracts",
    image_path: "/images/solidity.png",
    deployed_url: "https://not-utube.web.app/",
    github_url: "https://github.com/csharpener22/B2C-IEF-Custom-Policies-LocalwithTOS.git",
    category: ["blockchain"],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: [
      "React",
      "Redux",
      "Blockchain",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
  {
    name: "Junior Development Content",
    image_path: "/images/git-github.jpg",
    deployed_url: "https://o-my-goal.web.app/",
    github_url: "https://github.com/csharpener22/B2C-IEF-Custom-Policies-LocalwithTOS.git",
    category: ["c#"],
    description:
      "A collection of projects that were required of me as a Junior Developer at The Software Guild",
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  },
];
