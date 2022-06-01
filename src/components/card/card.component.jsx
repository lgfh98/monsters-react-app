export const Card = (props) => (
  <div className="flex flex-col items-center gap-4 bg-languid-lavender py-6 shadow-md transition duration-300 ease-out hover:scale-105">
    <img
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      alt="monster"
    />
    <div className="p-4">
      <h3 className="mb-2 text-center text-2xl font-bold">
        {props.monster.name}
      </h3>
      <h5 className="break-all text-center">{props.monster.email}</h5>
    </div>
  </div>
);
