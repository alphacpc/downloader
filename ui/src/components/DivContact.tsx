
type DivContactProps = {
        label: String;
        text: String;
}

const DivContact = ({label, text}:DivContactProps) => {
  return (
        <div className="border-2 shadow-lg w-[12vw] m-4 flex flex-col justify-around items-center py-10 rounded border-emerald-600">
                <span>{label}</span>
                <span className="mt-5">{text}</span>
        </div>
  )
}

export default DivContact;