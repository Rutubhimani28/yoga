import {
  Facebook,
  Twitter,
  Instagram,
  Home,
  Mail,
  CalendarToday,
  Book,
  Chat,
} from "@mui/icons-material";
import recentFirst from "../assets/images/classes-3.jpg";
import recentSecond from "../assets/images/classes-4.jpg";
const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 px-4 sm:px-6 md:px-10 text-gray-800 mt-3">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h5 className="font-bold mb-4 text-xl">Yogabest</h5>
              <p className="mb-4 text-sm">
                Discover inner peace and wellness through mindful yoga practices
                that nurture your body, mind, and soul.
              </p>
              <div className="flex gap-4">
                <Facebook className="text-gray-600 hover:text-blue-600 cursor-pointer" />
                <Twitter className="text-gray-600 hover:text-blue-400 cursor-pointer" />
                <Instagram className="text-gray-600 hover:text-pink-600 cursor-pointer" />
              </div>
            </div>

            <div>
              <h6 className="font-bold mb-4 text-lg">Explore</h6>
              <ul className="list-none p-0 m-0">
                {[
                  {
                    name: "About",
                    icon: <Home fontSize="small" />,
                    href: "/about",
                  },
                  {
                    name: "Contact",
                    icon: <Mail fontSize="small" />,
                    href: "/contact",
                  },
                  {
                    name: "Classes",
                    icon: <Book fontSize="small" />,
                    href: "/classes",
                  },
                  {
                    name: "Schedule",
                    icon: <CalendarToday fontSize="small" />,
                    href: "/schedule",
                  },
                  {
                    name: "Blog",
                    icon: <Chat fontSize="small" />,
                    href: "/blog",
                  },
                ].map((item) => (
                  <li key={item.name} className="mb-2 flex items-center">
                    <span className="mr-2 text-gray-500">{item.icon}</span>
                    <a
                      href={item.href}
                      className="text-current hover:text-blue-600 text-sm transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h6 className="font-bold mb-4 text-lg">Recent Blog</h6>
              <div className="mb-4 flex gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden">
                  <img
                    src={recentFirst}
                    alt="Yoga practice"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="mb-1 text-sm">
                    Yoga practices to boost happiness
                  </p>
                  <p className="text-xs text-gray-500">June 15, 2023</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden">
                  <img
                    src={recentSecond}
                    alt="Yoga practice"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="mb-1 text-sm">
                    Yoga practices to boost happiness
                  </p>
                  <p className="text-xs text-gray-500">May 28, 2023</p>
                </div>
              </div>
            </div>

            <div>
              <h6 className="font-bold mb-4 text-lg">Have a Question?</h6>
              <address className="not-italic">
                <p className="mb-2 text-sm">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
                <p className="mb-2 text-sm">+2 392 3939 210</p>
                <p className="text-sm">info@yourdomain.com</p>
              </address>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 my-8"></div>

        <p className="text-center text-sm">
          © {new Date().getFullYear()} Yogabest. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
