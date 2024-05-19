import DivContact from "@/components/DivContact"

export default function Page() {
  return <div className=" min-h-[75vh] text-lg mx-[15%] flex flex-col justify-center">
    <h1 className="uppercase text-center text-4xl text-orange-600 font-bold mb-20">Contactez-nous</h1>

    <div className="flex">
      <div className="py-3 flex-1 flex flex-wrap justify-center">
        
        <DivContact label="EMAIL" text="jielko@contact.sn"/>
        <DivContact label="LOCALISATION" text="Sénégal, Dakar"/>
        <DivContact label="TELPEHONE" text="+ 221 XX XXX XX XX"/>
        <DivContact label="WEB SITE" text="https://www.alphacpc.app"/>
        
      </div>
      <div className="bg-green-2 p-3 flex-1">
        <form method="post" className="flex flex-wrap flex-col items-start">
          <input name="fullname" id="fullname" placeholder="Nom complet" className="w-full px-2 py-4 outline-none rounded mb-4"/>
          <input name="email" id="email" placeholder="Email" className="w-full px-2 py-4 outline-none rounded mb-4"/>
          <input name="object" id="object" placeholder="Objet" className="w-full px-2 py-4 outline-none rounded mb-4"/>
          <textarea name="message" id="message" rows={5} placeholder="Message" className="w-full px-2 py-4 outline-none rounded mb-4"/>
          <div className="my-4">
            <input type="checkbox" id="id_newsletter"/>
            <label className="ml-4 cursor-pointer" htmlFor="id_newsletter">S'abonner aux newsletter</label>
          </div>
          <button className="bg-green-600 text-white rounded px-5 py-2 outline-none">Envoyer</button>
        </form>
      </div>
    </div>
  </div>
}