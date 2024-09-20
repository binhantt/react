export default function Header ({setActivePage }){
            return(
                <main className="flex-1 ">
                 
          
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    <div className="bg-white p-6 shadow rounded-lg">
                      <h3 className="text-lg font-semibold">Total Earning</h3>
                      <p className="text-2xl font-bold">$24,895</p>
                      <p className="text-green-500">+10%</p>
                    </div>
                    {/* Add more cards as needed */}
                  </div>
          
                  {/* Add more content as needed */}
                </main>
            )
}