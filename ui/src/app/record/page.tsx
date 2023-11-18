export default function Page() {

    let classnames = "p-2 mr-2 rounded shadow"

    return <main className="h-[80vh] mx-[10%] md:mx-[5%]">
        <div>
            <button className={`${classnames} bg-green-500 text-white`} disabled={false}>
                Commencer l'enregistrement
            </button>
            <button className={`${classnames} bg-red-500 text-white`} disabled={false}>
                Arrêter l'enregistrement
            </button>
        </div>
    </main>
  }