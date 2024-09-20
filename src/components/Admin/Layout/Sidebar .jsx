export default function Sidebar () {
    const SidebarItems = [
        { name: "Home", link: "/" },
        {
            name: "Products",
            link: "#",
            // dropdown: [
            //     { name: "Electronics", link: "#" },
            //     { name: "Clothing", link: "#" },
            //     { name: "Books", link: "#" },
            // ],
        },
        { name: "About", link: "#" },
        { name: "Contact", link: "#" },
    ];
    return (
        <div className="h-screen bg-gray-100 shadow-md w-64 p-6">
        <div className="flex items-center mb-6">
          <span className="text-purple-600 font-bold text-2xl">MATERIO</span>
        </div>
        <ul>
        { SidebarItems.map((items,index )=>(
          <li key={index} className="mb-4">
            <a href={items.link} className="flex items-center p-2 hover:text-purple-600 hover:bg-[linear-gradient(88deg,_#C6A7FE,_#9155FD_94%)] rounded-lg " >
              <span className="ml-3">{items.name}</span>
            </a>
          </li>
       ) )}
        </ul>
        <div className="mt-auto">
          <a href="#" className="flex items-center p-2 text-purple-600">
            <span>Upgrade to Premium</span>
          </a>
        </div>
      </div>
    )
}
