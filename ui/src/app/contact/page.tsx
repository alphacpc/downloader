export default function Page() {
  return <div className=" min-h-[75vh] text-lg mx-[15%] flex flex-col justify-center">
    <h1 className="uppercase text-center text-4xl text-orange-600 font-bold mb-20">Contactez-nous</h1>

    <div className="flex">
      <div className="bg-orange-200 py-3 flex-1 flex flex-wrap justify-center">
        <div className="border-2 w-[12vw] m-4 flex flex-col justify-center items-center py-10 rounded border-emerald-600">
          <span>EMAIL</span>
          <span className="mt-5">jielko@contact.sn</span>
        </div>

        <div className="border-2 w-[12vw] m-4 flex flex-col justify-center items-center py-10 rounded border-emerald-600">
          <span>BUILDING</span>
          <span className="mt-5">Sénégal, Dakar</span>
        </div>

        <div className="border-2 w-[12vw] m-4 flex flex-col justify-around items-center py-10 rounded border-emerald-600">
          <span>TELPEHONE</span>
          <p className="mt-5">+ 221 XX XXX XX XX</p>
        </div>

        <div className="border-2 w-[12vw] m-4 flex flex-col justify-center items-center py-10 rounded border-emerald-600">
          <span>WEB SITE</span>
          <span className="mt-5">https://www.alphacpc.app</span>
        </div>

      </div>
      <div className="bg-green-200 p-3 flex-1">
        <form className="flex flex-wrap flex-col items-start">
          <input placeholder="Nom complet" className="w-full"/>
          <input placeholder="Email"/>
          <input placeholder="Objet"/>
          <textarea rows={5} placeholder="Message"/>
          <div>
            <input type="checkbox"/>
            <label>S'abonner aux newsletter</label>
          </div>
          <button>Envoyer</button>
        </form>
      </div>
    </div>
  </div>
}